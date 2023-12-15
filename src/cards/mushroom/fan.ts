
/**
 * A fan card allows you to control a fan entity.
 * @example
 * type: custom:fan-card
 * entity: fan.my_fan
 * icon: 'mdi:fan'
 * name: 'Living Room Fan'
 * layout: 'vertical'
 * fill_container: true
 * primary_info: 'state'
 * secondary_info: 'last-changed'
 * icon_type: 'icon'
 * icon_animation: true
 * show_percentage_control: true
 * show_oscillate_control: true
 * collapsible_controls: true
 * tap_action:
 *   action: 'toggle'
 * hold_action:
 *   action: 'more-info'
 * double_tap_action:
 *   action: 'more-info'
 *
 * @see {@link https://www.home-assistant.io/lovelace/fan/ Fan Card documentation}
 */
export type FanCardConfig = {
  entity: string;
  icon?: string;
  name?: string;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  icon_animation?: boolean;
  show_percentage_control?: boolean;
  show_oscillate_control?: boolean;
  collapsible_controls?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Home assistant action to perform on tap, hold or double tap.
 * @example
 * action: 'toggle'
 * @example
 * action: 'more-info'
 */
export type ActionConfig = {
  action: 'toggle' | 'more-info' | 'none' | 'navigate' | 'call-service' | 'url' | 'none';
  // Additional fields based on which action is chosen could be included.
};

