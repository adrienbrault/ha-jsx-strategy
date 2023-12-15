
/**
 * A light card allows you to control a light entity.
 *
 * - entity: Required Light entity
 * - icon: Optional Custom icon
 * - icon_color: Custom color for icon and brightness bar when the lights is on and use_light_color is false
 * - name: Optional Custom name
 * - layout: Layout of the card. Vertical, horizontal and default layout are supported
 * - fill_container: Fill container or not. Useful when card is in a grid, vertical or horizontal layout
 * - primary_info: Info to show as primary info
 * - secondary_info: Info to show as secondary info
 * - icon_type: Type of icon to display
 * - show_brightness_control: Show a slider to control brightness
 * - show_color_temp_control: Show a slider to control temperature color
 * - show_color_control: Show a slider to control RGB color
 * - collapsible_controls: Collapse controls when off
 * - use_light_color: Colorize the icon and slider according light temperature or color
 * - tap_action: Home assistant action to perform on tap
 * - hold_action: Home assistant action to perform on hold
 * - double_tap_action: Home assistant action to perform on double-tap
 *
 * @example
 * type: light
 * entity: light.bedroom
 *
 * @see {@link https://www.home-assistant.io/lovelace/light/|Light Card documentation}
 */
export type LightCardConfig = {
  entity: string;
  icon?: string;
  icon_color?: string;
  name?: string;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  show_brightness_control?: boolean;
  show_color_temp_control?: boolean;
  show_color_control?: boolean;
  collapsible_controls?: boolean;
  use_light_color?: boolean;
  tap_action?: HaActionConfig;
  hold_action?: HaActionConfig;
  double_tap_action?: HaActionConfig;
};

/**
 * Home Assistant action configuration for tap, hold, and double-tap actions.
 */
export type HaActionConfig = {
  action: 'toggle' | 'more-info';
};

