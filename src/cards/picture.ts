
/**
 * Configuration for the picture card which allows setting an image to use
 * for navigation or calling a service in the Home Assistant interface.
 * 
 * For more details: [Picture Card](https://www.home-assistant.io/lovelace/picture/)
 * 
 * @example
 * ```
 * // Navigate to another view
 * {
 *   image: "/local/home.jpg",
 *   tap_action: {
 *     action: "navigate",
 *     navigation_path: "/lovelace/home"
 *   }
 * }
 * ```
 * 
 * @example
 * ```
 * // Toggle entity using a service
 * {
 *   image: "/local/light.png",
 *   tap_action: {
 *     action: "call-service",
 *     service: "light.toggle",
 *     data: {
 *       entity_id: "light.ceiling_lights"
 *     }
 *   }
 * }
 * ```
 */
export type PictureCardConfig = {
  /** The URL of an image. */
  image: string;

  /** Alternative text for the image for accessibility purposes. */
  alt_text?: string;

  /** Override the card theme. */
  theme?: string;

  /** Action taken on card tap. */
  tap_action?: ActionConfig;

  /** Action taken on card tap and hold. */
  hold_action?: ActionConfig;
  
  /** Action taken on card double tap. */
  double_tap_action?: ActionConfig;
};

// Helper type for actions on tap, hold, and double-tap
type ActionConfig = {
  action: string;
  navigation_path?: string;
  service?: string;
  service_data?: {
    [key: string]: any;
  };
};

