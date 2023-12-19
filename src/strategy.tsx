import { stringify } from "yaml";
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

    const yamlConfig = stringify(dashboard, {
      defaultStringType: "PLAIN",
      defaultKeyType: "PLAIN",
      blockQuote: "folded",
      lineWidth: 0,
      doubleQuotedMinMultiLineLength: 1000000,
    });
    const yamlConfigLines = yamlConfig.split("\n").length;

    console.groupCollapsed(
      `JSX Strategy generated config, ${yamlConfigLines} lines:`
    );

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // when logged string is too big, safari doesnt hide it 🤷‍♂️. Logging an object works.
    console.log(isSafari ? { yamlConfig } : yamlConfig);
    console.groupEnd();

    return dashboard;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
