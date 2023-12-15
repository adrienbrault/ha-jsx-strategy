
/**
 * The thermostat card gives control of your climate entity, allowing you to change the temperature and mode of the entity.
 * ![Screenshot of the thermostat card](https://www.home-assistant.io/images/lovelace/lovelace_thermostat_card.png)
 *
 * The following YAML options are available when you use YAML mode or just prefer to use YAML in the code editor in the UI.
 * 
 * @example
 * ```yaml
 * type: thermostat
 * entity: climate.nest
 * ```
 *
 * To learn more about the configuration and usage of the thermostat card, visit the
 * [Thermostat Card Documentation](https://www.home-assistant.io/lovelace/thermostat/).
 */
export type ThermostatCardConfig = {
  /** Entity ID of climate domain. */
  entity: string;
  
  /** Overwrites friendly name. */
  name?: string;

  /** Override the used theme for this card with any loaded theme. */
  theme?: string;

  /**
   * Additional widgets to control your entity.
   * Only climate related features are supported.
   */
  features?: string[];
};

