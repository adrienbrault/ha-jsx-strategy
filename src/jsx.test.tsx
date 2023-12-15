import { expect, test } from "bun:test";
import { configToJsx, elementToConfig } from "./jsx";
import { parse, stringify } from "yaml";
import * as prettier from "prettier";

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
      <light entity="light.bar"></light>
      <custom-mushroom-title-card
        subtitle_tap_action={{ action: "none", event: "" }}
      ></custom-mushroom-title-card>
    </horizontal-stack>
  </vertical-stack>
);

test("HomeView to yaml", () => {
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
      - type: light
        entity: light.bar
      - type: custom:mushroom-title-card
        subtitle_tap_action:
          action: none
          event: ""
`
  );
});

test("yaml to jsx", async () => {
  expect(
    await prettier.format(
      configToJsx(
        parse(
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
  - type: entity
    entity: cover.kitchen_window
  - type: entity
    entity: light.bedroom
    attribute: brightness
    unit: "%"
  - type: entity
    entity: vacuum.downstairs
    name: Vacuum
    icon: "mdi:battery"
    attribute: battery_level
    unit: "%"
`
        )
      ),
      {
        parser: "babel",
      }
    )
  ).toEqual(
    `<vertical-stack>
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
  <entity entity="cover.kitchen_window" />
  <entity entity="light.bedroom" attribute="brightness" unit="%" />
  <entity
    entity="vacuum.downstairs"
    name="Vacuum"
    icon="mdi:battery"
    attribute="battery_level"
    unit="%"
  />
</vertical-stack>;
`
  );
});
