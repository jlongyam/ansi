import { reset, textStyle, fg, fgBright, bg, bgBright } from './code.mjs';

const theme = {
  normal: {
    black: '#000',
    red: '#ef476f',
    green: '#06d6a0',
    yellow: '#ffd166',
    blue: '#118ab2',
    magenta: '#8338ec',
    cyan: '#00b4d8',
    white: '#fff'
  },
  bright: {
    black: 'rgb(85,85,85)',
    red: 'rgb(255,85,85)',
    green: 'rgb(85,255,85)',
    yellow: 'rgb(255,255,85)',
    blue: 'rgb(85,85,255)',
    magenta: 'rgb(255,85,255)',
    cyan: 'rgb(85, 255, 255)',
    white: 'rgb(255,255,255)'
  }
}
const css = {};

css[reset] = 'all: initial';
css[textStyle.bold] = 'font-weight: 700';
css[textStyle.dim] = 'opacity: .8';
css[textStyle.italic] = 'font-style: italic';
css[textStyle.underline] = 'text-decoration: italic';
css[textStyle.blink] = '';
css[textStyle.rapid] = '';
css[textStyle.inverse] = 'filter: invert(100%)';
css[textStyle.invisible] = 'visibility: hidden';
css[textStyle.strike] = 'text-decoration: line-through';

for(let i in fg) {
  css[fg[i]] = `color: ${theme.normal[i]}`;
  css[fgBright[i]] = `color: ${theme.bright[i]}`;
  css[bg[i]] = `background-color: ${theme.normal[i]}`;
  css[bgBright[i]] = `background-color: ${theme.bright[i]}`; 
}

export default css;
