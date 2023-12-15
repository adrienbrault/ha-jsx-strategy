
/**
 * Represents a Webpage Card configuration in Home Assistant, which allows
 * embedding of a specific webpage or file from the local storage into the
 * Home Assistant user interface. 
 * 
 * This type of card can be useful for displaying external web content
 * or files within your local Home Assistant instance.
 * 
 * For more information, see the [Webpage Card documentation](https://www.home-assistant.io/lovelace/webpage).
 * 
 * @example
 * Here's a configuration example of a webpage card:
 * 
 * ```yaml
 * type: iframe
 * url: https://www.home-assistant.io
 * aspect_ratio: 75%
 * ```
 * 
 * @example
 * Example including the optional title:
 * 
 * ```yaml
 * type: iframe
 * url: https://www.home-assistant.io
 * aspect_ratio: 75%
 * title: Home Assistant Website
 * ```
 */
export type WebpageCardConfig = {
    /**
     * The URL of the website to be embedded.
     */
    url: string;

    /**
     * Forces the height of the iframe to be a ratio of the width.
     * Valid formats are height percentage value (e.g., "50%") or ratio expressed with colon or "x" separator 
     * (e.g., "16:9" or "16x9"). For a ratio, the second element can be omitted and will default to "1" 
     * (e.g. "1.78" equals "1.78:1").
     */
    aspect_ratio?: string;

    /**
     * Allows the user to open iframe content links by opening the default browser in the Home Assistant mobile app.
     * It is `false` by default because it adds `allow-top-navigation-by-user-activation` on the iframe's sandbox 
     * attribute, which is considered less secure. Set to `true` if you need it and trust the iframe's content.
     */
    allow_open_top_navigation?: boolean;

    /**
     * The title of the card.
     */
    title?: string;
};

