/**
 * A select card allows you to control select and input_select entities.
 *
 * [More about the Select Card](https://www.home-assistant.io/lovelace/select)
 *
 * @example
 * ```
 * type: select
 * entity: input_select.living_room_theme
 * icon: mdi:theme-light-dark
 * name: Theme
 * ```
 */
export type SelectCardConfig = {
  /**
   * Select or input_select Entity
   */
  entity: string;

  /**
   * Custom icon
   */
  icon?: string;

  /**
   * Custom color for icon when entity state is active
   */
  icon_color?: string;

  /**
   * Custom name
   */
  name?: string;

  /**
   * Layout of the card. Vertical, horizontal and default layout are supported
   */
  layout?: "vertical" | "horizontal" | "default";

  /**
   * Fill container or not. Useful when card is in a grid, vertical or horizontal layout
   */
  fill_container?: boolean;

  /**
   * Info to show as primary info
   */
  primary_info?: "name" | "state" | "last-changed" | "last-updated" | "none";

  /**
   * Info to show as secondary info
   */
  secondary_info?: "name" | "state" | "last-changed" | "last-updated" | "none";

  /**
   * Type of icon to display
   */
  icon_type?: "icon" | "entity-picture" | "none";

  /**
   * Home assistant action to perform on tap
   */
  tap_action?: {
    action:
      | "more-info"
      | "toggle"
      | "call-service"
      | "navigate"
      | "url"
      | "none"
      | "fire-dom-event";
  };

  /**
   * Home assistant action to perform on hold
   */
  hold_action?: {
    action:
      | "more-info"
      | "toggle"
      | "call-service"
      | "navigate"
      | "url"
      | "none"
      | "fire-dom-event";
  };

  /**
   * Home assistant action to perform on double tap
   */
  double_tap_action?: {
    action:
      | "more-info"
      | "toggle"
      | "call-service"
      | "navigate"
      | "url"
      | "none"
      | "fire-dom-event";
  };
};
