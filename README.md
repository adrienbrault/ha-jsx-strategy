# ha-react-dashboard

Goal: Use https://developers.home-assistant.io/docs/frontend/custom-ui/custom-strategy/ to configure a dashboard, not with yaml, but JSX/TSX.

In my case, I want to do something like https://github.com/AalianKhan/mushroom-strategy, but with React and my own config/cards.

## Installation

[First, install bun](https://bun.sh).

Then:
```
git clone https://github.com/adrienbrault/jsx-strategy.git www/jsx-strategy
```

Customize `www/jsx-strategy/src/index.tsx` to your needs.
Use VSCode for autocompletion and type checking!

Every time you edit this file, make sure to run:
```
bun build www/jsx-strategy/src/index.tsx > www/jsx-strategy/index.js
```

[Add a dashboard resource](https://my.home-assistant.io/redirect/lovelace_resources/) with url `/local/jsx-strategy/index.js` as a `JavaScript Module`.

## Development

To install dependencies:

```bash
bun install
```

To run tests:

```bash
bun test
```
