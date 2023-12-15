
/**
 * A configuration interface for the map card, which allows display of entities on a map.
 * 
 * This card enables users to view entities such as `device_trackers`, `zone`, or other geolocation
 * entities on a map interface within Home Assistant.
 * 
 * [Screenshot of the map card](https://www.home-assistant.io/images/lovelace/lovelace_map_card.png)
 * 
 * To configure the map card through the UI, users can add it via the dashboard edit mode.
 * Alternatively, YAML configuration options are available for more advanced setups or preference.
 * 
 * The card accepts a list of entity IDs or entity objects for display, with additional options
 * available for customization such as `title`, `aspect_ratio`, and `hours_to_show`.
 * 
 * More detailed documentation on this card can be found here:
 * [Map Card Documentation](https://www.home-assistant.io/lovelace/map/)
 *
 * @example
 * ```
 * type: map
 * aspect_ratio: 16:9
 * default_zoom: 8
 * auto_fit: true
 * entities:
 *  - device_tracker.demo_paulus
 *  - zone.home
 * ```
 * 
 * @example
 * ```
 * type: map
 * geo_location_sources:
 *  - nsw_rural_fire_service_feed
 * entities:
 *  - zone.home
 * ```
 * 
 * @example
 * ```
 * type: map
 * entities:
 *  - device_tracker.demo_paulus
 *  - entity: sensor.gas_station_gas_price
 *    label_mode: state
 *    focus: false
 * hours_to_show: 48
 * ```
 */
export type MapCardConfig = {
  entities: Array<string | MapEntityConfig>;
  geo_location_sources?: string[];
  auto_fit?: boolean;
  title?: string;
  aspect_ratio?: string;
  default_zoom?: number;
  dark_mode?: boolean;
  hours_to_show?: number;
};

/**
 * A configuration interface for defining entities as objects with additional options.
 * This allows for further customization such as renaming, changing label behavior, or excluding from map focus.
 */
export type MapEntityConfig = {
  entity: string;
  name?: string;
  label_mode?: 'name' | 'state';
  focus?: boolean;
};

