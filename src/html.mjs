import { FancyAnsi } from 'fancy-ansi';

const fancy = new FancyAnsi();
const html = str => fancy.toHtml(str);

export default html