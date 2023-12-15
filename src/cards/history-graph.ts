
/**
 * Configuration for the history graph card that allows display of a graph for
 * each entity over time.
 *
 * For documentation, see:
 * [History graph card on Home Assistant](https://www.home-assistant.io/lovelace/history-graph/)
 *
 * ![Screenshot of the history graph card for entities without a unit_of_measurement](https://www.home-assistant.io/images/lovelace/lovelace_history_graph_no_unit_of_measurement.png)
 * ![Screenshot of the history graph card for entities with a unit_of_measurement](https://www.home-assistant.io/images/lovelace/lovelace_history_graph_unit_of_measurement.png)
 *
 * @example
 * ```
 * type: history-graph
 * title: 'My Graph'
 * entities:
 *   - sensor.outside_temperature
 *   - entity: media_player.lounge_room
 *     name: Main player
 * ```
 *
 * @example
 * ```
 * type: history-graph
 * title: "Temperatures in the last 48 hours"
 * hours_to_show: 48
 * entities:
 *   - sensor.outside_temperature
 *   - entity: sensor.lounge_temperature
 *     name: "Lounge"
 *   - entity: sensor.attic_temperature
 *     name: "Attic"
 * ```
 */
export type HistoryGraphCardConfig = {
  /**
   * A list of entity IDs or entity object configurations to display on the graph.
   */
  entities: Array<string | HistoryGraphEntityConfig>;

  /**
   * The number of hours of history to show in the graph. Minimum is 1 hour.
   */
  hours_to_show?: number;

  /**
   * The title of the card.
   */
  title?: string;

  /**
   * Whether or not the entity names should be shown on the card.
   */
  show_names?: boolean;

  /**
   * Boolean indicating if the Y-axis should use a logarithmic scale for numerical values.
   */
  logarithmic_scale?: boolean;
};

/**
 * If entities are defined as objects with additional configuration for the history graph card.
 */
export type HistoryGraphEntityConfig = {
  /**
   * The entity ID.
   */
  entity: string;

  /**
   * An optional name to overwrite the friendly name of the entity.
   */
  name?: string;
};

