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
};
const configFactory = (
  areas: Array<AreaRegistryEntry>,
  entities: Array<EntityRegistryEntry>,
  states: States
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
      return { area, entities: areaEntities, states: areaStates };
    });
};

class JsxStrategy {
  static async generateDashboard(info) {
    const states: States = info.hass.states;

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
      states
    );

    console.log("JSX Strategy state: ", { areas, devices, entities });

    const config = {
      title: "JSX Strategy Dashboard",
      views: [
        {
          cards: [
            ...areaConfigs.map(({ area, entities, states }) => (
              <HomeArea area={area} entities={entities} states={states} />
            )),
            ...(<BubbleCards areaConfigs={areaConfigs} />),
          ],
        },
      ],
    };

    console.log("JSX Strategy generated config: ", { config });

    return config;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
