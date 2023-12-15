
/**
 * Configuration for the Grid card which allows displaying multiple cards in a grid layout.
 * It fills the columns, automatically adding new rows as needed.
 *
 * @example
 * ```
 * type: grid
 * cards:
 *   - type: picture-entity
 *     entity: camera.demo_camera
 *     show_info: false
 *   - type: entities
 *     entities:
 *       - binary_sensor.movement_backyard
 * ```
 *
 * @example
 * ```
 * type: grid
 * title: Backyard
 * columns: 2
 * square: false
 * cards:
 *   - type: picture-entity
 *     entity: group.all_lights
 *     image: /local/house.png
 *   - type: horizontal-stack
 *     cards:
 *       - type: picture-entity
 *         entity: light.ceiling_lights
 *         image: /local/bed_1.png
 *       - type: picture-entity
 *         entity: light.bed_light
 *         image: /local/bed_2.png
 * ```
 *
 * ![Grid card screenshot](https://www.home-assistant.io/images/lovelace/lovelace_grid_card.png)
 */
export type GridCardConfig = {
  /** Title of the grid. */
  title?: string;
  
  /** Should the cards be shown square. Defaults to true. */
  square?: boolean;
  
  /** Number of columns in the grid. Defaults to 3. */
  columns?: number;
  
  /** List of cards. */
  cards: Array<unknown>; // Types of the cards are indeterminate within this context
};

