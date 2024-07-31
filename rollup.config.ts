import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const fileName = 'index';
const indexFile = `${fileName}.ts`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#font',
            replacement: `${sourceFolder}/regex/font/${indexFile}`,
          },
          {
            find: '#regex',
            replacement: `${sourceFolder}/regex/${indexFile}`,
          },
          {
            find: '#shared',
            replacement: `${sourceFolder}/shared/${indexFile}`,
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: `${fileName}.d.ts`,
    },
  },
]);
