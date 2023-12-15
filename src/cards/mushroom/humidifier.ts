
/**
 * A humidifier card allows you to control a humidifier entity.
 * 
 * @link [Humidifier Card](https://www.home-assistant.io/lovelace/humidifier/)
 * @example
 * ```yaml
 * type: humidifier
 * entity: humidifier.bedroom_humidifier
 * name: Bedroom Humidifier
 * icon: mdi:water
 * ```
 */
export type HumidifierCardConfig = {
  /**
   * Humidifier entity
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
   * Layout of the card. Vertical, horizontal, and default layout are supported
   */
  layout?: 'vertical' | 'horizontal' | 'default';

  /**
   * Fill container or not. Useful when card is in a grid, vertical, or horizontal layout
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
   * Show target humidity control
   */
  show_target_humidity_control?: boolean;

  /**
   * Collapse controls when off
   */
  collapsible_controls?: boolean;

  /**
   * Home assistant action to perform on tap
   */
  tap_action?: ActionConfig;

  /**
   * Home assistant action to perform on hold
   */
  hold_action?: ActionConfig;

  /**
   * Home assistant action to perform on double tap
   */
  double_tap_action?: ActionConfig;
};

/**
 * Home Assistant action configuration
 */
type ActionConfig = {
  /**
   * The type of action to perform
   */
  action: 'more-info' | 'navigate' | 'url' | 'call-service' | 'none';

  /**
   * Further configuration for the action, depending on the action type
   */
  // As this can have various shapes based on the action, it's left as example:
  // navigate: { navigation_path: string }
  // url: { url_path: string }
  // call-service: { service: string; service_data?: Record<string, any>; target?: any }
  // For the sake of the example, it is simplified, however, in usage would need to be detailed.
  [key: string]: any;
};

