
/**
 * Represents the configuration for the statistic card which displays statistical values for an entity.
 * It supports displaying min, max, mean or change statistics over a specific period.
 *
 * [Screenshot of the statistic card for a temperature sensor](https://www.home-assistant.io/images/lovelace/lovelace_statistic_card_temperature.png)
 *
 * @example
 * ```
 * // YAML configuration example for the change during last month
 * type: statistic
 * entity: sensor.energy_consumption
 * period:
 *   calendar:
 *     period: month
 *     offset: -1
 * stat_type: change
 * ```
 */
export type StatisticCardConfig = {
  /** The entity ID of a sensor with statistics, or an external statistic ID. */
  entity: string;
  /** The statistics types to render. Options: 'min', 'max', 'mean', 'change'. */
  stat_type: string;
  /** Optional name of the entity to override the default name. */
  name?: string;
  /** Optional icon to override the default entity icon. */
  icon?: string;
  /** Optional unit of measurement to override the default unit provided by the entity. */
  unit?: string;
  /** The period to use for the calculation. Can be a calendar period, fixed period, or a rolling window. */
  period: CalendarPeriod | FixedPeriod | RollingWindow;
  /** Optional theme to override the default card theme. */
  theme?: string;
  /** Optional footer widget configuration. */
  footer?: FooterConfig;
};

/**
 * Represents the configuration for a period defined by a calendar period.
 *
 * @example
 * ```
 * // YAML configuration example for calendar period
 * period:
 *   calendar:
 *     period: month
 *     offset: -1
 * ```
 */
export type CalendarPeriod = {
  calendar: {
    /** The period to use. Options: 'day', 'week', 'month', 'year'. */
    period: string;
    /** Optional offset of the current period. 0 for current, -1 for the previous, etc. */
    offset?: number;
  };
};

/**
 * Represents the configuration for a fixed period.
 *
 * @example
 * ```
 * // YAML configuration example for fixed period in 2022
 * period:
 *   fixed_period:
 *     start: 2022-01-01
 *     end: 2022-12-31
 * ```
 *
 * @example
 * ```
 * // YAML configuration example for an all time period without a start or end
 * period:
 *   fixed_period:
 * ```
 */
export type FixedPeriod = {
  fixed_period: {
    /** The start of the period. */
    start?: string;
    /** The end of the period. */
    end?: string;
  };
};

/**
 * Represents the configuration for a rolling window period.
 *
 * @example
 * ```
 * // YAML configuration example for a rolling window period
 * period:
 *   rolling_window:
 *     duration:
 *       hours: 1
 *       minutes: 10
 *       seconds: 5
 *     offset:
 *       hours: -2
 *       minutes: -20
 *       seconds: -10
 * ```
 */
export type RollingWindow = {
  rolling_window: {
    /** The duration of the period, consisting of hours, minutes, and seconds. */
    duration: {
      hours?: number;
      minutes?: number;
      seconds?: number;
    };
    /** The offset of the current time. 0 means the current period, -1 is the previous period. */
    offset?: {
      hours?: number;
      minutes?: number;
      seconds?: number;
    };
  };
};

/**
 * Represents the configuration for the footer widget in a statistic card.
 *
 * The FooterConfig interface definition is a placeholder for the potential footer widget configuration.
 * Documentation does not provide further details, thus requires additional information to define the actual properties.
 *
 * @example
 * ```
 * // Example for a placeholder FooterConfig, actual configuration may vary
 * footer:
 *   // The actual configuration properties would be defined here
 * ```
 */
export type FooterConfig = {
  /** Placeholder for footer configuration properties. */
  [key: string]: unknown;
};

