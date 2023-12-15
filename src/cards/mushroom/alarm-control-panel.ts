
/**
 * An alarm control panel card allows you to control an alarm panel entity.
 *
 * @see [Alarm Control Panel Card](https://www.home-assistant.io/lovelace/alarm-panel/)
 * @example
 * ```
 * type: alarm-panel
 * entity: alarm_control_panel.alarm_entity
 * ```
 */
export type AlarmPanelCardConfig = {
  /**
   * Alarm control panel entity.
   */
  entity: string;
  /**
   * Custom icon.
   */
  icon?: string;
  /**
   * Custom name.
   */
  name?: string;
  /**
   * Layout of the card. Vertical, horizontal and default layout are supported.
   */
  layout?: 'vertical' | 'horizontal' | 'default';
  /**
   * Fill container or not. Useful when card is in a grid, vertical or horizontal layout.
   */
  fill_container?: boolean;
  /**
   * Info to show as primary info.
   */
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /**
   * Info to show as secondary info.
   */
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /**
   * Type of icon to display.
   */
  icon_type?: 'icon' | 'entity-picture' | 'none';
  /**
   * List of arm states to display.
   */
  states?: string[];
  /**
   * Show the keypad.
   */
  show_keypad?: boolean;
  /**
   * Home assistant action to perform on tap.
   */
  tap_action?: HomeAssistantActionConfig;
  /**
   * Home assistant action to perform on hold.
   */
  hold_action?: HomeAssistantActionConfig;
  /**
   * Home assistant action to perform on double tap.
   */
  double_tap_action?: HomeAssistantActionConfig;
}

/**
 * Home assistant action object configuration for tap_action, hold_action, and double_tap_action.
 */
export type HomeAssistantActionConfig = {
  /**
   * The type of action, typically one of the default actions such as 'more-info'.
   */
  action: 'more-info' | 'toggle' | 'call-service' | 'none' | 'navigate' | 'url';
  // Additional properties may be defined here according to the type of action specified.
}

