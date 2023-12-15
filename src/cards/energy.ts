
/**
 * Energy Date Selection Card Configuration
 * Displays a picker to select data to show, affecting data in all other cards.
 * 
 * @example
 * ```yaml
 * type: energy-date-selection
 * ```
 * Screenshot of [Energy date selection card](https://www.home-assistant.io/images/lovelace/energy-date-selection-card.png)
 */
export type EnergyDateSelectionCardConfig = Record<string, never>;

/**
 * Energy Usage Graph Card Configuration
 * Shows the amount of energy consumed and returned to the grid.
 * 
 * @example
 * ```yaml
 * type: energy-usage-graph
 * ```
 * Screenshot of [Energy usage graph card](https://www.home-assistant.io/images/lovelace/energy-usage-graph-card.png)
 */
export type EnergyUsageGraphCardConfig = Record<string, never>;

/**
 * Solar Production Graph Card Configuration
 * Shows the energy produced by solar panels, and potentially the forecast of solar production.
 * 
 * @example
 * ```yaml
 * type: energy-solar-graph
 * ```
 * Screenshot of [Solar production graph card](https://www.home-assistant.io/images/lovelace/energy-solar-graph-card.png)
 */
export type EnergySolarGraphCardConfig = Record<string, never>;

/**
 * Gas Consumption Graph Card Configuration
 * Displays the amount of gas consumed per source.
 * 
 * @example
 * ```yaml
 * type: energy-gas-graph
 * ```
 * Screenshot of [Gas consumption graph card](https://www.home-assistant.io/images/lovelace/energy-gas-graph-card.png)
 */
export type EnergyGasGraphCardConfig = Record<string, never>;

/**
 * Water Consumption Graph Card Configuration
 * Shows the amount of water consumed per source.
 * 
 * @example
 * ```yaml
 * type: energy-water-graph
 * ```
 * Screenshot of [Water consumption graph card](https://www.home-assistant.io/images/lovelace/energy-water-graph-card.png)
 */
export type EnergyWaterGraphCardConfig = Record<string, never>;

/**
 * Energy Distribution Card Configuration
 * Displays how energy flowed, from the grid to your house, and solar panels to your house and/or back to the grid.
 * Can also show kWh from the grid produced without using fossil fuels.
 * Optional `link_dashboard` includes a link to the energy dashboard.
 * 
 * @example
 * ```yaml
 * type: energy-distribution
 * link_dashboard: true
 * ```
 * Screenshot of [Energy distribution card](https://www.home-assistant.io/images/lovelace/energy-distribution-card.png)
 */
export type EnergyDistributionCardConfig = {
  link_dashboard?: boolean;
};

/**
 * Energy Sources Table Card Configuration
 * Shows all energy sources and the corresponding amount of energy, costs, and compensation per source if set up.
 * 
 * @example
 * ```yaml
 * type: energy-sources-table
 * ```
 * Screenshot of [Energy sources table card](https://www.home-assistant.io/images/lovelace/energy-sources-table-card.png)
 */
export type EnergySourcesTableCardConfig = Record<string, never>;

/**
 * Grid Neutrality Gauge Card Configuration
 * Represents your energy dependency, encoding if you returned more energy to the grid than consumed, or vice versa.
 * 
 * @example
 * ```yaml
 * type: energy-grid-neutrality-gauge
 * ```
 * Screenshot of [Grid neutrality gauge card](https://www.home-assistant.io/images/lovelace/energy-grid-neutrality-gauge-card.png)
 */
export type EnergyGridNeutralityGaugeCardConfig = Record<string, never>;

/**
 * Solar Consumed Gauge Card Configuration
 * Shows how much of the solar energy was used by your home and not returned to the grid.
 * 
 * @example
 * ```yaml
 * type: energy-solar-consumed-gauge
 * ```
 * Screenshot of [Solar consumed gauge card](https://www.home-assistant.io/images/lovelace/energy-solar-consumed-gauge-card.png)
 */
export type EnergySolarConsumedGaugeCardConfig = Record<string, never>;

/**
 * Carbon Consumed Gauge Card Configuration
 * Displays the amount of energy consumed by your home that was generated using non-fossil fuels, including self-generated solar energy.
 * 
 * @example
 * ```yaml
 * type: energy-carbon-consumed-gauge
 * ```
 * Screenshot of [Carbon consumed gauge card](https://www.home-assistant.io/images/lovelace/energy-carbon-consumed-gauge-card.png)
 */
export type EnergyCarbonConsumedGaugeCardConfig = Record<string, never>;

/**
 * Self-Sufficiency Gauge Card Configuration
 * Indicates how self-sufficient your home is based on the degree of reliance on grid imports.
 * 
 * @example
 * ```yaml
 * type: energy-self-sufficiency-gauge
 * ```
 * Screenshot of [Self-sufficiency gauge card](https://www.home-assistant.io/images/lovelace/energy-self-sufficiency-gauge-card.png)
 */
export type EnergySelfSufficiencyGaugeCardConfig = Record<string, never>;

/**
 * Devices Energy Graph Card Configuration
 * Shows the energy usage per device, sorted by usage.
 * The `max_devices` option can limit the number of displayed devices.
 * 
 * @example
 * ```yaml
 * type: energy-devices-graph
 * ```
 * Example with limited devices:
 * ```yaml
 * type: energy-devices-graph
 * max_devices: 5
 * ```
 * Screenshot of [Devices energy graph card](https://www.home-assistant.io/images/lovelace/energy-devices-graph-card.png)
 */
export type EnergyDevicesGraphCardConfig = {
  max_devices?: number;
};

