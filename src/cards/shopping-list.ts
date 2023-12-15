
/**
 * Configuration for the shopping list card that allows you to manage your shopping list items.
 * This card requires the shopping list integration to be set up in Home Assistant before it can be used.
 * 
 * @see {@link https://www.home-assistant.io/lovelace/shopping-list/ Screenshot of the shopping list card} for the visual representation of the card.
 *
 * @example
 * ```yaml
 * type: shopping-list
 * title: shopping list
 * ```
 *
 * @example
 * ```yaml
 * type: shopping-list
 * theme: happy
 * ```
 */
export type ShoppingListCardConfig = {
  /**
   * The title of the shopping list card. This is optional and can be used to display a custom header.
   */
  title?: string;

  /**
   * This option allows you to override the default theme for this specific card. 
   * You need to have the theme already loaded in Home Assistant.
   */
  theme?: string;
};

