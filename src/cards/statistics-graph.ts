
/**
 * Represents the configuration options for the statistics graph card in Home Assistant.
 * This card allows displaying a graph of statistics data for the entities listed.
 *
 * To learn more about the statistics graph card, visit the following link:
 * [Statistics graph card documentation](https://www.home-assistant.io/lovelace/statistics-graph/)
 *
 * @example
 * {
 *   type: 'statistics-graph',
 *   title: 'My Graph',
 *   entities: [
 *     'sensor.outside_temperature',
 *     { entity: 'sensor.inside_temperature', name: 'Inside' }
 *   ],
 *   days_to_show: 30,
 *   chart_type: 'line',
 *   stat_types: ['min', 'max', 'mean'],
 *   period: 'hour',
 *   hide_legend: false,
 *   logarithmic_scale: true
 * }
 */
export type StatisticsGraphCardConfig = {
  /**
   * A list of entity IDs or entity objects, which may include additional configuration, or an external statistic ID.
   */
  entities: Array<string | EntityConfig>;

  /**
   * The number of days to show in the graph. Minimum is 1 day.
   */
  days_to_show?: number;

  /**
   * If provided, defines whether the graph should be rendered as a 'bar' or 'line' chart.
   */
  chart_type?: 'bar' | 'line';

  /**
   * The statistics types to render on the graph such as 'min', 'max', 'mean', 'sum', 'state', 'change'.
   */
  stat_types?: Array<'min' | 'max' | 'mean' | 'sum' | 'state' | 'change'>;

  /**
   * An optional title for the card.
   */
  title?: string;

  /**
   * The period of the rendered graph such as '5minute', 'hour', 'day', 'week', or 'month'.
   */
  period?: '5minute' | 'hour' | 'day' | 'week' | 'month';

  /**
   * If true, the graph legend will be hidden.
   */
  hide_legend?: boolean;

  /**
   * If true, numerical values on the Y-axis will be displayed with a logarithmic scale.
   */
  logarithmic_scale?: boolean;
};

/**
 * An individual entity configuration object used within the entities list of the StatisticsGraphCardConfig.
 */
export type EntityConfig = {
  /**
   * The entity ID of the Home Assistant entity to display statistics for.
   */
  entity: string;

  /**
   * An optional name to overwrite the friendly name of the entity.
   */
  name?: string;
};

