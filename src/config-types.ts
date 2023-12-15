//github.com/home-assistant/frontend/blob/02d2bde269df4012d18e3de86ca637b414781a6e/src/data/area_registry.ts#L27

export interface AreaRegistryEntry {
  area_id: string;
  name: string;
  picture: string | null;
  aliases: string[];
}

// from https://github.com/home-assistant/frontend/blob/02d2bde269df4012d18e3de86ca637b414781a6e/src/data/device_registry.ts#L24

export interface DeviceRegistryEntry {
  id: string;
  config_entries: string[];
  connections: Array<[string, string]>;
  identifiers: Array<[string, string]>;
  manufacturer: string | null;
  model: string | null;
  name: string | null;
  sw_version: string | null;
  hw_version: string | null;
  serial_number: string | null;
  via_device_id: string | null;
  area_id: string | null;
  name_by_user: string | null;
  entry_type: "service" | null;
  disabled_by: "user" | "integration" | "config_entry" | null;
  configuration_url: string | null;
}

// from https://github.com/home-assistant/frontend/blob/02d2bde269df4012d18e3de86ca637b414781a6e/src/data/entity_registry.ts#L52

type entityCategory = "config" | "diagnostic";

export interface EntityRegistryEntry {
  id: string;
  entity_id: string;
  name: string | null;
  icon: string | null;
  platform: string;
  config_entry_id: string | null;
  device_id: string | null;
  area_id: string | null;
  disabled_by: "user" | "device" | "integration" | "config_entry" | null;
  hidden_by: Exclude<EntityRegistryEntry["disabled_by"], "config_entry">;
  entity_category: entityCategory | null;
  has_entity_name: boolean;
  original_name?: string;
  unique_id: string;
  translation_key?: string;
  options: EntityRegistryOptions | null;
}

export interface EntityRegistryOptions {
  number?: NumberEntityOptions;
  sensor?: SensorEntityOptions;
  lock?: LockEntityOptions;
  weather?: WeatherEntityOptions;
  light?: LightEntityOptions;
  switch_as_x?: SwitchAsXEntityOptions;
  conversation?: Record<string, unknown>;
  "cloud.alexa"?: Record<string, unknown>;
  "cloud.google_assistant"?: Record<string, unknown>;
}

export interface SensorEntityOptions {
  display_precision?: number | null;
  suggested_display_precision?: number | null;
  unit_of_measurement?: string | null;
}

export interface LightEntityOptions {
  favorite_colors?: LightColor[];
}

export interface NumberEntityOptions {
  unit_of_measurement?: string | null;
}

export interface LockEntityOptions {
  default_code?: string | null;
}

export interface WeatherEntityOptions {
  precipitation_unit?: string | null;
  pressure_unit?: string | null;
  temperature_unit?: string | null;
  visibility_unit?: string | null;
  wind_speed_unit?: string | null;
}

export interface SwitchAsXEntityOptions {
  entity_id: string;
}

export interface EntityRegistryOptions {
  number?: NumberEntityOptions;
  sensor?: SensorEntityOptions;
  lock?: LockEntityOptions;
  weather?: WeatherEntityOptions;
  light?: LightEntityOptions;
  switch_as_x?: SwitchAsXEntityOptions;
  conversation?: Record<string, unknown>;
  "cloud.alexa"?: Record<string, unknown>;
  "cloud.google_assistant"?: Record<string, unknown>;
}

export type LightColor =
  | {
      color_temp_kelvin: number;
    }
  | {
      hs_color: [number, number];
    }
  | {
      rgb_color: [number, number, number];
    }
  | {
      rgbw_color: [number, number, number, number];
    }
  | {
      rgbww_color: [number, number, number, number, number];
    };
