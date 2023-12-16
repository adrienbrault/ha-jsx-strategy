import { BubbleCards } from "./components/BubbleCards";
import { HomeArea } from "./components/HomeArea";
import {
  AreaRegistryEntry,
  DeviceRegistryEntry,
  EntityRegistryEntry,
} from "./config-types";
import { elementToConfig } from "./jsx";
import { States } from "./strategy-utils";

export type AreaConfig = {
  area: AreaRegistryEntry;
  entities: Array<EntityRegistryEntry>;
  states: States;
  icon?: string;
  entityIdsByDomain: {
    [domain: string]: Array<string>;
  };
};

const configFactory = (
  areas: Array<AreaRegistryEntry>,
  entities: Array<EntityRegistryEntry>,
  states: States,
  areasConfig: Config["areas"]
): Array<AreaConfig> => {
  return areas
    .filter((area) => !area.area_id.startsWith("sonos_"))
    .map((area) => {
      const areaEntities = entities.filter(
        (entity) => entity.area_id === area.area_id
      );
      const areaStates = Object.fromEntries(
        Object.entries(states).filter(([entityId]) =>
          areaEntities.some((entity) => entity.entity_id === entityId)
        )
      );

      let entityIdsByDomain: {
        [domain: string]: Array<string>;
      } = Object.fromEntries(domains.map((domain) => [domain, []]));
      entityIdsByDomain = areaEntities
        .map((entity) => ({
          domain: entity.entity_id.split(".")[0],
          entity,
        }))
        .reduce((acc, { domain, entity }) => {
          return {
            ...acc,
            [domain]: [...(acc[domain] || []), entity.entity_id],
          };
        }, entityIdsByDomain);

      return {
        area,
        entities: areaEntities,
        states: areaStates,
        icon: areasConfig?.[area.area_id]?.icon,
        entityIdsByDomain,
      };
    });
};

type Config = {
  areas?: {
    [area: string]: {
      icon?: string;
    };
  };
};

class JsxStrategy {
  static async generateDashboard(info) {
    const states: States = info.hass.states;
    const config: Config = info.config.strategy;

    const [areas, devices, entities]: [
      Array<AreaRegistryEntry>,
      Array<DeviceRegistryEntry>,
      Array<EntityRegistryEntry>,
    ] = await Promise.all([
      info.hass.callWS({ type: "config/area_registry/list" }),
      info.hass.callWS({ type: "config/device_registry/list" }),
      info.hass.callWS({ type: "config/entity_registry/list" }),
    ]);

    const areaConfigs: Array<AreaConfig> = configFactory(
      areas,
      entities,
      states,
      config.areas
    );

    console.log("JSX Strategy state: ", {
      config,
      areas,
      devices,
      entities,
      areaConfigs,
    });

    const dashboard = {
      title: "JSX Strategy Dashboard",
      views: [
        {
          cards: [
            ...areaConfigs.map((areaConfig) => <HomeArea {...areaConfig} />),
            ...(<BubbleCards areaConfigs={areaConfigs} />),
          ],
        },
      ],
    };

    console.log("JSX Strategy generated config: ", { dashboard });

    return dashboard;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
const domains = [
  "light",
  "switch",
  "input_boolean",
  "input_number",
  "input_select",
  "input_text",
  "input_datetime",
  "scene",
  "script",
  "automation",
  "cover",
  "fan",
  "media_player",
  "lock",
  "climate",
  "humidifier",
  "person",
  "number",
  "select",
  "template",
  "update",
  "camera",
  "sensor",
  "binary_sensor",
  "thermostat",
  "weather",
  "plant",
];
