
/**
 * Represents the configuration for the Picture Elements card in Home Assistant.
 *
 * @see [Picture Elements Card](https://www.home-assistant.io/lovelace/picture-elements/)
 * @example
 * ```
 * type: picture-elements
 * image: /local/floorplan.png
 * elements:
 *   - type: state-icon
 *     entity: light.ceiling_lights
 *     style:
 *       top: 47%
 *       left: 42%
 * ```
 */
export type PictureElementsCardConfig = {
  image: string;
  camera_image?: string;
  camera_view?: 'live' | 'auto';
  elements: PictureElementConfig[];
  title?: string;
  state_filter?: Record<string, string>;
  theme?: string;
  dark_mode_image?: string;
  dark_mode_filter?: string;
};

/**
 * Union type for all possible Picture Elements.
 */
export type PictureElementConfig = StateBadgeElementConfig | StateIconElementConfig | StateLabelElementConfig | ServiceCallButtonElementConfig | IconElementConfig | ImageElementConfig | ConditionalElementConfig | CustomElementConfig;

/**
 * Represents the configuration for a state-badge element in the Picture Elements card.
 *
 * @example
 * ```
 * type: state-badge
 * entity: sensor.temperature
 * style:
 *   top: 40%
 *   left: 55%
 * ```
 */
export type StateBadgeElementConfig = {
  type: 'state-badge';
  entity: string;
  style: CssStyleConfig;
  title?: string | null;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Represents the configuration for a state-icon element in the Picture Elements card.
 *
 * @example
 * ```
 * type: state-icon
 * entity: light.kitchen
 * style:
 *   top: 20%
 *   left: 85%
 * ```
 */
export type StateIconElementConfig = {
  type: 'state-icon';
  entity: string;
  icon?: string;
  title?: string | null;
  state_color?: boolean;
  style: CssStyleConfig;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Represents the configuration for a state-label element in the Picture Elements card.
 *
 * @example
 * ```
 * type: state-label
 * entity: sensor.temperature
 * style:
 *   top: 40%
 *   left: 55%
 * ```
 */
export type StateLabelElementConfig = {
  type: 'state-label';
  entity: string;
  attribute?: string;
  prefix?: string;
  suffix?: string;
  title?: string | null;
  style: CssStyleConfig;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Represents the configuration for a service-call-button element in the Picture Elements card.
 *
 * @example
 * ```
 * type: service-button
 * title: 'Turn Off'
 * style:
 *   bottom: 5%
 *   right: 5%
 * service: light.turn_off
 * service_data:
 *   entity_id: light.living_room
 * ```
 */
export type ServiceCallButtonElementConfig = {
  type: 'service-button';
  title: string;
  service: string;
  service_data?: Record<string, any>;
  style: CssStyleConfig;
};

/**
 * Represents the configuration for an icon element in the Picture Elements card.
 *
 * @example
 * ```
 * type: icon
 * icon: mdi:home
 * style:
 *   top: 10%
 *   left: 10%
 * ```
 */
export type IconElementConfig = {
  type: 'icon';
  icon: string;
  title?: string | null;
  entity?: string;
  style: CssStyleConfig;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
};

/**
 * Represents the configuration for an image element in the Picture Elements card.
 *
 * @example
 * ```
 * type: image
 * image: /local/living_room.png
 * style:
 *   top: 20%
 *   left: 85%
 * ```
 */
export type ImageElementConfig = {
  type: 'image';
  entity?: string;
  title?: string | null;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  image?: string;
  camera_image?: string;
  camera_view?: 'live' | 'auto';
  state_image?: Record<string, string>;
  filter?: string;
  state_filter?: Record<string, string>;
  aspect_ratio?: string;
  style: CssStyleConfig;
};

/**
 * Represents the configuration for a conditional element in the Picture Elements card.
 *
 * @example
 * ```
 * type: conditional
 * conditions:
 *   - entity: device_tracker.person1
 *     state: 'home'
 * elements:
 *   - type: state-icon
 *     entity: light.kitchen
 *     style:
 *       top: 50%
 *       left: 25%
 * ```
 */
export type ConditionalElementConfig = {
  type: 'conditional';
  conditions: ConditionConfig[];
  elements: PictureElementConfig[];
};

/**
 * Represents the configuration for a custom element in the Picture Elements card.
 *
 * @example
 * ```
 * type: custom:my-custom-element
 * style:
 *   bottom: 50%
 *   right: 50%
 * ```
 */
export type CustomElementConfig = {
  type: string; // Should start with 'custom:'
  style: CssStyleConfig;
};

/**
 * Defines the different types of actions a Picture Elements card can use.
 *
 * @see [Action Documentation](https://www.home-assistant.io/lovelace/actions/)
 */
export type ActionConfig = {
  action: 'toggle' | 'call-service' | 'more-info' | 'navigate' | 'url' | 'none';
  service?: string;
  service_data?: Record<string, any>;
  navigation_path?: string;
  url_path?: string;
  confirmation?: ConfirmationConfig;
};

/**
 * Represents a condition configuration for conditional elements.
 */
export type ConditionConfig = {
  entity: string;
  state?: string;
  state_not?: string;
};

/**
 * Represents a confirmation configuration used within actions.
 */
export type ConfirmationConfig = {
  text: string;
  exemptions?: ExemptionConfig[];
};

/**
 * Represents an exemption configuration used within confirmations.
 */
export type ExemptionConfig = {
  user: string;
};

/**
 * Represents a CSS style configuration for positioning and styling elements.
 */
export type CssStyleConfig = {
  [cssProperty: string]: string | number;
};

