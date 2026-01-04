const fs = require('fs');
const path = require('path');

const cjsPath = path.join(__dirname, '../dist/cjs');
const esmPath = path.join(__dirname, '../dist/esm');

if (fs.existsSync(cjsPath)) {
    fs.writeFileSync(path.join(cjsPath, 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2));
}

if (fs.existsSync(esmPath)) {
    fs.writeFileSync(path.join(esmPath, 'package.json'), JSON.stringify({ type: 'module' }, null, 2));
}
