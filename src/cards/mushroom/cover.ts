
/**
 * A cover card allows you to control a cover entity.
 * 
 * [Cover Card Documentation](https://www.home-assistant.io/lovelace/cover/)
 * 
 * @example
 * ```yaml
 * type: cover
 * entity: cover.garage_door
 * name: Garage Door
 * ```
 */
export type CoverCardConfig = {
  /**
   * Cover entity
   */
  entity: string;
  
  /**
   * Custom icon
   */
  icon?: string;
  
  /**
   * Custom name
   */
  name?: string;
  
  /**
   * Layout of the card. Vertical, horizontal and default layout are supported
   */
  layout?: string;
  
  /**
   * Fill container or not. Useful when card is in a grid, vertical or horizontal layout
   */
  fill_container?: boolean;
  
  /**
   * Info to show as primary info
   */
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  
  /**
   * Info to show as secondary info
   */
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  
  /**
   * Type of icon to display
   */
  icon_type?: 'icon' | 'entity-picture' | 'none';
  
  /**
   * Show buttons to open, close and stop cover
   */
  show_buttons_control?: boolean;
  
  /**
   * Show a slider to control position of the cover
   */
  show_position_control?: boolean;
  
  /**
   * Show a slider to control tilt position of the cover
   */
  show_tilt_position_control?: boolean;
  
  /**
   * Home assistant action to perform on tap
   */
  tap_action?: Action;
  
  /**
   * Home assistant action to perform on hold
   */
  hold_action?: Action;
  
  /**
   * Home assistant action to perform on double tap
   */
  double_tap_action?: Action;
};

/**
 * Home Assistant action configuration
 */
type Action = {
  action: 'toggle' | 'more-info' | 'none' | 'navigate' | 'url' | 'call-service' | 'fire-dom-event';
  [key: string]: any; // Additional properties based on the action type
};

