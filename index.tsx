export function elementToConfig(type, props, ...children) {
  let card = {};
  if (typeof type === "function") {
    card = type();
  }
  if (typeof type === "string") {
    card = { type };
  }

  if (props && Object.keys(props).length > 0) {
    card = {
      ...card,
      ...props,
    };
  }

  if (children.length > 0) {
    card = {
      ...card,
      cards: children,
    };
  }

  return card;
}

export function configToJsx(config: { [key: string]: any }) {
  const children = (config.cards || []).map(configToJsx).join("");
  const props = Object.entries(config)
    .filter(([key]) => !["cards", "type"].includes(key))
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  if (children.length === 0) {
    return `<${config.type} ${props}/>`;
  }

  return `<${config.type} ${props}>${children}</${config.type}>`;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vertical-stack": any;
      "horizontal-stack": any;
      "custom:bubble-card": any;
    }
  }
}
