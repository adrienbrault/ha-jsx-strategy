import {
  AreaRegistryEntry,
  EntityRegistryEntry,
  HassEntity,
} from "../config-types";
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
  icon,
}: {
  area: AreaRegistryEntry;
  entities: Array<EntityRegistryEntry>;
  states: States;
  icon?: string;
}) => {
  const secondary = areaSecondary(states);
  const { badge_color, badge_icon } = areaBadge(states);
  let chips = areaChips(states);

  let card = (
    <custom-mushroom-template-card
      primary={area.name}
      secondary={secondary}
      icon={icon || "mdi:texture-box"}
      icon_color="blue"
      tap_action={{ action: "navigate", navigation_path: `#${area.area_id}` }}
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

type SecondaryConfig = Array<{
  domain: string;
  /**
   * Template to render the secondary text. Render the state variable
   * @example
   * 💧{{ __state__ | int }}%
   * @example
   * ☀️{{ __state__ }}lx
   */
  template: string;
  deviceClass?: string;
}>;
const DefaultSecondaryConfig: SecondaryConfig = [
  {
    domain: "sensor",
    deviceClass: "temperature",
    template: "🌡️{{ __state__ | int }}°",
  },
  {
    domain: "sensor",
    deviceClass: "humidity",
    template: "💧{{ __state__ | int }}{{ __uom__ }}",
  },
  {
    domain: "sensor",
    deviceClass: "illuminance",
    template: "☀️{{ __state__ | int }}{{ __uom__ }}",
  },
  {
    domain: "sensor",
    deviceClass: "carbon_dioxide",
    template: "💨{{ __state__ }}{{ __uom__ }}",
  },
];

const areaSecondary = (
  states: States,
  config: SecondaryConfig = DefaultSecondaryConfig
) => {
  let secondaries: string[] = config
    .map(({ domain, template, deviceClass }) => {
      const entityId = findFirstStatesEntityId(states, domain, deviceClass);
      if (!entityId) {
        return null;
      }
      return template
        .replace("__state__", `states('${entityId}')`)
        .replace("__uom__", `state_attr('${entityId}', 'unit_of_measurement')`);
    })
    .filter((secondary) => secondary !== null) as string[];

  return secondaries.join(" ");
};

type BadgeConfig = Array<{
  domain: string;
  deviceClass?: string;
  state: string;
  icon: string;
}>;
const DefaultBadgeConfig: BadgeConfig = [
  {
    domain: "lock",
    state: "unlocked",
    icon: "mdi:lock-open",
  },
  {
    domain: "binary_sensor",
    deviceClass: "window",
    state: "on",
    icon: "mdi:window-open-variant",
  },
  {
    domain: "binary_sensor",
    deviceClass: "door",
    state: "on",
    icon: "mdi:door-open",
  },
];
type BadgeCondition = {
  entity: string;
  state: string;
  icon: string;
};
const areaBadge = (
  states: States,
  config: BadgeConfig = DefaultBadgeConfig
) => {
  let badgeConditions = config
    .map(({ domain, deviceClass, state, icon }) => {
      const entityId = findFirstStatesEntityId(states, domain, deviceClass);
      if (!entityId) {
        return null;
      }
      return {
        entity: entityId,
        state,
        icon,
      };
    })
    .filter((condition) => condition !== null) as Array<BadgeCondition>;

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
type ChipsConfig = Array<{
  candidates: Array<{
    domain: string;
    deviceClass?: string;
    filter?: (entity: HassEntity) => boolean;
  }>;
  options?: any;
  conditions?: Array<{ [key: string]: any }>;
}>;
const DefaultChipsConfig: ChipsConfig = [
  {
    candidates: [
      { domain: "binary_sensor", deviceClass: "motion" },
      { domain: "binary_sensor", deviceClass: "occupancy" },
      { domain: "binary_sensor", deviceClass: "presence" },
    ],
    options: {
      icon: "mdi:motion-sensor",
      tap_action: {
        action: "more-info",
      },
    },
  },
  {
    candidates: [{ domain: "media_player" }],
    conditions: [{ state: "playing" }, { state: "on" }],
  },
  {
    candidates: [{ domain: "climate" }],
    conditions: [{ state_not: "off" }],
  },
  {
    candidates: [
      {
        domain: "light",
        filter: (entity) => /group/i.test(entity.attributes.icon || ""),
      },
    ],
    conditions: [{ state: "on" }],
    options: {
      icon: "mdi:lightbulb-group",
    },
  },
];
const areaChips = (
  states: States,
  config: ChipsConfig = DefaultChipsConfig
) => {
  let chips = config
    .map(({ candidates, options, conditions, filter }) => {
      let entityId: string | null = null;
      for (let candidate of candidates) {
        entityId = findFirstStatesEntityId(
          states,
          candidate.domain,
          candidate.deviceClass,
          filter
        );
        if (entityId) {
          break;
        }
      }
      if (!entityId) {
        return null;
      }

      return conditions?.map((condition) =>
        makeChip("conditional", entityId, options, condition)
      );
    })
    .filter((chip) => Array.isArray(chip));
  // flatten
  chips = [].concat.apply([], chips);
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

  return chips;
};

const AreaChips = ({ chips }: { chips: ReturnType<typeof areaChips> }) => {
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
