import { describe, expect, test as spec } from 'bun:test';

import { FONT_FILE_NAME_REGEX } from '#src/index.ts';

const validTestCases = [
  'Roboto-Bold.otf',
  'OpenSans-Light.ttf',
  'Montserrat-ExtraBold.woff',
  'Lato-Regular.woff2',
  'Roboto-BoldItalic.otf',
  'OpenSans-LightVariable.ttf',
  'Montserrat-ExtraBoldItalicVariable.woff',
  'Lato-RegularVariable.woff2',
];

const invalidTestCases = [
  'Roboto-Bold',
  'OpenSans-Light.pdf',
  'Montserrat-ExtraBoldItalic',
  'Lato-RegularVariable',
  'Roboto-Bold.otf.ttf',
  'OpenSans-Light.ttf.woff',
  'Montserrat-ExtraBoldItalicVariable',
  'Lato-RegularVariable.woff2.ttf',
  'Roboto-Bold.otf ',
  ' OpenSans-Light.ttf',
];

describe('FONT_FILE_NAME_REGEX', () => {
  validTestCases.forEach((testCase) => {
    spec(`should match valid font file name: ${testCase}`, () => {
      expect(testCase).toMatch(FONT_FILE_NAME_REGEX);
    });
  });

  invalidTestCases.forEach((testCase) => {
    spec(`should not match invalid font file name: ${testCase}`, () => {
      expect(testCase).not.toMatch(FONT_FILE_NAME_REGEX);
    });
  });
});
