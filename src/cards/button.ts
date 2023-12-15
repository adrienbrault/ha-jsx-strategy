
/**
 * The button card allows you to add buttons to perform tasks.
 * 
 * For more information, see [button card documentation](https://www.home-assistant.io/lovelace/button/).
 * 
 * @example
 * ```
 * // Basic example:
 * type: button
 * entity: light.living_room
 * 
 * // Button card with a button name and a script that runs when card is tapped:
 * type: button
 * name: Turn Off Lights
 * show_state: false
 * tap_action:
 *   action: call-service
 *   service: script.turn_on
 *   data:
 *     entity_id: script.turn_off_lights
 * ```
 * 
 * ![Screenshot of the Button card with script service](https://www.home-assistant.io/images/lovelace/lovelace_button_card.png)
 */
export type ButtonCardConfig = {
  /**
   * The entity ID the card interacts with, for example, light.living_room.
   */
  entity?: string;

  /**
   * The button name that is displayed on the card. It defaults to the entity name only if the card interacts with an entity.
   * Otherwise, if not configured, no name is displayed.
   */
  name?: string;

  /**
   * The icon that is displayed on the card. It defaults to the entity domain icon only if the card interacts with an entity.
   * Otherwise, if not configured, no icon is displayed.
   */
  icon?: string;

  /**
   * If false, the button name is not shown on the card.
   */
  show_name?: boolean;

  /**
   * If false, the icon is not shown on the card.
   */
  show_icon?: boolean;

  /**
   * Show state.
   */
  show_state?: boolean;

  /**
   * The height of the icon. Any CSS value may be used.
   */
  icon_height?: string;

  /**
   * If false, the icon does not change color when the entity is active.
   */
  state_color?: boolean;

  /**
   * The action taken on card tap.
   */
  tap_action?: ActionConfig;

  /**
   * The action taken on card tap and hold.
   */
  hold_action?: ActionConfig;

  /**
   * The action taken on card double-tap.
   */
  double_tap_action?: ActionConfig;

  /**
   * Override the used theme for this card with any loaded theme.
   */
  theme?: string;

  /**
   * Override the default action name for a button row.
   */
  action_name?: string;
};

/**
 * The configuration for actions taken when interacting with the card via tap, hold, or double-tap.
 * 
 * @example
 * ```
 * action: toggle
 * ```
 * 
 * @example
 * ```
 * action: call-service
 * service: script.turn_on
 * service_data:
 *   entity_id: script.turn_off_lights
 * ```
 */
export type ActionConfig = {
  /**
   * The type of action to perform.
   */
  action: 'none' | 'more-info' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'fire-dom-event';

  /**
   * The service to call when `action` is set to `call-service`.
   */
  service?: string;

  /**
   * The service data to include when `action` is set to `call-service`.
   */
  service_data?: { [key: string]: any };

  /**
   * The URL to navigate to when `action` is set to `navigate` or `url`.
   */
  url_path?: string;

  /**
   * The navigation path to navigate to when `action` is set to `navigate`.
   */
  navigation_path?: string;

  /**
   * The additional data to include when `action` is set to `fire-dom-event`.
   */
  event?: string;

  /**
   * The browser device ID to target when `action` is set to `fire-dom-event`.
   */
  device_id?: string;
};

