
/**
 * The HumidifierCardConfig type models the configuration options for the humidifier card
 * in Home Assistant's Lovelace UI. The humidifier card provides controls and monitors for
 * humidifiers, dehumidifiers, and hygrostat devices.
 *
 * @example
 * ```yaml
 * type: humidifier
 * entity: humidifier.bedroom
 * name: Bedroom Humidifier
 * ```
 *
 * ![Screenshot of the humidifier card](https://www.home-assistant.io/images/lovelace/lovelace_humidifier_card.png)
 *
 * For more information on humidifier cards, see the [Humidifier Card documentation](https://www.home-assistant.io/lovelace/humidifier/).
 */
export type HumidifierCardConfig = {
  /**
   * Entity ID of the humidifier, dehumidifier, or hygrostat domain.
   */
  entity: string;

  /**
   * Name to display on the card. Defaults to the entity name if not provided.
   */
  name?: string;

  /**
   * Name of the theme to override the card theme with any loaded theme.
   * For more information about themes, see the [Frontend Documentation](https://www.home-assistant.io/integrations/frontend/).
   */
  theme?: string;

  /**
   * List of additional widget features for controlling the entity.
   * Only humidifier related features are supported.
   */
  features?: string[];
};

