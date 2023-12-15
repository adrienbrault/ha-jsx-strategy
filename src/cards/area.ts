
/**
 * Represents the configuration for an Area Card in Home Assistant.
 *
 * The area card lets you control and monitor an individual area by displaying
 * buttons for the entities in the area such as fan, light, switch, and motion sensor status.
 *
 * If a camera is added to the area, the option to show camera feed instead of the area picture is available.
 * 
 * @see [Area Card Documentation](https://www.home-assistant.io/lovelace/area/)
 * @example
 * ```yaml
 * type: area
 * area: bedroom
 * ```
 * @example
 * ```yaml
 * type: area
 * area: bedroom
 * navigation_path: my_bedroom
 * show_camera: true
 * theme: green
 * ```
 */
export type AreaCardConfig = {
  // ID of the area
  area: string;
  // Changes the area picture to a live feed of the camera set for the area (default: false)
  show_camera?: boolean;
  // If showing a camera, determines the view type (default: auto)
  camera_view?: 'auto' | 'live';
  // Forces the height of the image to be a ratio of the width
  aspect_ratio?: string;
  // Link to view
  navigation_path?: string;
  // Override the used theme for this card with any loaded theme
  theme?: string;
};

