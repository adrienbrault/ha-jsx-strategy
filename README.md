# ha-react-dashboard

[Home Assistant Custom Strategies](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-strategy/)
enable you to build your own dashboards using javascript.

This project is a template to build a dashboard using JSX/TSX and functional components.

VSCode will provide you with intellisense and type checking thanks to card types.

![CleanShot 2023-12-15 at 03 07 53@2x](https://github.com/adrienbrault/jsx-strategy/assets/611271/1f67f5b3-7d87-40c8-95b1-d1f9ceb35e5e)
![CleanShot 2023-12-15 at 03 09 08@2x](https://github.com/adrienbrault/jsx-strategy/assets/611271/de8a4d78-6584-4aec-8c9e-00c2bb12088b)

## Installation

[First, install bun](https://bun.sh).

Then:
```
git clone https://github.com/adrienbrault/jsx-strategy.git www/jsx-strategy
```

Customize [www/jsx-strategy/src/index.tsx](/src/index.tsx) to your needs.

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
