
/**
 * Configurations for the Light Card which allows brightness adjustments.
 * @see {@link https://www.home-assistant.io/lovelace/light/ Screenshot of the Light card}
 *
 * @example
 * ```yaml
 * type: light
 * entity: light.bedroom
 * ```
 * @example
 * ```yaml
 * type: light
 * entity: light.bedroom
 * name: Kids Bedroom
 * ```
 * @example
 * ```yaml
 * type: light
 * entity: light.office
 * name: My Office
 * ```
 */
export type LightCardConfig = {
  /**
   * Entity ID of light domain.
   */
  entity: string;
  
  /**
   * Overwrites friendly name.
   * @default Name of entity
   */
  name?: string;
  
  /**
   * Overwrites icon.
   * @default Entity domain icon
   */
  icon?: string;
  
  /**
   * Override the used theme for this card with any loaded theme.
   */
  theme?: string;
  
  /**
   * Action taken on card tap and hold.
   */
  hold_action?: ActionConfig;
  
  /**
   * Action taken on card double tap.
   */
  double_tap_action?: ActionConfig;
};

/**
 * Represents the configuration for actions like tap, hold, or double tap on various cards.
 */
export type ActionConfig = {
  // The fields for an ActionConfig are not described in the provided example.
  // Assuming a typical structure which can be modified according to the actual action configuration.
  [key: string]: unknown;
};

