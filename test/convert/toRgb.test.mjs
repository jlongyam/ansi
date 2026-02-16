import { hexToRgb } from "../../src/convert/toRgb.mjs";

console.log(
  hexToRgb("#0033ff"),
  '=== { r: 0, g: 51, b: 255 }'
);

console.log(
  hexToRgb("#03F"),
  '=== { r: 0, g: 51, b: 255 }'
);
