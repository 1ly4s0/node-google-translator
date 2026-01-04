import { translate } from '../dist/esm/index.js';

async function run() {
    try {
        console.log('Running ESM test...');
        const res = await translate('Hello world', { to: 'fr' });
        console.log('ESM Test Result:', res.text);
        if (res.text.toLowerCase().includes('bonjour')) {
            console.log('ESM Test Passed');
        } else {
            console.warn('ESM Test Warning: Unexpected translation:', res.text);
        }
    } catch (e) {
        console.error('ESM Test Error:', e);
    }
}

run();
