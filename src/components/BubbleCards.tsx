import { elementToConfig } from "../jsx";
import { AreaConfig } from "../strategy";
import { findFirstStatesEntityId, findStatesEntities } from "../strategy-utils";

export const BubbleCards = ({
  areaConfigs,
}: {
  areaConfigs: Array<AreaConfig>;
}) => {
  return [
    ...areaConfigs.map(({ area, entities, states }) => (
      <BubbleAreaCard area={area} entities={entities} states={states} />
    )),
    <BubbleHorizontalButtons areaConfigs={areaConfigs} />,
  ];
};

const BubbleAreaCard = ({ area, entities, states, icon }: AreaConfig) => {
  const coverEntityId = findFirstStatesEntityId(states, "cover");
  let coverCard = null;
  if (coverEntityId) {
    coverCard = <custom-bubble-card card_type="cover" entity={coverEntityId} />;
  }

  const climateEntityId = findFirstStatesEntityId(states, "climate");
  let climateCard = null;
  if (climateEntityId) {
    climateCard = (
      <custom-mushroom-climate-card
        entity={climateEntityId}
        collapsible_controls={false}
        fill_container={false}
        hvac_modes={["heat", "cool"]}
        show_temperature_control={true}
        hold_action={{ action: "more-info" }}
        double_tap_action={{ action: "more-info" }}
        card_mod={{
          style: "ha-card {\n  border: none;\n  padding: 0 !important;\n}\n",
        }}
      />
    );
  }

  let cameraCards = findStatesEntities(states, "camera").map((entity) => {
    return <picture-entity camera_view="live" entity={entity.entity_id} />;
  });

  return (
    <vertical-stack>
      <custom-bubble-card
        card_type="pop-up"
        hash={`#${area.area_id}`}
        name={area.name}
        icon={icon}
        // entity="light.bureau"
        // state="sensor.bureau_room_temperature"
        auto_close="15000"
      />
      <custom-bubble-card
        card_type="separator"
        name="Lights"
        icon="mdi:lightbulb"
      />
      {...entities
        .filter((entity) => entity.entity_id.startsWith("light."))
        .map((entity) => {
          return (
            <horizontal-stack>
              <custom-bubble-card
                card_type="button"
                entity={entity.entity_id}
                button_type="switch"
                show_state={true}
              />
            </horizontal-stack>
          );
        })}
      {...[coverCard, climateCard].filter(Boolean)}
      {...cameraCards}
    </vertical-stack>
  );
};

const BubbleHorizontalButtons = ({
  areaConfigs,
}: {
  areaConfigs: Array<AreaConfig>;
}) => {
  let bubbleHorizontalButtonsStackConfig: { [key: string]: string } = {};
  areaConfigs.forEach((areaConfig, index) => {
    bubbleHorizontalButtonsStackConfig[`_${index + 1}_link`] =
      `#${areaConfig.area.area_id}`;
    bubbleHorizontalButtonsStackConfig[`_${index + 1}_name`] =
      areaConfig.area.name;

    const entityId = findFirstStatesEntityId(
      areaConfig.states,
      "light",
      undefined,
      (entity) => /group/i.test(entity.attributes.icon || "")
    );
    if (entityId) {
      bubbleHorizontalButtonsStackConfig[`_${index + 1}_entity`] = entityId;
    }
    if (areaConfig.icon) {
      bubbleHorizontalButtonsStackConfig[`_${index + 1}_icon`] =
        areaConfig.icon;
    }

    const motionEntityId =
      findFirstStatesEntityId(areaConfig.states, "binary_sensor", "motion") ||
      findFirstStatesEntityId(
        areaConfig.states,
        "binary_sensor",
        "occupancy"
      ) ||
      findFirstStatesEntityId(areaConfig.states, "binary_sensor", "presence");
    if (motionEntityId) {
      bubbleHorizontalButtonsStackConfig[`_${index + 1}_pir_sensor`] =
        motionEntityId;
    }
  });

  return (
    <vertical-stack>
      <custom-bubble-card
        card_type="horizontal-buttons-stack"
        auto_order={true}
        width_desktop="100%"
        {...bubbleHorizontalButtonsStackConfig}
      />
    </vertical-stack>
  );
};
