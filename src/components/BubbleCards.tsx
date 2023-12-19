import { AreaConfig } from "../area";
import { elementToConfig } from "../jsx";

import * as R from "remeda";

export const BubbleCards = ({
  areaConfigs,
}: {
  areaConfigs: Array<AreaConfig>;
}) => {
  return [
    ...areaConfigs.map((areaConfig) => <BubbleAreaCard {...areaConfig} />),
    <BubbleHorizontalButtons areaConfigs={areaConfigs} />,
  ];
};

const BubbleAreaCard = ({
  area,
  icon,
  entityIdsByDomain,
  mainEntities,
  states,
}: AreaConfig) => {
  let cards: any[] = [];
  if (entityIdsByDomain["light"].length > 0) {
    const lightCards = entityIdsByDomain["light"].map((entityId) => {
      return (
        <custom-bubble-card
          card_type="button"
          entity={entityId}
          button_type="switch"
          show_state={true}
        />
      );
    });

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Lights"
        icon="mdi:lightbulb"
      />,
      <grid columns={2} square={false}>
        {...lightCards}
      </grid>
    );
  }

  if (entityIdsByDomain["cover"].length > 0) {
    const coverCards = entityIdsByDomain["cover"].map((entityId) => (
      <custom-bubble-card card_type="cover" entity={entityId} />
    ));

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Covers"
        icon="mdi:thermostat"
      />,
      <grid columns={2} square={false}>
        {...coverCards}
      </grid>
    );
  }

  if (entityIdsByDomain["climate"].length > 0) {
    const climateCards = entityIdsByDomain["climate"].map((entityId) => (
      <custom-mushroom-climate-card
        entity={entityId}
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
    ));

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Climate"
        icon="mdi:thermostat"
      />,
      <grid columns={2} square={false}>
        {...climateCards}
      </grid>
    );
  }

  if (entityIdsByDomain["camera"].length > 0) {
    const cameraCards = entityIdsByDomain["camera"].map((entityId) => {
      return <picture-entity entity={entityId} />;
    });

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Cameras"
        icon="mdi:camera"
      />,
      ...cameraCards
    );
  }
  if (entityIdsByDomain["media_player"].length > 0) {
    const mediaPlayerCards = entityIdsByDomain["media_player"].map(
      (entityId) => (
        <custom-bubble-card
          card_type="button"
          entity={entityId}
          button_type="switch"
          show_state={true}
        />
      )
    );

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Media Players"
        icon="mdi:multimedia"
      />,
      <grid columns={2} square={false}>
        {...mediaPlayerCards}
      </grid>
    );
  }

  if (
    entityIdsByDomain["binary_sensor"].length > 0 ||
    entityIdsByDomain["sensor"].length > 0
  ) {
    const binarySensorCards = Object.entries(
      R.groupBy(
        entityIdsByDomain["binary_sensor"],
        (entityId) => states[entityId].attributes.device_class
      )
    ).map(([deviceClass, entityIds]) => {
      const stateMap = [
        {
          value: "off",
          label: sensorStates[deviceClass][0] || sensorStates.None,
        },
        {
          value: "on",
          label: sensorStates[deviceClass][1] || sensorStates.None,
        },
      ];
      return (
        <custom-mini-graph-card
          entities={entityIds}
          hours_to_show="1"
          points_per_hour="60"
          update_interval="30"
          aggregate_func="max"
          line_width="2"
          smoothing={false}
          state_map={stateMap}
        />
      );
    });
    const sensorCards = Object.values(
      R.groupBy(
        entityIdsByDomain["sensor"],
        (entityId) => states[entityId].attributes.device_class
      )
    ).map((entityIds) => <custom-mini-graph-card entities={entityIds} />);

    cards = [
      ...cards,

      <custom-bubble-card card_type="separator" name="Sensor" icon="mdi:eye" />,

      ...sensorCards,
      ...binarySensorCards,
    ];
  }

  return (
    <vertical-stack>
      <custom-bubble-card
        card_type="pop-up"
        hash={`#${area.area_id}`}
        name={area.name}
        icon={icon}
        entity={mainEntities.light}
        state={mainEntities.temperature}
        auto_close="15000"
      />

      {...cards}
    </vertical-stack>
  );
};

const BubbleHorizontalButtons = ({
  areaConfigs,
}: {
  areaConfigs: Array<AreaConfig>;
}) => {
  let bubbleHorizontalButtonsStackConfig: { [key: string]: string } =
    areaConfigs
      .map(({ area, icon, mainEntities }) => {
        let buttonConfig: Record<string, string> = {
          link: `#${area.area_id}`,
          name: area.name,
        };

        if (mainEntities.light) {
          buttonConfig["entity"] = mainEntities.light;
        }
        if (icon) {
          buttonConfig["icon"] = icon;
        }
        if (mainEntities.motion) {
          buttonConfig[`pir_sensor`] = mainEntities.motion;
        }

        return buttonConfig;
      })
      .map((buttonConfig, index) =>
        R.mapKeys(buttonConfig, (key) => `_${index + 1}_${key}`)
      )
      .reduce((acc, buttonConfig) => {
        return {
          ...acc,
          ...buttonConfig,
        };
      }, {});

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

const sensorStates = {
  None: ["On", "Off"],
  battery: ["Low", "Normal"],
  battery_charging: ["Charging", "Not Charging"],
  carbon_monoxide: ["Detected", "Clear"],
  cold: ["Cold", "Normal"],
  connectivity: ["Connected", "Disconnected"],
  door: ["Open", "Closed"],
  garage_door: ["Open", "Closed"],
  gas: ["Detected", "Clear"],
  heat: ["Hot", "Normal"],
  light: ["Detected", "No Light"],
  lock: ["Unlocked", "Locked"],
  moisture: ["Wet", "Dry"],
  motion: ["Detected", "Clear"],
  moving: ["Moving", "Stopped"],
  occupancy: ["Occupied", "Not Occupied"],
  opening: ["Open", "Closed"],
  plug: ["Plugged In", "Unplugged"],
  power: ["Detected", "No Power"],
  presence: ["Home", "Away"],
  problem: ["Problem Detected", "OK"],
  running: ["Running", "Not Running"],
  safety: ["Unsafe", "Safe"],
  smoke: ["Detected", "Clear"],
  sound: ["Detected", "Clear"],
  tamper: ["Tampering Detected", "Clear"],
  update: ["Update Available", "Up-to-date"],
  vibration: ["Detected", "Clear"],
  window: ["Open", "Closed"],
};
