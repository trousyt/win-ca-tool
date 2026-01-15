#!/usr/bin/env node
const ca = require('win-ca/api');

const saveDir = process.argv[2];
if (!saveDir) {
    console.error('Usage: win-ca-tool <directory>');
    process.exit(1);
}

let rootCAs = [];

console.log('Starting to export certificates...');

ca({
    format: ca.der2.pem,
    save: saveDir,
    ondata: rootCAs,
    onend: () => console.log('Done exporting certificates.')
});

console.log('Saving to disk...');



