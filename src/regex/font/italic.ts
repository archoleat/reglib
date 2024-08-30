import { SPLIT_CHARS_REGEX } from '#shared/split-chars.ts';

const ITALIC_REGEX = new RegExp(`${SPLIT_CHARS_REGEX}?(italic)`, 'i');

export { ITALIC_REGEX };
