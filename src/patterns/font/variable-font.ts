import { SPLIT_CHARS_PATTERN } from '#shared';

const VARIABLE_FONT_PATTERN = new RegExp(`${SPLIT_CHARS_PATTERN}?(var)`, 'i');

export { VARIABLE_FONT_PATTERN };
