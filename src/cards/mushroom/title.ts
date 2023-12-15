/**
 * A Title card configuration type for a Home Assistant Lovelace UI.
 * A Title block to separate sections of cards.
 *
 * @example
 * type: 'title'
 * title: 'Living Room Lights'
 * subtitle: 'Control all lights'
 *
 * @see {@link https://www.home-assistant.io/lovelace/|Title Card documentation}
 */
export type TitleCardConfig = {
  /**
   * Title to render. May contain templates.
   */
  title?: string;

  /**
   * Subtitle to render. May contain templates.
   */
  subtitle?: string;

  /**
   * Only reacts to the state changes of these entities. This can be used if the automatic analysis fails to find all relevant entities.
   */
  entity_id?: string | string[];

  /**
   * Home assistant action to perform on title tap.
   */
  title_tap_action?: ActionConfig;

  /**
   * Home assistant action to perform on subtitle tap.
   */
  subtitle_tap_action?: ActionConfig;
};

/**
 * Configuration type for actions in the Home Assistant Lovelace UI.
 */
export type ActionConfig = {
  /**
   * The type of action. Can be 'none', 'more-info', 'navigate', 'url', 'call-service', or 'fire-dom-event'.
   */
  action:
    | "none"
    | "more-info"
    | "navigate"
    | "url"
    | "call-service"
    | "fire-dom-event";

  /**
   * When action type is 'navigate', this is the navigation path.
   */
  navigation_path?: string;

  /**
   * When action type is 'url', this is the URL to open.
   */
  url_path?: string;

  /**
   * When action type is 'call-service', this is the service to call.
   */
  service?: string;

  /**
   * When action type is 'call-service', these are the service data to include.
   */
  service_data?: object;

  /**
   * When action type is 'fire-dom-event', this is the event to fire.
   */
  event?: string;

  /**
   * Allows for a confirmation dialog to show before performing the action.
   */
  confirmation?: ConfirmationConfig;
};

/**
 * Configuration type for action confirmations in the Home Assistant Lovelace UI.
 */
export type ConfirmationConfig = {
  /**
   * Explanatory text to show in the confirmation dialog.
   */
  text?: string;
};
