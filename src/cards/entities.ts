
/** 
 * Represents a configuration for the header or footer of an entities card.
 * @see [Header Documentaion](https://www.home-assistant.io/lovelace/entities/#header)
 * @example
 * header:
 *   type: picture
 *   image: "https://www.home-assistant.io/images/dashboards/header-footer/balloons-header.png"
 */
type HeaderFooterConfig = {
  type: string; // The type of header or footer (e.g., "picture").
  image?: string; // Optional URL of an image to display.
}

/**
 * Represents the configuration for an action taken on a tap, hold, or double-tap.
 * @see [Action Documentation](https://www.home-assistant.io/lovelace/actions)
 * @example
 * tap_action:
 *   action: toggle
 */
type ActionConfig = {
  action: string; // The action to perform (e.g., "toggle", "call-service", etc.).
  // Add more properties depending on the action (e.g., service, service_data)
}

/**
 * Defines the configuration for an entities card in the Home Assistant UI.
 * @see [Entities Card Documentation](https://www.home-assistant.io/lovelace/entities)
 * @example
 * type: entities
 * title: Entities card sample
 * show_header_toggle: true
 * entities:
 *   - entity: alarm_control_panel.alarm
 *   - device_tracker.demo_paulus
 */
export type EntitiesCardConfig = {
  entities: Array<string | EntityConfig | SpecialRowConfig>; // A list of entity IDs or entity/special row objects.
  title?: string; // Card title.
  icon?: string; // Icon to display next to the title.
  show_header_toggle?: boolean; // Button to turn on/off all entities.
  theme?: string; // Theme override for the card.
  state_color?: boolean; // Color icons based on state.
  header?: HeaderFooterConfig; // Header widget config.
  footer?: HeaderFooterConfig; // Footer widget config.
};

/**
 * Represents the configuration for an entity within an entities card.
 * @see [Entities Configuration](https://www.home-assistant.io/lovelace/entities/#options-for-entities)
 * @example
 * entities:
 *   - entity: light.kitchen
 *     name: Kitchen Lights
 */
export type EntityConfig = {
  entity: string; // Entity ID.
  type?: string; // Custom card type or "simple-entity" to force default rendering.
  name?: string; // Custom friendly name.
  icon?: string; // Custom icon.
  image?: string; // Custom entity image.
  secondary_info?: string; // Additional information display type.
  format?: string; // Format for state display (timestamp sensors).
  action_name?: string; // Custom label for action button.
  state_color?: boolean; // Color icon based on state.
  tap_action?: ActionConfig; // Tap action config.
  hold_action?: ActionConfig; // Hold action config.
  double_tap_action?: ActionConfig; // Double tap action config.
};

/**
 * Represents configuration options for special row elements within an entities card.
 * @see [Special Rows Documentation](https://www.home-assistant.io/lovelace/entities/#special-row-elements)
 * Each special row (different by the `type`) will extend from this to add their own specific configuration fields.
 */
type SpecialRowConfig = {
  type: string; // The type of special row (e.g., "buttons", "divider", "section", etc.).
  // Additional fields depending on the type of the special row
};

// SpecialRowConfig is extended by each specific type of special row.
// Below, you can create specific types like AttributeRowConfig, ButtonRowConfig, etc.,
// which will have type fields specific to their respective configurations.

