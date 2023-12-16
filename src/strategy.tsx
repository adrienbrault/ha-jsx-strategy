import { AreaConfig, configFactory } from "./area";
import { BubbleCards } from "./components/BubbleCards";
import { HomeArea } from "./components/HomeArea";
import {
  AreaRegistryEntry,
  DeviceRegistryEntry,
  EntityRegistryEntry,
} from "./config-types";
import { elementToConfig } from "./jsx";
import { States } from "./strategy-utils";

export type StrategyConfig = {
  areas?: {
    [area: string]: {
      icon?: string;
    };
  };
};

class JsxStrategy {
  static async generateDashboard(info) {
    const states: States = info.hass.states;
    const config: StrategyConfig = info.config.strategy;

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
