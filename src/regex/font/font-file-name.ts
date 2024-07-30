const LETTERS_REGEX = '[A-Z][a-z]';
const FONT_FAMILY_REGEX = `^${LETTERS_REGEX}+(${LETTERS_REGEX}+)?`;
const FONT_WEIGHT_REGEX = [
  'Thin',
  'Hairline',
  'ExtraLight',
  'UltraLight',
  'Light',
  'Regular',
  'Medium',
  'SemiBold',
  'DemiBold',
  'Bold',
  'ExtraBold',
  'UltraBold',
  'Black',
  'Heavy',
  'ExtraBlack',
  'UltraBlack',
].join('|');
const FONT_EXTENSION_REGEX = ['otf', 'ttf', 'woff', 'woff2'].join('|');
const FAMILY_REGEX = `(${FONT_FAMILY_REGEX})`;
const WEIGHT_REGEX = `(${FONT_WEIGHT_REGEX})`;
const EXTENSION_REGEX = `(${FONT_EXTENSION_REGEX})$`;
const FONT_FILE_NAME_REGEX = new RegExp(
  `${FAMILY_REGEX}-${WEIGHT_REGEX}\\.${EXTENSION_REGEX}`,
);

export { FONT_FILE_NAME_REGEX };
