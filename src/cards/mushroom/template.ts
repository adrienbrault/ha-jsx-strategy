
/**
 * A template card allows you to build a custom card. You can use entity as a variable for the entity set on the card e.g. `{{ states(entity) }}`.
 * @description A template card allows for customization using Home Assistant templating language. Many fields can be templated.
 * @example
 * type: 'custom:template-card'
 * icon: mdi:temperature-celsius
 * icon_color: >
 *   {% if states(config.entity)|float > 22 %}
 *     red
 *   {% else %}
 *     green
 *   {% endif %}
 * primary: "Temperature is {{ states(config.entity) }}"
 * 
 * @see [Template](https://www.home-assistant.io/lovelace/template/)
 */
export type TemplateCardConfig = {
  icon?: string;
  icon_color?: string;
  primary?: string;
  secondary?: string;
  badge_icon?: string;
  badge_color?: string;
  picture?: string;
  multiline_secondary?: boolean;
  layout?: 'vertical' | 'horizontal' | 'default';
  fill_container?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  entity_id?: string | string[];
  double_tap_action?: ActionConfig;
};

/**
 * ActionConfig models the type for various user interactions, such as tap, hold, and double_tap.
 * @example
 * action: 'toggle'
 * 
 * @example
 * action: 'call-service'
 * service: 'media_player.toggle'
 * service_data:
 *   entity_id: 'media_player.living_room'
 */
export type ActionConfig = {
  action: string;
  service?: string;
  service_data?: { [key: string]: any };
  navigation_path?: string;
  url?: string;
  confirmation?: {
    text?: string;
    exemptions?: { user: string }[];
  };
};

