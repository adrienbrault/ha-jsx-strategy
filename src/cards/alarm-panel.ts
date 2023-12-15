
/**
 * Represents the configuration for the alarm panel card in Home Assistant.
 * This card allows you to arm and disarm your alarm control panel integrations.
 *
 * @example
 * ```
 * type: alarm-panel
 * name: House Alarm
 * entity: alarm_control_panel.alarm
 * ```
 *
 * @example
 * ```
 * type: alarm-panel
 * name: House Alarm
 * entity: alarm_control_panel.alarm
 * states:
 *   - arm_home
 *   - arm_away
 *   - arm_night
 *   - armed_custom_bypass
 * ```
 *
 * ![Screenshot of the alarm panel card](https://www.home-assistant.io/images/lovelace/lovelace_alarm_panel_card.png)
 * Learn more about the alarm panel card on the [Home Assistant Documentation](https://www.home-assistant.io/lovelace/alarm-panel/)
 */
export type AlarmPanelCardConfig = {
  /**
   * The `entity` field is the entity ID of an alarm control panel domain.
   */
  entity: string;

  /**
   * The `name` field is used to overwrite the friendly name displayed on the card.
   * If not provided, it defaults to the current state of the alarm entity.
   */
  name?: string;

  /**
   * The `states` field controls which states are available for controlling the alarm.
   * It can include some or all of the following: arm_home, arm_away, arm_night,
   * arm_custom_bypass. If not specified, defaults to arm_home and arm_away.
   */
  states?: Array<'arm_home' | 'arm_away' | 'arm_night' | 'arm_custom_bypass'>;

  /**
   * The `theme` field can override the used theme for this card with any loaded theme.
   */
  theme?: string;
};

