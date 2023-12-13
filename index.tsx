export const elementToConfig = (type, props, ...children) => {
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
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vertical-stack": any;
      "horizontal-stack": any;
      "custom:bubble-card": any;
    }
  }
}
