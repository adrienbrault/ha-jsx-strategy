
/**
 * The `ClimateCardConfig` type models the configuration for the climate card.
 * A climate card allows you to control a climate entity.
 * 
 * @example
 * ```yaml
 * type: climate
 * entity: climate.living_room
 * name: Living Room Climate
 * layout: horizontal
 * ```
 * 
 * For further information, refer to the [Climate card documentation](https://www.home-assistant.io/lovelace/climate/).
 */
export type ClimateCardConfig = {
  entity: string;
  icon?: string;
  name?: string;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  hvac_modes?: string[];
  show_temperature_control?: boolean;
  collapsible_controls?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * The `ActionConfig` type models the configuration for tap, hold, and double tap actions.
 * This is for Home assistant actions to perform on tap, hold, or double tap.
 * 
 * @example
 * ```yaml
 * tap_action:
 *   action: navigate
 *   navigation_path: /lovelace/0
 * ```
 * 
 * @example
 * ```yaml
 * hold_action:
 *   action: call-service
 *   service: climate.set_hvac_mode
 *   service_data:
 *     entity_id: climate.living_room
 *     hvac_mode: heat
 * ```
 */
export type ActionConfig = {
  action: 'more-info' | 'navigate' | 'url' | 'call-service' | 'none';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: Record<string, any>;
  confirm?: ActionConfirmationConfig;
};

/**
 * The `ActionConfirmationConfig` type models the configuration for confirming actions
 * such as navigate, url, or call-service on tap, hold, or double tap.
 * 
 * @example
 * ```yaml
 * confirm:
 *   text: Are you sure you want to turn off the climate control?
 * ```
 */
export type ActionConfirmationConfig = {
  text?: string;
};

