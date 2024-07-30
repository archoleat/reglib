import { SPLIT_CHARS_PATTERN } from '#shared';

const ITALIC_PATTERN = new RegExp(`${SPLIT_CHARS_PATTERN}?(italic)`, 'i');

export { ITALIC_PATTERN };
