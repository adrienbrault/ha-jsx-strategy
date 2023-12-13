import { expect, test } from "bun:test";
import { elementToConfig } from ".";
import { stringify } from "yaml";

const HomeView = () => (
  <vertical-stack>
    <custom:bubble-card card_type="pop-up" hash="#bureau" name="Bureau" />
    <custom:bubble-card
      card_type="separator"
      name="Lights"
      icon="mdi:lightbulb"
    />
    <horizontal-stack>
      <custom:bubble-card
        card_type="button"
        entity="light.bureau_plafond"
        button_type="switch"
        icon="phu:ceiling-round"
        show_state="true"
      />
    </horizontal-stack>
  </vertical-stack>
);

test("HomeView", () => {
  expect(stringify(<HomeView />)).toEqual(
    `type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: "#bureau"
    name: Bureau
  - type: custom:bubble-card
    card_type: separator
    name: Lights
    icon: mdi:lightbulb
  - type: horizontal-stack
    cards:
      - type: custom:bubble-card
        card_type: button
        entity: light.bureau_plafond
        button_type: switch
        icon: phu:ceiling-round
        show_state: "true"
`
  );
});
