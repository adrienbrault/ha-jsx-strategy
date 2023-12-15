
/**
 * The vertical stack card allows you to group multiple cards so they always sit in the same column.
 * @see [Vertical Stack Card Documentation](https://www.home-assistant.io/lovelace/vertical-stack/)
 *
 * @example Basic example
 * ```yaml
 * type: vertical-stack
 * title: Backyard
 * cards:
 *   - type: picture-entity
 *     entity: camera.demo_camera
 *     show_info: false
 *   - type: entities
 *     entities:
 *       - binary_sensor.movement_backyard
 * ```
 *
 * @example Combination of vertical and horizontal stack card
 * ```yaml
 * type: vertical-stack
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
 */
export type VerticalStackCardConfig = {
    /** Title of the stack. */
    title?: string;
    /** List of cards. */
    cards: Array<any>; // The type should be a union of all possible card configurations, replaced with `any` for simplification.
};

