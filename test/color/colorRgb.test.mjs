import { color } from "../../dist/ansi.mjs";

console.log(
  color.fgRGB([255, 0, 0], 'red') + ' ' +
  color.fgRGB([0, 255, 0], 'green') + ' ' +
  color.fgRGB([0, 0, 255], 'blue')
);
