import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' with { type: 'json' }
import { fileURLToPath } from 'node:url';

//-- auto-generate --//
const year = new Date().getFullYear();
const banner = `
  /*!
  * ${pkg.name} - ${pkg.description}
  * Version ${pkg.version}
  * Author: ${pkg.author}
  * ${pkg.homepage}/${pkg.repository.directory}
  * MIT License - ${year}
  */
  `
//-- manual-config --//
const strict = false;
const plugins = [
  commonjs(),
  resolve(),
  buble(),
  babel({
    babelHelpers: 'bundled',
    // presets: [["@babel/preset-env", {
    //   targets: "> 0.25%, last 2 versions, Firefox ESR, not dead, node 5.12.0, chrome 50"
    // }]]
  })
];
export default (arg) => {
  let minify = arg['config-minify'] ? true : false;
  // let mod = pkg.type === 'module' ? 'js' : 'mjs'
  let mod = "mjs"
  //-- manual-config --//
  const path_in = './src';
  const path_out = `./dist`;
  const format = ['cjs','iife'];
  // lib { <file_name>: <export_name> }
  const lib = {
    icon: 'icon',
    style: "style",
    code: "code",
    color: 'color',
    css: 'css',
    regex: 'regex',
    index: 'ansi'
  };
  // == config special === //
  let url_code = new URL(`${path_in}/code.${mod}`, import.meta.url);
  let global_code = fileURLToPath(url_code);
  let globals = {
    [global_code]: 'code'
  };
  let external = [
    `./code.${mod}`
  ];
  const terser_ = [
    terser({
      compress: {
        dead_code: true,
        unused: true,
        passes: 2,
        drop_console: false,
        ecma: 2015
      },
      mangle: minify ? true : false,
      format: {
        comments: false,
        beautify: minify ? false : true,
        indent_level: minify ? 0 : 2
      }
    })
  ]
  //-- auto-generate --//
  let output = {};
  let lib_keys = Object.keys(lib);
  for (let i = 0; i < lib_keys.length; i++) { output[lib_keys[i]] = [] };
  for (let i = 0; i < format.length; i++) {
    let output_keys = Object.keys(output);
    for(let a = 0; a < output_keys.length; a++ ) {
      output[output_keys[a]].push({
        format: format[i],
        name: lib[output_keys[a]],
        globals: globals,
        banner: banner,
        strict: strict,
        file: minify
          ? `${path_out}/${format[i]}/${lib[output_keys[a]]}.min.js`
          : `${path_out}/${format[i]}/${lib[output_keys[a]]}.js`,
        plugins: terser_
      })
    }
  }
  let return_ = [];
  for (let i = 0; i < lib_keys.length; i++) {
    return_.push({
      input: `${path_in}/${lib_keys[i]}.${mod}`,
      output: output[lib_keys[i]],
      plugins: plugins,
      external: external
    })
  }
  return return_;
}
