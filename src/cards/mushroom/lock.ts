/**
 * A lock card allows you to control a lock entity.
 *
 * @see [Lock Card](https://www.home-assistant.io/lovelace/lock/)
 * @example
 * ```
 * type: 'lock'
 * entity: 'lock.front_door'
 * name: 'Front Door'
 * icon: 'mdi:lock-smart'
 * ```
 */
export type LockCardConfig = {
  /** Lock entity */
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
  primary_info?: "name" | "state" | "last-changed" | "last-updated" | "none";
  /** Info to show as secondary info */
  secondary_info?: "name" | "state" | "last-changed" | "last-updated" | "none";
  /** Type of icon to display */
  icon_type?: "icon" | "entity-picture" | "none";
  /** Home assistant action to perform on tap */
  tap_action?: Action;
  /** Home assistant action to perform on hold */
  hold_action?: Action;
  /** Home assistant action to perform on double tap */
  double_tap_action?: Action;
  /** Locked state color */
  "--mush-rgb-state-lock-locked"?: string;
  /** Unlocked state color */
  "--mush-rgb-state-lock-unlocked"?: string;
  /** Pending action status color */
  "--mush-rgb-state-lock-pending"?: string;
};

/**
 * Home assistant action configuration
 * @see [Actions](https://www.home-assistant.io/lovelace/actions/)
 */
type Action = {
  action: "more-info" | "toggle" | "call-service" | "navigate" | "url" | "none";
  entity?: string;
  service?: string;
  service_data?: Record<string, any>;
  navigation_path?: string;
  url_path?: string;
  target?: {
    entity_id?: string;
    device_id?: string;
    area_id?: string;
  };
  confirmation?: {
    text?: string;
    exemptions?: Exemption[];
  };
};

/** Exemption for action confirmation */
type Exemption = {
  user: string;
};
