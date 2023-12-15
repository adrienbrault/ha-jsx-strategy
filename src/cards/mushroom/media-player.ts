
/**
 * A media player card allows you to control a media player entity.
 * [Media Player Card Documentation](https://www.home-assistant.io/lovelace/media-control/)
 *
 * @example
 * type: media-control
 * entity: media_player.living_room
 *
 * @example
 * type: media-control
 * entity: media_player.living_room
 * name: Living Room
 * icon: mdi:music
 * volume_controls:
 *   - volume_mute
 *   - volume_set
 *   - volume_buttons
 */
export type MediaPlayerCardConfig = {
  entity: string;
  icon?: string;
  name?: string;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  primary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  secondary_info?: 'name' | 'state' | 'last-changed' | 'last-updated' | 'none';
  icon_type?: 'icon' | 'entity-picture' | 'none';
  use_media_info?: boolean;
  show_volume_level?: boolean;
  media_controls?: Array<'on_off' | 'shuffle' | 'previous' | 'play_pause_stop' | 'next' | 'repeat'>;
  volume_controls?: Array<'volume_mute' | 'volume_set' | 'volume_buttons'>;
  collapsible_controls?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Defines the action configurations for tap, hold, and double tap actions.
 */
export type ActionConfig = {
  action: 'more-info' | 'navigate' | 'url' | 'call-service' | 'none';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: Record<string, any>;
  haptic?: 'light' | 'medium' | 'success' | 'warning' | 'failure' | 'heavy' | 'selection';
};

