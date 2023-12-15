import { Area, Device, Entity } from "./config-types";
import { elementToConfig } from "./jsx";

// Create your own components
const AreaWithLights = ({
  area,
  entities,
}: {
  area: Area;
  entities: Array<Entity>;
}) => {
  const lightEntities = entities.filter((entity) =>
    entity.entity_id.startsWith("light.")
  );

  return (
    <vertical-stack>
      <custom-mushroom-title
        title={`${area.name} - ${area.area_id}`}
      ></custom-mushroom-title>
      {...lightEntities.map((entity) => {
        return <custom-mushroom-light entity={entity.entity_id} />;
      })}
    </vertical-stack>
  );
};

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

    console.log("JSX Strategy state: ", { areas, devices, entities });
    const config = {
      title: "Generated Dashboard",
      views: [
        {
          cards: areas.map((area) => (
            // Use your component
            <AreaWithLights
              area={area}
              entities={entities.filter(
                (entity) => entity.area_id === area.area_id
              )}
            />
          )),
        },
      ],
    };
    console.log("JSX Strategy generated config: ", { config });
    return config;
  }
}

customElements.define("ll-strategy-jsx", JsxStrategy);
