
/**
 * Configuration for the weather forecast card which displays the weather with various details.
 * This card is useful for wall-mounted displays and requires a weather entity from one of the supported platforms.
 *
 * @example
 * {
 *   type: 'weather-forecast',
 *   entity: 'weather.openweathermap',
 *   name: 'Home',
 *   show_forecast: true,
 *   forecast_type: 'daily',
 *   secondary_info_attribute: 'extrema',
 *   theme: 'default',
 *   tap_action: { action: 'more-info' }
 * }
 *
 * For theming and personalization of icons reference the advanced theming documentation:
 * ![Themeable icons](https://my.home-assistant.io/redirect/lovelace_icons/) for default weather icons,
 * and using personal images via theme variables like `--weather-icon-sunny`.
 *
 * @link [Weather forecast card](https://www.home-assistant.io/lovelace/weather-forecast/)
 */
export type WeatherForecastCardConfig = {
  /**
   * Entity ID of weather domain.
   */
  entity: string;

  /**
   * Overwrites the friendly name.
   * @default Entity name
   */
  name?: string;

  /**
   * Show next hours/days forecast.
   * @default true
   */
  show_forecast?: boolean;

  /**
   * Type of forecast to display, one of daily, hourly or twice_daily.
   * @default Automatically selects in order of daily, hourly and twice_daily.
   */
  forecast_type: 'daily' | 'hourly' | 'twice_daily';

  /**
   * Which attribute to display under the temperature.
   * @default Defaults to extrema if available, if not available then precipitation and if precipitation isn’t available then humidity.
   */
  secondary_info_attribute?: string;

  /**
   * Override the used theme for this card with any loaded theme.
   */
  theme?: string;

  /**
   * The action taken on card tap.
   */
  tap_action?: ActionConfig;

  /**
   * The action taken on card tap and hold.
   */
  hold_action?: ActionConfig;

  /**
   * The action taken on card double-tap.
   */
  double_tap_action?: ActionConfig;
};

/**
 * Configuration for action events like tap, hold and double-tap.
 */
export type ActionConfig = {
  /**
   * Type of action to perform.
   */
  action: 'more-info' | 'navigate' | 'url' | 'toggle' | 'call-service' | 'none';

  /**
   * Navigation path or URL to navigate to (only used for `navigate` and `url` actions).
   */
  navigation_path?: string;

  /**
   * Service to call (only used for `call-service` action).
   */
  service?: string;

  /**
   * Parameters for the service call (only used for `call-service` action).
   */
  service_data?: { [key: string]: any };
};

