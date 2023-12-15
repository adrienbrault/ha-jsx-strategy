# ha-react-dashboard

[Home Assistant Custom Strategies](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-strategy/)
enable you to build your own dashboards using javascript.

This project is a template to build a dashboard using JSX/TSX. TLDR: Make loops, conditionals and share configuration using functions.

VSCode will provide you with intellisense and type checking using [a library of card types](#documented-cards).

![CleanShot 2023-12-15 at 03 07 53@2x](https://github.com/adrienbrault/ha-jsx-strategy/assets/611271/1f67f5b3-7d87-40c8-95b1-d1f9ceb35e5e)
![CleanShot 2023-12-15 at 03 09 08@2x](https://github.com/adrienbrault/ha-jsx-strategy/assets/611271/de8a4d78-6584-4aec-8c9e-00c2bb12088b)

## Installation

[First, install bun](https://bun.sh).

Then clone the repository in your `www` folder:
```
git clone https://github.com/adrienbrault/ha-jsx-strategy.git www/jsx-strategy
cd www/jsx-strategy
```

Install dependencies:
```bash
bun install
```

Back in Home Assistant, [add a dashboard resource](https://my.home-assistant.io/redirect/lovelace_resources/) with url `/local/jsx-strategy/dist/strategy.js` as a `JavaScript Module`.

[Create a new dashboard from scratch](https://my.home-assistant.io/redirect/lovelace_dashboards/) > open the dashboard > edit dashboard > raw configuration editor, and use the following YAML configuration:
```yaml
strategy:
  type: custom:jsx
```

At this point the default dashboard should show areas and their lights.

Finally, customize [www/jsx-strategy/src/strategy.tsx](/src/strategy.tsx) to your needs.

Every time you edit this file, make sure to run one of the following commands:
```
bun run build
bun run build-watch
```

## Migration

A command is available to convert YAML to JSX in case you want to:

- convert an existing dashboard
- convert an example from documentation
- convert a card created from the UI editor

Run:

```bash
cat myconfiguration.yaml | bun run src/convert.ts
```

Or:

```bash
bun run src/convert.ts "
- type: custom:bubble-card
  card_type: button
  entity: light.bureau_plafond
  button_type: switch
  icon: phu:ceiling-round
  show_state: true"
```

Sample output:

```jsx
<custom-bubble-card
  card_type="button"
  entity="light.bureau_plafond"
  button_type="switch"
  icon="phu:ceiling-round"
  show_state={true}
/>;
```

## Development

To run tests:

```bash
bun test
```

## Documented cards

Note that you can also use any other card, the logic to convert a tag to its yaml configuration is as follow:

- `<foo-bar />` will turn into `type: foo-bar`
- `<custom-foo-bar />` will turn into `type: custom:foo-bar-card`

This is the list of cards that have types/documentation in this project:
- [`<alarm-panel />`](src/cards/alarm-panel.ts) [Source](https://www.home-assistant.io/dashboards/alarm-panel)
- [`<area />`](src/cards/area.ts) [Source](https://www.home-assistant.io/dashboards/area)
- [`<button />`](src/cards/button.ts) [Source](https://www.home-assistant.io/dashboards/button)
- [`<calendar />`](src/cards/calendar.ts) [Source](https://www.home-assistant.io/dashboards/calendar)
- [`<conditional />`](src/cards/conditional.ts) [Source](https://www.home-assistant.io/dashboards/conditional)
- [`<energy />`](src/cards/energy.ts) [Source](https://www.home-assistant.io/dashboards/energy)
- [`<entities />`](src/cards/entities.ts) [Source](https://www.home-assistant.io/dashboards/entities)
- [`<entity />`](src/cards/entity.ts) [Source](https://www.home-assistant.io/dashboards/entity)
- [`<entity-filter />`](src/cards/entity-filter.ts) [Source](https://www.home-assistant.io/dashboards/entity-filter)
- [`<gauge />`](src/cards/gauge.ts) [Source](https://www.home-assistant.io/dashboards/gauge)
- [`<glance />`](src/cards/glance.ts) [Source](https://www.home-assistant.io/dashboards/glance)
- [`<grid />`](src/cards/grid.ts) [Source](https://www.home-assistant.io/dashboards/grid)
- [`<history-graph />`](src/cards/history-graph.ts) [Source](https://www.home-assistant.io/dashboards/history-graph)
- [`<horizontal-stack />`](src/cards/horizontal-stack.ts) [Source](https://www.home-assistant.io/dashboards/horizontal-stack)
- [`<humidifier />`](src/cards/humidifier.ts) [Source](https://www.home-assistant.io/dashboards/humidifier)
- [`<iframe />`](src/cards/iframe.ts) [Source](https://www.home-assistant.io/dashboards/iframe)
- [`<light />`](src/cards/light.ts) [Source](https://www.home-assistant.io/dashboards/light)
- [`<logbook />`](src/cards/logbook.ts) [Source](https://www.home-assistant.io/dashboards/logbook)
- [`<map />`](src/cards/map.ts) [Source](https://www.home-assistant.io/dashboards/map)
- [`<markdown />`](src/cards/markdown.ts) [Source](https://www.home-assistant.io/dashboards/markdown)
- [`<media-control />`](src/cards/media-control.ts) [Source](https://www.home-assistant.io/dashboards/media_control)
- [`<picture />`](src/cards/picture.ts) [Source](https://www.home-assistant.io/dashboards/picture)
- [`<picture-elements />`](src/cards/picture-elements.ts) [Source](https://www.home-assistant.io/dashboards/picture-elements)
- [`<picture-entity />`](src/cards/picture-entity.ts) [Source](https://www.home-assistant.io/dashboards/picture-entity)
- [`<picture-glance />`](src/cards/picture-glance.ts) [Source](https://www.home-assistant.io/dashboards/picture-glance)
- [`<plant-status />`](src/cards/plant-status.ts) [Source](https://www.home-assistant.io/dashboards/plant-status)
- [`<sensor />`](src/cards/sensor.ts) [Source](https://www.home-assistant.io/dashboards/sensor)
- [`<shopping-list />`](src/cards/shopping-list.ts) [Source](https://www.home-assistant.io/dashboards/shopping-list)
- [`<statistic />`](src/cards/statistic.ts) [Source](https://www.home-assistant.io/dashboards/statistic)
- [`<statistics-graph />`](src/cards/statistics-graph.ts) [Source](https://www.home-assistant.io/dashboards/graph)
- [`<thermostat />`](src/cards/thermostat.ts) [Source](https://www.home-assistant.io/dashboards/thermostat)
- [`<tile />`](src/cards/tile.ts) [Source](https://www.home-assistant.io/dashboards/tile)
- [`<vertical-stack />`](src/cards/vertical-stack.ts) [Source](https://www.home-assistant.io/dashboards/vertical-stack)
- [`<weather-forecast />`](src/cards/weather-forecast.ts) [Source](https://www.home-assistant.io/dashboards/weather-forecast)

### Mushroom cards

- [`<custom-mushroom-alarm-control-panel />`](src/cards/mushroom/alarm-control-panel.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/alarm-control-panel.md)
- [`<custom-mushroom-chips />`](src/cards/mushroom/chips.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/chips.md)
- [`<custom-mushroom-climate />`](src/cards/mushroom/climate.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/climate.md)
- [`<custom-mushroom-cover />`](src/cards/mushroom/cover.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/cover.md)
- [`<custom-mushroom-entity />`](src/cards/mushroom/entity.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/entity.md)
- [`<custom-mushroom-fan />`](src/cards/mushroom/fan.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/fan.md)
- [`<custom-mushroom-humidifier />`](src/cards/mushroom/humidifier.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/humidifier.md)
- [`<custom-mushroom-light />`](src/cards/mushroom/light.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/light.md)
- [`<custom-mushroom-lock />`](src/cards/mushroom/lock.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/lock.md)
- [`<custom-mushroom-media-player />`](src/cards/mushroom/media-player.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/media-player.md)
- [`<custom-mushroom-number />`](src/cards/mushroom/number.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/number.md)
- [`<custom-mushroom-person />`](src/cards/mushroom/person.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/person.md)
- [`<custom-mushroom-select />`](src/cards/mushroom/select.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/select.md)
- [`<custom-mushroom-template />`](src/cards/mushroom/template.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/template.md)
- [`<custom-mushroom-title />`](src/cards/mushroom/title.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/title.md)
- [`<custom-mushroom-update />`](src/cards/mushroom/update.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/update.md)
- [`<custom-mushroom-vacuum />`](src/cards/mushroom/vacuum.ts) [Source](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/vacuum.md)
