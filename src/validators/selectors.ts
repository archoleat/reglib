const SYMBOLS_REGEX = '[a-z0-9]';
const ATTRIBUTE_REGEX = String.raw`\[(.*?)\]`;
const CLASS_REGEX = String.raw`\.(.*?)`;
const ELEMENT_S_REGEX = '__';
const MODIFIER_S_REGEX = '--';

const BLOCK_REGEX = `[a-z]${SYMBOLS_REGEX}*(-${SYMBOLS_REGEX}+)*`;
const ELEMENT_REGEX = `(${ELEMENT_S_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;
const MODIFIER_REGEX = `(${MODIFIER_S_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;

const NESTED_CHILD_REGEX = String.raw`&>[^ ,{}]+`; // & > ...
const NESTED_SIBLING_REGEX = String.raw`&\+[^ ,{}]+`; // & + ...
const CLASS_CHILD_REGEX = String.raw`\.${SYMBOLS_REGEX}+>[^ ,{}]+`; // .class > ...
const CLASS_SIBLING_REGEX = String.raw`\.${SYMBOLS_REGEX}+\+[^ ,{}]+`; // .class + ...
const ATTRIBUTE_CHILD_REGEX = String.raw`\[.*?\]+>[^ ,{}]+`; // [attr] > ...
const ATTRIBUTE_SIBLING_REGEX = String.raw`\[.*?\]+[^ ,{}]+`; // [attr] + ...

const selectors = {
  bem: {
    BLOCK_REGEX,
    ELEMENT_REGEX,
    MODIFIER_REGEX,
  },
  child: {
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
    NESTED_CHILD_REGEX,
    NESTED_SIBLING_REGEX,
  },
};

export { selectors };
