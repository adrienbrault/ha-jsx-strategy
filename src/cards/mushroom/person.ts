
/**
 * Represents a person card that allows you to control a person entity.
 *
 * @example
 * type: person
 * entity: person.john_doe
 * name: John Doe
 * 
 * @see [Person Card](https://www.home-assistant.io/lovelace/person/)
 */
export type PersonCardConfig = {
  /** Person entity */
  entity: string;
  /** Custom icon */
  icon?: string;
  /** Custom name */
  name?: string;
  /** Layout of the card. Vertical, horizontal and default layout are supported */
  layout?: string;
  /** Fill container or not. Useful when card is in a grid, vertical or horizontal layout */
  fill_container?: boolean;
  /** Info to show as primary info */
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /** Info to show as secondary info */
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  /** Type of icon to display */
  icon_type?: 'icon' | 'entity-picture' | 'none';
  /** Home assistant action to perform on tap */
  tap_action?: ActionConfig;
  /** Home assistant action to perform on hold */
  hold_action?: ActionConfig;
  /** Home assistant action to perform on double tap */
  double_tap_action?: ActionConfig;
};

/**
 * Defines an action configuration for tap, hold, and double-tap actions on the card.
 *
 * @example
 * action: navigate
 * navigation_path: "/lovelace/0"
 */
export type ActionConfig = {
  /** The type of action to perform */
  action: 'more-info' | 'navigate' | 'url' | 'call-service' | 'none';
  /** The navigation path or URL to be used when action is navigate or url */
  navigation_path?: string;
  /** The service to be called when action is call-service */
  service?: string;
  /** The service data to be sent when action is call-service */
  service_data?: Record<string, any>;
  /** Delay of the action in milliseconds */
  confirmation?: {
    /** The text to present in the confirmation dialog */
    text: string;
  };
};

