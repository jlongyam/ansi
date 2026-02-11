import fs from 'node:fs';

function replace_mjs(path, name) {
  let file = fs.readFileSync(path, 'utf-8');
  let rgx = new RegExp(`\\./${name}\\.mjs`, 'g');
  let after = file.replace( rgx, `./${name}.js`)
  fs.writeFileSync( path, after);  
}

replace_mjs('./dist/cjs/style.js', 'code');
replace_mjs('./dist/cjs/color.js', 'code');
replace_mjs('./dist/cjs/ansi.js', 'code');