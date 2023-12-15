
/**
 * The media control card is used to display media player entities on an interface with easy to use controls.
 * 
 * It provides a GUI for media playback, volume adjustment, and other controls for media_player entities.
 * 
 * ![Screenshot of the media player control card](https://www.home-assistant.io/images/lovelace/lovelace_media_control_card.png)
 * 
 * @example
 * ```yaml
 * type: media-control
 * entity: media_player.lounge_room
 * ```
 * 
 * For more details, see [Media Control Card Documentation](https://www.home-assistant.io/lovelace/media-control/).
 */
export type MediaControlCardConfig = {
  /** Entity ID of media_player domain. */
  entity: string;
  /** Overwrites friendly name (Optional, default: Name of entity). */
  name?: string;
  /** Override the used theme for this card with any loaded theme (Optional). */
  theme?: string;
}

