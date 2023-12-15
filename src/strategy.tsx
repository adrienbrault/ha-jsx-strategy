import { HomeArea } from "./components/HomeArea";
import {
  AreaRegistryEntry,
  DeviceRegistryEntry,
  EntityRegistryEntry,
} from "./config-types";
import { elementToConfig } from "./jsx";
import { States } from "./strategy-utils";

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

    console.log("JSX Strategy state: ", { areas, devices, entities });
    const config = {
      title: "Generated Dashboard",
      views: [
        {
          cards: areas.map((area) => {
            const areaEntities = entities.filter(
              (entity) => entity.area_id === area.area_id
            );
            const areaStates = Object.fromEntries(
              Object.entries(states).filter(([entityId]) =>
                areaEntities.some((entity) => entity.entity_id === entityId)
              )
            );
            return (
              <HomeArea
                area={area}
                entities={areaEntities}
                states={areaStates}
              />
            );
          }),
        },
      ],
    };
    console.log("JSX Strategy generated config: ", { config });
    return config;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
