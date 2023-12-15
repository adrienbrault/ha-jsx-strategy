
/**
 * Configuration for an entity card, which gives a quick overview of an entity's state within
 * Home Assistant.
 *
 * @example
 * ```
 * {
 *   type: "entity",
 *   entity: "cover.kitchen_window"
 * }
 *
 * {
 *   type: "entity",
 *   entity: "light.bedroom",
 *   attribute: "brightness",
 *   unit: "%"
 * }
 *
 * {
 *   type: "entity",
 *   entity: "vacuum.downstairs",
 *   name: "Vacuum",
 *   icon: "mdi:battery",
 *   attribute: "battery_level",
 *   unit: "%"
 * }
 * ```
 *
 * [Screenshot of the Entity card](https://www.home-assistant.io/images/lovelace/entity-card.png)
 *
 * For more information, see the frontend documentation on:
 * [Entity card](https://www.home-assistant.io/lovelace/entity/)
 */
export type EntityCardConfig = {
  /**
   * Entity ID.
   */
  entity: string;

  /**
   * Optional name of entity.
   */
  name?: string;

  /**
   * Optional override for the icon.
   */
  icon?: string;

  /**
   * Optional boolean to set the icon color depending on the state of the entity.
   */
  state_color?: boolean;

  /**
   * Optional attribute associated with the entity.
   */
  attribute?: string;

  /**
   * Optional unit of measurement given to data.
   */
  unit?: string;

  /**
   * Optional override for the card theme.
   */
  theme?: string;

  /**
   * Optional footer widget to render in the card.
   */
  footer?: FooterConfiguration;
};

/**
 * Configuration for the footer within an entity card.
 * Specific structure is defined elsewhere, but it's included here as a reference.
 */
type FooterConfiguration = any; // Placeholder for actual footer configuration type

