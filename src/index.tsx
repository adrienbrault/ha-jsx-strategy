import { Area, Device, Entity } from "./config-types";
import { elementToConfig } from "./jsx";

class JsxStrategy {
  static async generateDashboard(info) {
    const [areas, devices, entities]: [
      Array<Area>,
      Array<Device>,
      Array<Entity>,
    ] = await Promise.all([
      info.hass.callWS({ type: "config/area_registry/list" }),
      info.hass.callWS({ type: "config/device_registry/list" }),
      info.hass.callWS({ type: "config/entity_registry/list" }),
    ]);

    console.log({ areas, devices, entities });
    const config = {
      title: "Generated Dashboard",
      views: [
        {
          cards: areas.map((area) => {
            return (
              <markdown
                content={`${area.name} - ${
                  area.area_id
                }\nGenerated at ${new Date().toLocaleString()}`}
              ></markdown>
            );
          }),
        },
      ],
    };
    console.log({ config });
    return config;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
