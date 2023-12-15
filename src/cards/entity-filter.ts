
/**
 * An object that describes the configuration options for the entity object in the entity filter card.
 * 
 * @example
 * ```
 * {
 *   entity: "light.bed_light",
 *   name: "Bed",
 *   icon: "mdi:bed",
 *   secondary_info: "last-changed",
 *   state_filter: [
 *     "on",
 *     {
 *       operator: ">",
 *       value: "50"
 *     }
 *   ]
 * }
 * ```
 */
export type EntityConfig = {
  /** Entity ID */
  entity: string;
  /** Sets a custom card type: custom:my-custom-card */
  type?: string;
  /** Overwrites friendly name */
  name?: string;
  /** Overwrites icon or entity picture */
  icon?: string;
  /** Show additional info */
  secondary_info?: 'entity-id' | 'last-changed';
  /** How the state should be formatted */
  format?: 'relative' | 'total' | 'date' | 'time' | 'datetime';
  /** List of strings representing states or filter objects */
  state_filter?: Array<string | StateFilterConfig>;
};

/**
 * An object that describes the state filter configuration for the entity filter card.
 * 
 * @example
 * ```
 * {
 *   operator: "regex",
 *   value: "^([0-7]{1})$",
 *   attribute: "eta"
 * }
 * ```
 */
export type StateFilterConfig = {
  /** String representing the state. */
  value: string;
  /** Operator to use in the comparison. */
  operator?: '==' | '<=' | '<' | '>=' | '>' | '!=' | 'in' | 'not in' | 'regex';
  /** Attribute of the entity to use instead of the state. */
  attribute?: string;
};

/**
 * An object that describes the configuration options for the entity filter card in Home Assistant.
 * 
 * More information can be [found here](https://www.home-assistant.io/lovelace/entity-filter/).
 * 
 * @example
 * ```
 * {
 *   type: "entity-filter",
 *   entities: [
 *     "light.kitchen_lights",
 *     "light.ceiling_lights",
 *     { entity: "light.bed_light", name: "Bed" }
 *   ],
 *   state_filter: [
 *     "on"
 *   ]
 * }
 * ```
 * 
 * @example
 * ```
 * {
 *   type: "entity-filter",
 *   entities: [
 *     "device_tracker.demo_paulus",
 *     "device_tracker.demo_anne_therese",
 *     "device_tracker.demo_home_boy"
 *   ],
 *   state_filter: [
 *     "home",
 *     "work"
 *   ],
 *   card: {
 *     type: "glance",
 *     title: "People at home"
 *   }
 * }
 * ```
 * 
 * @example
 * ```
 * {
 *   type: "entity-filter",
 *   entities: [
 *     "sensor.water_leak",
 *     "sensor.outside_temp",
 *     {
 *       entity: "sensor.humidity_and_temp",
 *       state_filter: [
 *         {
 *           operator: ">",
 *           value: "50",
 *           attribute: "humidity"
 *         }
 *       ]
 *     }
 *   ],
 *   state_filter: [
 *     "on",
 *     {
 *       operator: ">",
 *       value: "90"
 *     }
 *   ]
 * }
 * ```
 */
export type EntityFilterCardConfig = {
  /** A list of entity IDs or entity objects */
  entities: Array<string | EntityConfig>;
  /** List of strings representing states or filter objects */
  state_filter: Array<string | StateFilterConfig>;
  /** Extra options to pass down to the card rendering the result */
  card?: any; // 'any' is used here, as we don't have detailed information on all possible card configurations.
  /** Allows hiding of card when no entities returned by filter */
  show_empty?: boolean;
};

