import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const fontFolder = `${sourceFolder}/regex/font`;
const regexFolder = `${sourceFolder}/regex`;
const sharedFolder = `${sourceFolder}/shared`;

const fileName = 'index';
const indexFile = `${fileName}.ts`;
const declarationFile = `${fileName}.d.ts`;
const outputFile = `${fileName}.js`;

const fileFormat = 'es';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#font',
            replacement: resolve(`${fontFolder}/${indexFile}`),
          },
          {
            find: '#regex',
            replacement: resolve(`${regexFolder}/${indexFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sharedFolder}/${indexFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
