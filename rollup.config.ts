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

const fileFormat = 'es';
const entryFileName = 'app';
const outputFileName = 'index';

const declarationFile = `${outputFileName}.d.ts`;
const entryFile = `${entryFileName}.ts`;
const outputFile = `${outputFileName}.js`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${entryFile}`,
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
            replacement: resolve(fontFolder),
          },
          {
            find: '#regex',
            replacement: resolve(regexFolder),
          },
          {
            find: '#shared',
            replacement: resolve(sharedFolder),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
