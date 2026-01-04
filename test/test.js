const { translate } = require('../dist/cjs/index.js');

async function run() {
    try {
        console.log('Running CJS test...');
        const res = await translate('Hello world', { to: 'es' });
        console.log('CJS Test Result:', res.text);
        if (res.text.toLowerCase() === 'hola mundo') {
            console.log('CJS Test Passed');
        } else {
            console.warn('CJS Test Warning: Unexpected translation:', res.text);
        }
    } catch (e) {
        console.error('CJS Test Error:', e);
    }
}

run();
