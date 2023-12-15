import { AreaRegistryEntry, EntityRegistryEntry } from "../config-types";
import { elementToConfig } from "../jsx";
import {
  States,
  findFirstStatesEntityId,
  findStatesEntities,
} from "../strategy-utils";

export const HomeArea = ({
  area,
  entities,
  states,
}: {
  area: AreaRegistryEntry;
  entities: Array<EntityRegistryEntry>;
  states: States;
}) => {
  const secondary = areaSecondary(states);
  const { badge_color, badge_icon } = areaBadge(states);
  let chips = areaChips(states);

  let card = (
    <custom-mushroom-template-card
      primary={area.name}
      secondary={secondary}
      icon="mdi:texture-box"
      icon_color="blue"
      tap_action={{ action: "navigate", navigation_path: area.area_id }}
      badge_color={badge_color}
      badge_icon={badge_icon}
    />
  );

  if (chips.length) {
    card.card_mod = {
      style: `ha-card {
          border: none;
        }`,
    };

    card = (
      <custom-stack-in-card mode="vertical">
        {card}
        <AreaChips chips={chips} />
      </custom-stack-in-card>
    );
  }

  return card;
};

const areaSecondary = (states: States) => {
  let secondaries: string[] = [];
  const temperatureSensorId = findFirstStatesEntityId(
    states,
    "sensor",
    "temperature"
  );
  const humiditySensorId = findFirstStatesEntityId(
    states,
    "sensor",
    "humidity"
  );
  const illuminanceSensorId = findFirstStatesEntityId(
    states,
    "sensor",
    "illuminance"
  );

  if (temperatureSensorId) {
    secondaries.push(`🌡️{{ states('${temperatureSensorId}') | int }}°`);
  }
  if (humiditySensorId) {
    secondaries.push(`💧{{ states('${humiditySensorId}') | int }}%`);
  }
  if (illuminanceSensorId) {
    secondaries.push(`☀️{{ states('${illuminanceSensorId}')}}lx`);
  }
  return secondaries.join(" ");
};

const areaBadge = (states: States) => {
  const lockId = findFirstStatesEntityId(states, "lock");
  const windowBinarySensorId = findFirstStatesEntityId(
    states,
    "binary_sensor",
    "window"
  );
  const doorBinarySensorId = findFirstStatesEntityId(
    states,
    "binary_sensor",
    "door"
  );

  let badgeConditions = [];
  if (lockId) {
    badgeConditions.push({
      entity: lockId,
      state: "unlocked",
      icon: "mdi:lock-open",
    });
  }
  if (windowBinarySensorId) {
    badgeConditions.push({
      entity: windowBinarySensorId,
      state: "on",
      icon: "mdi:window-open-variant",
    });
  }
  if (doorBinarySensorId) {
    badgeConditions.push({
      entity: doorBinarySensorId,
      state: "on",
      icon: "mdi:door-open",
    });
  }

  let badge_color = undefined;
  let badge_icon = undefined;
  if (badgeConditions.length) {
    let badge = badgeConditions
      .map(
        (condition) =>
          `is_state('${condition.entity}', '${condition.state}') %}${condition.icon}{%`
      )
      .join(" elif ");
    badge = `{% if ${badge} endif %}`;

    badge_color = "red";
    badge_icon = badge;
  }

  return { badge_color, badge_icon };
};

const makeChip = (
  type: string,
  entity_id: string,
  options = {},
  condition: { [key: string]: any } = { state: "on" }
) => {
  const chip = {
    type: type !== "conditional" ? type : "entity",
    content_info: "none",
    tap_action: {
      action: "toggle",
    },
    double_tap_action: {
      action: "more-info",
    },
    hold_action: {
      action: "more-info",
    },
    entity: entity_id,
    ...options,
  };

  return type !== "conditional"
    ? chip
    : {
        type,
        conditions: [
          {
            entity: entity_id,
            ...condition,
          },
        ],
        chip,
      };
};

const areaChips = (states: States) => {
  let chips = [];

  let motion =
    findFirstStatesEntityId(states, "binary_sensor", "motion") ||
    findFirstStatesEntityId(states, "binary_sensor", "occupancy") ||
    findFirstStatesEntityId(states, "binary_sensor", "presence");

  if (motion) {
    chips.push(
      makeChip("conditional", motion, {
        icon: "mdi:motion-sensor",
        tap_action: {
          action: "more-info",
        },
      })
    );
  }

  findStatesEntities(states, "media_player").forEach((entity) => {
    chips.push(
      makeChip("conditional", entity.entity_id, {}, { state: "playing" })
    );
    chips.push(makeChip("conditional", entity.entity_id, {}, { state: "on" }));
  });

  findStatesEntities(states, "climate").forEach((entity) => {
    chips.push(
      makeChip("conditional", entity.entity_id, {}, { state_not: "off" })
    );
  });

  const lightGroup = findStatesEntities(states, "light").filter((entity) =>
    /group/i.test(entity.attributes.icon || "")
  )[0]?.entity_id;

  if (lightGroup) {
    let lightChip = {
      type: "conditional",
      conditions: [{ entity: lightGroup, state: "on" }],
      chip: {
        type: "template",
        entity: lightGroup,
        icon: "mdi:lightbulb-group",
        // content: `{{ ['${lightGroup}'] | expand | selectattr('state','eq','on') | list | count }}`,
        tap_action: {
          action: "toggle",
        },
        double_tap_action: {
          action: "more-info",
        },
        hold_action: {
          action: "more-info",
        },
      },
    };
    chips.push(lightChip);
  }
  return chips;
};

const AreaChips = ({ chips }: { chips: ReturnType<typeof areaChips> }) => {
  chips = chips.map((chip) => {
    const card_mod = {
      style: `:host {
          --chip-height: 25px;
          --chip-box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
          --chip-border-width: 0px;
          --chip-spacing: 2px;
        }
        `,
    };
    if (chip.type === "conditional") {
      return {
        ...chip,
        chip: {
          ...chip.chip,
          card_mod,
        },
      };
    }

    return {
      ...chip,
      card_mod,
    };
  });

  return (
    <custom-mushroom-chips-card
      alignment="start"
      card_mod={{
        style: `ha-card {
              margin-bottom: 10px;
              margin-left: 12px;
            }`,
      }}
      chips={chips}
    />
  );
};
