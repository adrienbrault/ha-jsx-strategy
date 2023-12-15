
/**
 * Configuration for the `plant-status` card which is designed for botanists to monitor their plants.
 *
 * This card shows the status of your plant entities.
 *
 * @example
 * ```yaml
 * type: plant-status
 * entity: plant.bonsai
 * ```
 *
 * @see {@link https://www.home-assistant.io/lovelace/plant-status/ Screenshot of the plant status card}
 */
export type PlantStatusCardConfig = {
  /**
   * The entity_id of the plant entity to display.
   */
  entity: string;

  /**
   * The name to display on the card. Defaults to the entity name if not set.
   */
  name?: string;

  /**
   * Name of the theme to use for the card.
   */
  theme?: string;
};

