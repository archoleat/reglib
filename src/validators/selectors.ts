const SYMBOLS_REGEX = '[a-z0-9]';
const ATTRIBUTE_REGEX = String.raw`\[[^\]]+\]`;
const CLASS_REGEX = String.raw`\.[a-z0-9_-]+`;
const ELEMENT_S_REGEX = '__';
const MODIFIER_S_REGEX = '--';

const BLOCK_REGEX = `[a-z]${SYMBOLS_REGEX}*(-${SYMBOLS_REGEX}+)*`;
const ELEMENT_REGEX = `(${ELEMENT_S_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;
const MODIFIER_REGEX = `(${MODIFIER_S_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;

const SIBLING_REGEX = String.raw`[^ ,{}]+\s*\+\s*[^ ,{}]+`;
const CHILD_REGEX = String.raw`[^ ,{}]+\s*>\s*[^ ,{}]+`;

const ATTRIBUTE_SIBLING_REGEX = String.raw`\[[^\]]+\]\s*\+\s*[^ ,{}]+`;
const ATTRIBUTE_CHILD_REGEX = String.raw`\[[^\]]+\]\s*>\s*[^ ,{}]+`;
const CLASS_SIBLING_REGEX = String.raw`\.[a-z0-9_-]+\s*\+\s*[^ ,{}]+`;
const CLASS_CHILD_REGEX = String.raw`\.[a-z0-9_-]+\s*>\s*[^ ,{}]+`;

const NESTED_ATTRIBUTE_SIBLING_REGEX = String.raw`&\[[^\]]+\]\s*\+\s*[^ ,{}]+`;
const NESTED_ATTRIBUTE_CHILD_REGEX = String.raw`&\[[^\]]+\]\s*>\s*[^ ,{}]+`;
const NESTED_CLASS_SIBLING_REGEX = String.raw`&\.[a-z0-9_-]+\s*\+\s*[^ ,{}]+`;
const NESTED_CLASS_CHILD_REGEX = String.raw`&\.[a-z0-9_-]+\s*>\s*[^ ,{}]+`;

const NESTED_ATTRIBUTE_REGEX = String.raw`&\[[^\]]+\]`;
const NESTED_CLASS_REGEX = String.raw`&\.[a-z0-9_-]+`;

const selectors = {
  bem: {
    BLOCK_REGEX,
    ELEMENT_REGEX,
    MODIFIER_REGEX,
  },
  child: {
    CHILD_REGEX,
    SIBLING_REGEX,
    CLASS_CHILD_REGEX,
    CLASS_SIBLING_REGEX,
    ATTRIBUTE_CHILD_REGEX,
    ATTRIBUTE_SIBLING_REGEX,
  },
  nested: {
    ATTRIBUTE_REGEX,
    CLASS_REGEX,
    ELEMENT_REGEX,
    MODIFIER_REGEX,
    NESTED_ATTRIBUTE_REGEX,
    NESTED_CLASS_REGEX,
    NESTED_ATTRIBUTE_CHILD_REGEX,
    NESTED_ATTRIBUTE_SIBLING_REGEX,
    NESTED_CLASS_CHILD_REGEX,
    NESTED_CLASS_SIBLING_REGEX,
  },
};

export { selectors };
