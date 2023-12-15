
/**
 * Represents the configuration for severity mapping in the gauge card,
 * allowing for setting colors for different number ranges.
 * 
 * @example
 * // Define the severity map:
 * severity: {
 *   green: 0,
 *   yellow: 45,
 *   red: 85
 * }
 * 
 * @see [Gauge Card Severity Example](https://www.home-assistant.io/lovelace/gauge/#define-the-severity-map)
 */
type SeverityConfig = {
  green: number;
  yellow: number;
  red: number;
};

/**
 * Represents a segment configuration for a needle gauge,
 * including the value from where a color starts and the color itself.
 * 
 * @example
 * // Define a list of segments for the gauge:
 * segments: [
 *   { from: 0, color: '#db4437' },
 *   { from: 35, color: '#ffa600' },
 *   { from: 40, color: '#43a047' },
 *   { from: 60, color: '#ffa600' },
 *   { from: 65, color: '#db4437' }
 * ]
 * 
 * @see [Gauge Card Multiple Segments](https://www.home-assistant.io/lovelace/gauge/#multiple-segments)
 */
type SegmentConfig = {
  from: number;
  color: string;
  label?: string;
};

/**
 * Configuration for the Gauge Card that displays sensor data visually.
 * 
 * @example
 * // Gauge card with title and unit of measurement:
 * {
 *   type: 'gauge',
 *   name: 'CPU Usage',
 *   unit: '%',
 *   entity: 'sensor.cpu_usage'
 * }
 * 
 * @see [Gauge Card Configuration Example](https://www.home-assistant.io/lovelace/gauge/#title-and-unit-of-measurement)
 */
export type GaugeCardConfig = {
  entity: string;
  name?: string;
  unit?: string;
  theme?: string;
  min?: number;
  max?: number;
  needle?: boolean;
  severity?: SeverityConfig;
  segments?: SegmentConfig[];
};

