
/**
 * Represents a picture-glance card configuration for Home Assistant's Lovelace dashboard.
 * This card shows an image and allows placement of icons of entity states on the card
 * to control those entities from there.
 *
 * @example
 * ```
 * type: picture-glance
 * title: Living room
 * entities:
 *   - switch.decorative_lights
 *   - light.ceiling_lights
 *   - lock.front_door
 *   - binary_sensor.movement_backyard
 *   - binary_sensor.basement_floor_wet
 * image: /local/living_room.png
 * ```
 *
 * @example
 * ```
 * type: picture-glance
 * title: Living room
 * entities:
 *   - switch.decorative_lights
 *   - light.ceiling_lights
 * camera_image: camera.demo_camera
 * ```
 *
 * More examples can be found in the [documentation](https://www.home-assistant.io/lovelace/picture-glance/).
 */
export type PictureGlanceCardConfig = {
  /** List of entities or entity objects. */
  entities: Array<string | PictureGlanceEntityConfig>;

  /** The card title. */
  title?: string;

  /** Background image URL. */
  image?: string;

  /** Camera entity as Background image. */
  camera_image?: string;

  /** "live" will show the live view if stream is enabled. */
  camera_view?: 'auto' | 'live';

  /** Background image based on entity state. */
  state_image?: Record<string, string>;

  /** State-based CSS filters. */
  state_filter?: Record<string, string>;

  /** Forces the height of the image to be a ratio of the width. */
  aspect_ratio?: string;

  /** Entity to use for `state_image` and `state_filter`. */
  entity?: string;

  /** Show entity state text. */
  show_state?: boolean;

  /** Override the used theme for this card with any loaded theme. */
  theme?: string;

  /** Action taken on card tap. */
  tap_action?: PictureGlanceActionConfig;

  /** Action taken on card tap and hold. */
  hold_action?: PictureGlanceActionConfig;

  /** Action taken on card double tap. */
  double_tap_action?: PictureGlanceActionConfig;
};

/**
 * Represents entity configuration within the picture-glance card.
 */
export type PictureGlanceEntityConfig = {
  /** Entity ID. */
  entity: string;

  /** Attribute of the entity to display instead of the state. */
  attribute?: string;

  /** Prefix to display before the attribute’s value. */
  prefix?: string;

  /** Suffix to display after the attribute’s value. */
  suffix?: string;

  /** Overwrites default icon. */
  icon?: string;

  /** Show entity state text. Defaults to `true` if defined as object. */
  show_state?: boolean;

  /** Action taken on card tap. */
  tap_action?: PictureGlanceActionConfig;

  /** Action taken on card tap and hold. */
  hold_action?: PictureGlanceActionConfig;

  /** Action taken on card double tap. */
  double_tap_action?: PictureGlanceActionConfig;
};

/**
 * Represents an action configuration for tap, hold, and double-tap actions.
 */
export type PictureGlanceActionConfig = {
  action: 'call-service' | 'more-info' | 'navigate' | 'url' | 'none';
  service?: string;
  data?: Record<string, any>;
  target?: Record<string, any>;
  url?: string;
  navigation_path?: string;
  service_data?: Record<string, any>;
};

