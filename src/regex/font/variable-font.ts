import { SPLIT_CHARS_REGEX } from '#shared';

const VARIABLE_FONT_REGEX = new RegExp(`${SPLIT_CHARS_REGEX}?(var)`, 'i');

export { VARIABLE_FONT_REGEX };
