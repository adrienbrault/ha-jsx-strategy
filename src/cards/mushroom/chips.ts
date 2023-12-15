
/**
 * A chips card allows you to put small information at the top of your dashboard.
 *
 * @example
 * type: custom:chips-card
 * alignment: center
 * chips:
 *   - type: custom:light-chip
 *     entity: light.bed_light
 *   - type: custom:weather-chip
 *     entity: weather.home
 */
export type ChipsCardConfig = {
  alignment?: 'end' | 'center' | 'justify';
  chips?: Chip[];
};

/**
 * Chip configuration definition which can be any of the listed chip types
 * (action, alarm control panel, back, conditional, entity, light, menu, spacer, template, weather).
 */
export type Chip =
  | ActionChip
  | AlarmControlPanelChip
  | BackChip
  | ConditionalChip
  | EntityChip
  | LightChip
  | MenuChip
  | SpacerChip
  | TemplateChip
  | WeatherChip;

/**
 * Action chip allows you to perform a Home Assistant action (navigate, call-service, etc...).
 */
export type ActionChip = {
  type: 'action';
  // ... add specific properties for ActionChip
};

/**
 * Alarm control panel chip is an entity chip that allows you to display the right icon with the right color for alarm control panels.
 */
export type AlarmControlPanelChip = {
  type: 'alarm-control-panel';
  // ... add specific properties for AlarmControlPanelChip
};

/**
 * A back chip allows you to perform a back action.
 */
export type BackChip = {
  type: 'back';
  // ... add specific properties for BackChip
};

/**
 * A conditional chip allows you to display another chip based on chip state.
 */
export type ConditionalChip = {
  type: 'conditional';
  // ... add specific properties for ConditionalChip
};

/**
 * An entity chip allows you to display entity state.
 */
export type EntityChip = {
  type: 'entity';
  // ... add specific properties for EntityChip
};

/**
 * A light chip allows you to display a light entity.
 */
export type LightChip = {
  type: 'light';
  // ... add specific properties for LightChip
};

/**
 * A menu chip allows you to open the side drawer in mobile view.
 */
export type MenuChip = {
  type: 'menu';
  // ... add specific properties for MenuChip
};

/**
 * A spacer chip allows you to space chips apart.
 */
export type SpacerChip = {
  type: 'spacer';
  // ... add specific properties for SpacerChip
};

/**
 * A template chip allows you to build a custom chip using templates.
 */
export type TemplateChip = {
  type: 'template';
  // ... add specific properties for TemplateChip
};

/**
 * A weather chip allows you to display the weather.
 *
 * @example
 * type: custom:weather-chip
 * entity: weather.home
 */
export type WeatherChip = {
  type: 'weather';
  // ... add specific properties for WeatherChip
};

