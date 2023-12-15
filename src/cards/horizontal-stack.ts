
/**
 * A configuration for the horizontal stack card, which allows multiple cards to be
 * stacked together horizontally within the space of one column.
 * 
 * This is useful for creating groups of cards that share the same horizontal space.
 * 
 * @example
 * ```
 * type: horizontal-stack
 * title: Lights
 * cards:
 *   - type: picture-entity
 *     image: /local/bed_1.png
 *     entity: light.ceiling_lights
 *   - type: picture-entity
 *     image: /local/bed_2.png
 *     entity: light.bed_light
 * ```
 * 
 * Visual representation: ![Two picture cards in a horizontal stack card](https://www.home-assistant.io/images/lovelace/lovelace_horizontal_stack.png)
 * You can learn more about the horizontal stack card [here](https://www.home-assistant.io/lovelace/horizontal-stack/).
 */
export type HorizontalStackCardConfig = {
  /** The title of the stack, displayed above the cards. */
  title?: string;
  /**
   * A list of card configurations that should be displayed next to each other horizontally.
   * Each item in the list represents a card configuration.
   */
  cards: Array<object>; // Replace 'object' with the actual expected card config type definitions when available
};

