
/**
 * The Picture Entity Card displays an entity in the form of an image. It can also
 * display the picture of camera entities with state-based changes to the background.
 *
 * More information can be found here:
 * [Picture Entity Card Documentation](https://www.home-assistant.io/lovelace/picture-entity/)
 *
 * @example
 * ```
 * type: picture-entity
 * entity: light.bed_light
 * image: /local/bed_light.png
 * ```
 *
 * @example
 * ```
 * type: picture-entity
 * entity: light.bed_light
 * state_image:
 *   "on": /local/bed_light_on.png
 *   "off": /local/bed_light_off.png
 * ```
 *
 * @example
 * ```
 * type: picture-entity
 * entity: camera.backdoor
 * camera_view: live
 * tap_action:
 *   action: call-service
 *   service: camera.snapshot
 *   data:
 *     entity_id: camera.backdoor
 *     filename: '/shared/backdoor-{{ now().strftime("%Y-%m-%d-%H%M%S") }}.jpg'
 * ```
 */
export type PictureEntityCardConfig = {
  entity: string;
  camera_image?: string;
  camera_view?: 'auto' | 'live';
  image?: string;
  state_image?: Record<string, string>;
  state_filter?: Record<string, string>;
  aspect_ratio?: string;
  fit_mode?: 'cover' | 'contain' | 'fill';
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  theme?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Configuration for tap, hold, and double-tap actions.
 */
export type ActionConfig = {
  action: 'more-info' | 'call-service' | 'navigate' | 'url' | 'toggle' | 'none';
  service?: string;
  service_data?: any;
  navigation_path?: string;
  url_path?: string;
  confirmation?: ActionConfirmationConfig;
};

/**
 * Configuration for confirmation dialogues when an action is performed.
 */
export type ActionConfirmationConfig = {
  text?: string;
  exemptions?: Array<{ user: string }>;
};

