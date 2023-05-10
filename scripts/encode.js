/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { readFileSync, writeFileSync } = require('fs');

(function () {
    const WORK_DIRECTORY = process.cwd();

    const readPathFile = `${WORK_DIRECTORY}/public/index.html`;
    const encoded = readFileSync(readPathFile, { encoding: 'base64' });

    const writePathFile = `${WORK_DIRECTORY}/src/constants/index.ts`;

    const data = `export const ENCODED_TEMPLATE = '${encoded}';`;

    writeFileSync(writePathFile, data, { encoding: 'utf-8' });
})();
