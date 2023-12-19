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

type CardFactory = (entityId: string) => { [key: string]: any };
type SensorCardFactory = (
  entityIDs: string[],
  deviceClass: string
) => { [key: string]: any };
type CardFactoryMap = {
  light: CardFactory;
  cover: CardFactory;
  climate: CardFactory;
  camera: CardFactory;
  media_player: CardFactory;
  binary_sensor: SensorCardFactory;
  sensor: SensorCardFactory;
};
const DefaultCardFactoryMap: CardFactoryMap = {
  light: (entityId) => {
    return (
      <custom-bubble-card
        card_type="button"
        entity={entityId}
        button_type="slider"
        show_state={true}
      />
    );
  },
  cover: (entityId) => (
    <custom-bubble-card card_type="cover" entity={entityId} />
  ),
  climate: (entityId) => (
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
  ),
  camera: (entityId) => {
    return <picture-entity entity={entityId} />;
  },
  media_player: (entityId) => (
    <custom-bubble-card
      card_type="button"
      entity={entityId}
      button_type="switch"
      show_state={true}
    />
  ),
  binary_sensor: (entityIds, deviceClass) => {
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
  },
  sensor: (entityIds, deviceClass) => (
    <custom-mini-graph-card entities={entityIds} />
  ),
};

type BubbleAreaCardProps = AreaConfig & { cardFactoryMap?: CardFactoryMap };

const responsiveGrid = (cards: any[], columns: number) => {
  return R.chunk(cards, columns).map((chunkCards: any[]) => (
    <horizontal-stack>{...chunkCards}</horizontal-stack>
  ));
};

const BubbleAreaCard = ({
  area,
  icon,
  entityIdsByDomain,
  mainEntities,
  states,
  cardFactoryMap = DefaultCardFactoryMap,
}: BubbleAreaCardProps) => {
  let cards: any[] = [];
  if (entityIdsByDomain["light"].length > 0) {
    const lightCards = entityIdsByDomain["light"].map(cardFactoryMap.light);

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Lights"
        icon="mdi:lightbulb"
      />,
      ...responsiveGrid(lightCards, 2)
    );
  }

  if (entityIdsByDomain["cover"].length > 0) {
    const coverCards = entityIdsByDomain["cover"].map(cardFactoryMap.cover);

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Covers"
        icon="mdi:thermostat"
      />,

      ...responsiveGrid(coverCards, 2)
    );
  }

  if (entityIdsByDomain["climate"].length > 0) {
    const climateCards = entityIdsByDomain["climate"].map(
      cardFactoryMap.climate
    );

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Climate"
        icon="mdi:thermostat"
      />,
      ...responsiveGrid(climateCards, 2)
    );
  }

  if (entityIdsByDomain["camera"].length > 0) {
    const cameraCards = entityIdsByDomain["camera"].map(cardFactoryMap.camera);

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
      cardFactoryMap.media_player
    );

    cards.push(
      <custom-bubble-card
        card_type="separator"
        name="Media Players"
        icon="mdi:multimedia"
      />,
      ...responsiveGrid(mediaPlayerCards, 2)
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
    ).map(([deviceClass, entityIds]) =>
      cardFactoryMap.binary_sensor(entityIds, deviceClass)
    );
    const sensorCards = Object.entries(
      R.groupBy(
        entityIdsByDomain["sensor"],
        (entityId) => states[entityId].attributes.device_class
      )
    ).map(([deviceClass, entityIds]) =>
      cardFactoryMap.sensor(entityIds, deviceClass)
    );

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
