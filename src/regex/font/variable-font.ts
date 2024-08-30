import { SPLIT_CHARS_REGEX } from '#shared/split-chars.ts';

const VARIABLE_FONT_REGEX = new RegExp(`${SPLIT_CHARS_REGEX}?(var)`, 'i');

export { VARIABLE_FONT_REGEX };
