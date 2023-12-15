
/**
 * Configuration for the Number Card in Lovelace.
 *
 * A number card allows you to control number and input_number entities.
 *
 * @see {@link https://www.home-assistant.io/lovelace/number/ Number Card documentation}
 *
 * @example
 * ```
 * type: number
 * entity: input_number.slider_example
 * name: Slider Example
 * icon: mdi:volume-high
 * ```
 */
export type NumberCardConfig = {
  /**
   * Number or input_number Entity.
   */
  entity: string;

  /**
   * Optional custom icon.
   */
  icon?: string;

  /**
   * Optional custom color for the icon when entity state is active.
   */
  icon_color?: string;

  /**
   * Optional custom name.
   */
  name?: string;

  /**
   * Optional layout of the card.
   */
  layout?: string;

  /**
   * Optional fill container or not. Useful when the card is in a grid, vertical, or horizontal layout.
   */
  fill_container?: boolean;

  /**
   * Optional info to show as primary info.
   */
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';

  /**
   * Optional info to show as secondary info.
   */
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';

  /**
   * Optional type of icon to display.
   */
  icon_type?: 'icon' | 'entity-picture' | 'none';

  /**
   * Optional Home Assistant action to perform on tap.
   */
  tap_action?: {
    action: 'more-info' | 'none' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'fire-dom-event';
    [key: string]: any;
  };

  /**
   * Optional Home Assistant action to perform on hold.
   */
  hold_action?: {
    action: 'more-info' | 'none' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'fire-dom-event';
    [key: string]: any;
  };

  /**
   * Optional Home Assistant action to perform on double tap.
   */
  double_tap_action?: {
    action: 'more-info' | 'none' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'fire-dom-event';
    [key: string]: any;
  };
};

