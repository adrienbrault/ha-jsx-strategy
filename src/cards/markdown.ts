
/**
 * The Markdown card is used to render Markdown using Marked.js, supporting specifications such as CommonMark, GFM, and markdown.pl.
 * 
 * For more information, see [Markdown card documentation](https://www.home-assistant.io/lovelace/markdown/).
 * 
 * @example
 * ```yaml
 * type: markdown
 * content: >
 *   ## Dashboards
 *   Starting with Home Assistant 0.72, we're experimenting with a new way of defining your interface.
 * ```
 */
export type MarkdownCardConfig = {
  /** Content to render as Markdown. May contain templates. */
  content: string;
  /** The card title (optional). */
  title?: string;
  /** 
   * To help estimate the height of the card in units of 50 pixels, 
   * which is approximately 3 lines of text in default size (optional).
   */
  card_size?: number;
  /**
   * A list of entity IDs so a template in content only reacts to the state changes of these entities.
   * Can be a string if only a single entity is required (optional).
   */
  entity_id?: string | string[];
  /** Override the used theme for this card with any loaded theme (optional). */
  theme?: string;
};

