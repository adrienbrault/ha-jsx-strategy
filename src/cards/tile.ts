
/**
 * The TileCardConfig type models the configuration for the tile card in Home Assistant.
 * It presents a quick overview of an entity with options to toggle, show more info, or display
 * additional entity-specific information.
 *
 * @example
 * ```
 * type: tile
 * entity: cover.kitchen_window
 * ```
 *
 * @example
 * ```
 * type: tile
 * entity: light.bedroom
 * icon: mdi:lamp
 * color: yellow
 * ```
 *
 * @example
 * ```
 * type: tile
 * entity: person.anne_therese
 * show_entity_picture: true
 * ```
 *
 * @example
 * ```
 * type: tile
 * entity: person.anne_therese
 * vertical: true
 * hide_state: true
 * ```
 *
 * @example
 * ```
 * type: tile
 * entity: light.living_room
 * state_content:
 *   - state
 *   - brightness
 *   - last-changed
 * ```
 *
 * @example
 * ```
 * type: tile
 * entity: vacuum.ground_floor
 * features:
 *   - type: vacuum-commands
 *     commands:
 *       - start_pause
 *       - return_home
 * ```
 *
 * [Screenshot of tile cards](https://www.home-assistant.io/images/lovelace/lovelace_tile_card.png)
 * [Action documentation](https://www.home-assistant.io/lovelace/actions/)
 */
export type TileCardConfig = {
  entity: string;
  name?: string;
  icon?: string;
  color?: string;
  show_entity_picture?: boolean;
  vertical?: boolean;
  hide_state?: boolean;
  state_content?: string | string[];
  tap_action?: ActionConfig;
  icon_tap_action?: ActionConfig;
  features?: FeatureConfig[];
};

/**
 * Type for defining an action configuration for tile card taps.
 */
export type ActionConfig = {
  // ActionConfig properties are not detailed in the provided documentation.
};

/**
 * Type for defining additional widgets or functionalities for controlling the entity on the tile card.
 */
export type FeatureConfig = {
  // FeatureConfig properties are not detailed in the provided documentation.
};

