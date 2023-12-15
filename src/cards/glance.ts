
/**
 * Represents a Glance Card configuration in Home Assistant.
 * Useful to group multiple sensors in a compact overview.
 * Can be used together with entity-filter cards to create dynamic cards.
 *
 * @example
 * ```
 * type: glance
 * title: Glance card sample
 * entities:
 *   - binary_sensor.movement_backyard
 *   - light.bed_light
 *   - binary_sensor.basement_floor_wet
 *   - sensor.outside_temperature
 *   - light.ceiling_lights
 *   - switch.ac
 *   - lock.kitchen_door
 * ```
 * ![Screenshot of the glance card](https://www.home-assistant.io/images/lovelace/lovelace_glance_card.png)
 *
 * @example
 * ```
 * type: glance
 * title: Better names
 * entities:
 *   - entity: binary_sensor.movement_backyard
 *     name: Movement?
 *   - light.bed_light
 *   - binary_sensor.basement_floor_wet
 *   - sensor.outside_temperature
 *   - light.ceiling_lights
 *   - switch.ac
 *   - lock.kitchen_door
 *   - entity: switch.wall_plug_switch
 *     tap_action:
 *       action: toggle
 * ```
 * ![Screenshot of the glance card with custom title](https://www.home-assistant.io/images/lovelace/lovelace_glance_card_title.png)
 *
 * For more information, see [Glance Card documentation](https://www.home-assistant.io/lovelace/glance/).
 */
export type GlanceCardConfig = {
  title?: string;
  entities: Array<string | GlanceEntityConfig>;
  show_name?: boolean;
  show_icon?: boolean;
  show_state?: boolean;
  theme?: string;
  columns?: number;
  state_color?: boolean;
};

/**
 * Represents additional options for entities when defined as objects in a Glance Card.
 */
export type GlanceEntityConfig = {
  entity: string;
  name?: string;
  icon?: string;
  image?: string;
  show_last_changed?: boolean;
  show_state?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Represents actions that can be taken when interacting with an entity in a Glance Card.
 */
export type ActionConfig = {
  action: 'more-info' | 'toggle' | 'call-service' | 'none' | 'navigate' | 'url';
  service?: string;
  service_data?: Record<string, unknown>;
  navigation_path?: string;
  url?: string;
  repeat?: number;
  confirmation?: ActionConfirmationConfig;
};

/**
 * Represents a confirmation dialog to prevent accidental interactions in a Glance Card.
 */
export type ActionConfirmationConfig = {
  text?: string;
};

