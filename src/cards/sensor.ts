
/**
 * Represents the limits for the Y-axis of a graph in a SensorCardConfig.
 *
 * @see [Limits Documentation](https://www.home-assistant.io/lovelace/sensor/#limits)
 *
 * @example
 * ```yaml
 * limits:
 *   min: 0
 *   max: 100
 * ```
 */
type GraphLimits = {
  min?: number;
  max?: number;
};

/**
 * Represents the configuration options for a sensor card in Home Assistant.
 * This card provides a quick overview of sensor state with an optional graph.
 *
 * @see [Sensor Card Documentation](https://www.home-assistant.io/lovelace/sensor/)
 *
 * @example
 * ```yaml
 * type: sensor
 * entity: sensor.illumination
 * name: Illumination
 * ```
 */
type SensorCardConfig = {
  entity: string;
  icon?: string;
  name?: string;
  graph?: 'none' | 'line';
  unit?: string;
  detail?: 1 | 2;
  hours_to_show?: number;
  limits?: GraphLimits;
  theme?: string;
};

export { SensorCardConfig, GraphLimits };

