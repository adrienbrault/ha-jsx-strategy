
/**
 * Configuration for the Conditional card that displays another card based on conditions.
 *
 * @example
 * type: conditional
 * conditions:
 *   - condition: state
 *     entity: light.bed_light
 *     state: "on"
 * card:
 *   type: entities
 *   entities:
 *     - device_tracker.demo_paulus
 *
 * @link https://www.home-assistant.io/lovelace/conditional/
 */
export type ConditionalCardConfig = {
  conditions: Condition[];
  card: any; // 'any' type used for card as it can be of any type e.g., EntitiesCardConfig, not defined here.
};

/**
 * Represents a condition that controls the visibility of the Conditional card.
 * Conditions can be of type 'state', 'numeric_state', 'screen', or 'user'.
 */
export type Condition =
  | StateCondition
  | NumericStateCondition
  | ScreenCondition
  | UserCondition;

/**
 * Condition to check if an entity has a specified state.
 * @example
 * condition: "state"
 * entity: climate.thermostat
 * state_not: "off"
 */
export type StateCondition = {
  condition: 'state';
  entity: string;
  state?: string | string[];
  state_not?: string | string[];
};

/**
 * Condition to test if an entity state matches the thresholds.
 * @example
 * condition: "numeric_state"
 * entity: sensor.outside_temperature
 * above: 10
 */
export type NumericStateCondition = {
  condition: 'numeric_state';
  entity: string;
  above?: number;
  below?: number;
};

/**
 * Condition based on CSS media query to specify the visibility of the card per screen size.
 * @example
 * condition: "screen"
 * media_query: "(min-width: 1280px)"
 */
export type ScreenCondition = {
  condition: 'screen';
  media_query: string;
};

/**
 * Condition to specify the visibility of the card per user.
 * @example
 * condition: "user"
 * users:
 *   - 581fca7fdc014b8b894519cc531f9a04
 */
export type UserCondition = {
  condition: 'user';
  users: string[];
};

