import { parse } from "yaml";
import { configToJsx } from "./jsx";
import { format } from "prettier";

let input: string = "";
if (undefined === process.stdin.isTTY) {
  for await (const line of console) {
    input += `${line}\n`;
  }
}

if (input.length === 0) {
  input = process.argv[2];
}

let parsedInput: any;
try {
  parsedInput = JSON.parse(input);
} catch (error) {
  parsedInput = parse(input);
}

const removeEmpty = (object): any => {
  if (Array.isArray(object)) {
    return object.map(removeEmpty);
  }
  if (typeof object === "object" && !("type" in object)) {
    return (object.views || object.cards || []).map(removeEmpty) || object;
  }

  return object;
};

parsedInput = removeEmpty(parsedInput);

if (Array.isArray(parsedInput)) {
  parsedInput = [].concat.apply([], parsedInput);
}
if (Array.isArray(parsedInput) && parsedInput.length === 1) {
  parsedInput = parsedInput[0];
}

let tree = "";
if (Array.isArray(parsedInput)) {
  tree = `<cards>${parsedInput.map(configToJsx).join("\n")}</cards>`;
} else {
  tree = configToJsx(parsedInput);
}

process.stdout.write(await format(tree, { parser: "babel" }));
