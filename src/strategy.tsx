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

      return {
        area,
        entities: areaEntities,
        states: areaStates,
        icon: areasConfig?.[area.area_id]?.icon,
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
            ...areaConfigs.map(({ area, entities, states, icon }) => (
              <HomeArea
                area={area}
                entities={entities}
                states={states}
                icon={icon}
              />
            )),
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
