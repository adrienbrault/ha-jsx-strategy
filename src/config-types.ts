export type Area = {
  aliases: string[];
  area_id: string;
  name: string;
  picture: string;
};

export type Device = {
  area_id: string;
  config_entries: string[];
  configuration_url: string | null;
  connections: [string, string][];
  disabled_by: string;
  entry_type: string | null;
  hw_version: string | null;
  id: string;
  identifiers: [string, string][];
  manufacturer: string;
  model: string;
  name: string;
  name_by_user: string | null;
  serial_number: string | null;
  sw_version: string;
  via_device_id: string;
};

export type Entity = {
  area_id: null;
  config_entry_id: null;
  device_id: null;
  disabled_by: null;
  entity_category: null;
  entity_id: string;
  has_entity_name: boolean;
  hidden_by: null;
  icon: null;
  id: string;
  name: null;
  options: {
    conversation: {
      should_expose: boolean;
    };
    cloud: {
      alexa: {
        should_expose: boolean;
      };
      google_assistant: {
        should_expose: boolean;
      };
    };
  };
  original_name: null;
  platform: string;
  translation_key: null;
  unique_id: string;
};
