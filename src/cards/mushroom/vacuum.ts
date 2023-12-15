
/**
 * A vacuum card allows you to control a vacuum entity.
 * @example
 * type: custom:vacuum-card
 * entity: vacuum.xiaomi_vacuum_cleaner
 * @see {@link https://www.home-assistant.io/lovelace/vacuum/|Vacuum Card Documentation}
 */
export type VacuumCardConfig = {
  entity: string; // Vacuum entity
  icon?: string; // Custom icon
  name?: string; // Custom name
  layout?: 'vertical' | 'horizontal' | 'default'; // Layout of the card
  fill_container?: boolean; // Fill container or not
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none'; // Info to show as primary info
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none'; // Info to show as secondary info
  icon_type?: 'icon' | 'entity-picture' | 'none'; // Type of icon to display
  icon_animation?: boolean; // Animate the icon when vacuum is cleaning
  commands?: ('start_pause' | 'stop' | 'locate' | 'clean_spot' | 'return_home')[]; // List of commands to display
  tap_action?: ActionConfig; // Home Assistant action to perform on tap
  hold_action?: ActionConfig; // Home Assistant action to perform on hold
  double_tap_action?: ActionConfig; // Home Assistant action to perform on double tap
};

/**
 * Base configuration for tap, hold, and double-tap actions.
 */
type ActionConfig = {
  action: 'more-info' | 'none' | 'navigate' | 'url' | 'call-service' | 'toggle'; // Action to perform
  // Other fields based on action types are omitted for brevity
};

