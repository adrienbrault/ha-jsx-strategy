
/**
 * The CalendarCardConfig defines the configuration options for the Calendar Card, which displays
 * your calendar entities in different views: month, day, and list (7 days).
 *
 * @see {@link https://www.home-assistant.io/lovelace/calendar/ Calendar Card documentation}
 *
 * @example
 * ```
 * type: calendar
 * entities:
 *   - calendar.calendar_1
 *   - calendar.calendar_2
 * ```
 */
export type CalendarCardConfig = {
  /** The title of the card. */
  title?: string;
  /**
   * The view that will show first when the card is loaded onto the page.
   * Options are `dayGridMonth`, `dayGridDay`, and `listWeek`.
   * `listWeek` shows the next 7 days, not a calendar week.
   */
  initial_view?: 'dayGridMonth' | 'dayGridDay' | 'listWeek';
  /** A list of calendar entities that will be displayed in the card. */
  entities: string[];
  /**
   * Override the used theme for this card with any loaded theme.
   * For more information about themes, see {@link https://www.home-assistant.io/integrations/frontend/#defining-themes Frontend documentation on themes}.
   */
  theme?: string;
};

