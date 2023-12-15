
/**
 * Configuration for the Logbook card which displays entries from the logbook
 * for specific entities.
 * 
 * ![Screenshot of the logbook card](https://www.home-assistant.io/images/lovelace/lovelace_logbook_card.png)
 * 
 * Find more information about the logbook card configuration in the Home Assistant documentation:
 * [Logbook Card](https://www.home-assistant.io/lovelace/logbook/)
 * 
 * @example
 * ```
 * type: logbook
 * entities:
 *   - fan.ceiling_fan
 *   - fan.living_room_fan
 *   - light.ceiling_lights
 * hours_to_show: 24
 * ```
 */
export type LogbookCardConfig = {
  /**
   * A list of entity strings whose logbook entries will show in the card.
   */
  entities: string[];

  /**
   * The title that shows on the top of the card (optional).
   */
  title?: string;

  /**
   * The number of hours in the past that the logbook entries will track in the card.
   * Defaults to 24 if not set. Minimum is 1 hour. (optional)
   */
  hours_to_show?: number;

  /**
   * Name of a loaded theme to be used for this card (optional).
   */
  theme?: string;
};

