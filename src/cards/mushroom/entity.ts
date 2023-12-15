
/**
 * A entity card allows you to display an entity.
 *
 * @example
 * type: entities
 * entity: sun.sun
 * icon: 'mdi:weather-sunny'
 * icon_color: 'yellow'
 * name: Sun position
 * layout: vertical
 * fill_container: true
 * primary_info: last-changed
 * secondary_info: state
 * icon_type: entity-picture
 * tap_action:
 *   action: more-info
 * hold_action:
 *   action: navigate
 *   navigation_path: /lovelace/0
 * double_tap_action:
 *   action: none
 * 
 * [Entity Card Documentation](https://www.home-assistant.io/lovelace/entity/)
 */
export type EntityCardConfig = {
  entity: string;
  icon?: string;
  icon_color?: string;
  name?: string;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Configurations for actions on tap, hold, or double_tap.
 *
 * @example
 * action: more-info
 * navigation_path: /lovelace/0
 */
export type ActionConfig = {
  action: 'more-info' | 'navigate' | 'url' | 'call-service' | 'none';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: Record<string, any>;
};

