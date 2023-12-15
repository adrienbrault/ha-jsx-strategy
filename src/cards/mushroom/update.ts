
/**
 * An UpdateCardConfig is used to define the configuration for an update card,
 * which allows you to control an update entity.
 * This configuration includes various options such as custom name and icon,
 * layout preferences, and actions for tap, hold, and double tap gestures.
 * @example
 * ```
 * type: update
 * entity: update.home_assistant
 * name: Home Assistant Updates
 * icon: mdi:update
 * layout: vertical
 * fill_container: true
 * primary_info: last-changed
 * secondary_info: last-updated
 * icon_type: icon
 * show_buttons_control: true
 * collapsible_controls: true
 * tap_action:
 *   action: more-info
 * hold_action:
 *   action: navigate
 *   navigation_path: /hassio/dashboard
 * double_tap_action:
 *   action: none
 * ```
 * @see {@link https://www.home-assistant.io/lovelace/update/|Update Card documentation}
 */
export type UpdateCardConfig = {
  /**
   * The update entity this card controls.
   */
  entity: string;
  /**
   * Name to display on the card. Defaults to the entity's friendly name.
   */
  name?: string;
  /**
   * Custom icon to display. Defaults to the entity's icon.
   */
  icon?: string;
  /**
   * Layout of the card. Options are "vertical", "horizontal", and "default".
   */
  layout?: string;
  /**
   * Whether to fill the container (e.g., grid, vertical, or horizontal layout).
   */
  fill_container?: boolean;
  /**
   * Information to display as primary info on the card.
   */
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /**
   * Information to display as secondary info on the card.
   */
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /**
   * Type of icon to display on the card.
   */
  icon_type?: 'icon' | 'entity-picture' | 'none';
  /**
   * Whether to show buttons for controlling updates (install/skip).
   */
  show_buttons_control?: boolean;
  /**
   * Whether the card's controls should be collapsible.
   */
  collapsible_controls?: boolean;
  /**
   * Action to perform on tap.
   */
  tap_action?: Action;
  /**
   * Action to perform on hold.
   */
  hold_action?: Action;
  /**
   * Action to perform on double tap.
   */
  double_tap_action?: Action;
};

/**
 * Action represents actions that can be performed on tap, hold, or double tap.
 */
export type Action = {
  /**
   * The type of action to perform. "more-info", "navigate", "url", "toggle", "call-service", "none".
   */
  action: 'more-info' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'none';
  /**
   * When the action is "navigate", the path to navigate to.
   */
  navigation_path?: string;
  /**
   * When the action is "url", the URL to open.
   */
  url_path?: string;
  /**
   * When the action is "call-service", the details of the service to call.
   */
  service?: string;
  /**
   * The service data to include with a "call-service" action.
   */
  service_data?: object;
};

