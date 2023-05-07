/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const esbuild = require('esbuild');
const { dtsPlugin } = require('esbuild-plugin-d.ts');

const option = {
    bundle: true,
    color: true,
    logLevel: 'info',
    sourcemap: true,
    entryPoints: ['./src/index.ts'],
    minify: true,
};

(async function () {
    await esbuild
        .build({
            format: 'esm',
            outdir: 'lib',
            splitting: true,
            plugins: [dtsPlugin()],
            ...option,
        })
        .catch(() => process.exit(1));

    await esbuild
        .build({
            format: 'cjs',
            outfile: './lib/cjs.js',
            ...option,
        })
        .catch(() => process.exit(1));
})();
