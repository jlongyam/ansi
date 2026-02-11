import { color } from '../../src/color.mjs';
import { find } from '../../src/regex.mjs';

console.log(find(`Hello ${color.red('World')}, how are ${color.green('you')}`));
