const SYMBOLS_REGEX = '[a-z0-9]';
const ANY_SYMBOLS_REGEX = '[^ ,{}]+';
const ATTRIBUTE_REGEX = String.raw`\[[^\]]+\]`;
const CLASS_REGEX = String.raw`\.[a-z0-9_-]+`;
const MODIFIER_SEPARATOR_REGEX = '--';
const ELEMENT_SEPARATOR_REGEX = '__';
const SIBLING_OPERATOR_REGEX = String.raw`\s*\+\s*`;
const CHILD_OPERATOR_REGEX = String.raw`\s*>\s*`;

const BLOCK_REGEX = `[a-z]${SYMBOLS_REGEX}*(-${SYMBOLS_REGEX}+)*`;
const ELEMENT_REGEX = `(${ELEMENT_SEPARATOR_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;
const MODIFIER_REGEX = `(${MODIFIER_SEPARATOR_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`;
const SIBLING_REGEX = String.raw`(?:${ANY_SYMBOLS_REGEX}\s*)?${SIBLING_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const CHILD_REGEX = String.raw`(?:${ANY_SYMBOLS_REGEX}\s*)?${CHILD_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const ATTRIBUTE_SIBLING_REGEX = `${ATTRIBUTE_REGEX}${SIBLING_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const ATTRIBUTE_CHILD_REGEX = `${ATTRIBUTE_REGEX}${CHILD_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const CLASS_SIBLING_REGEX = `${CLASS_REGEX}${SIBLING_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const CLASS_CHILD_REGEX = `${CLASS_REGEX}${CHILD_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const NESTED_ATTRIBUTE_SIBLING_REGEX = `&${ATTRIBUTE_REGEX}${SIBLING_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const NESTED_ATTRIBUTE_CHILD_REGEX = `&${ATTRIBUTE_REGEX}${CHILD_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const NESTED_CLASS_SIBLING_REGEX = `&${CLASS_REGEX}${SIBLING_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const NESTED_CLASS_CHILD_REGEX = `&${CLASS_REGEX}${CHILD_OPERATOR_REGEX}${ANY_SYMBOLS_REGEX}`;
const NESTED_ATTRIBUTE_REGEX = `&${ATTRIBUTE_REGEX}`;
const NESTED_CLASS_REGEX = `&${CLASS_REGEX}`;

export {
  ATTRIBUTE_CHILD_REGEX,
  ATTRIBUTE_REGEX,
  ATTRIBUTE_SIBLING_REGEX,
  BLOCK_REGEX,
  CHILD_REGEX,
  CLASS_CHILD_REGEX,
  CLASS_REGEX,
  CLASS_SIBLING_REGEX,
  ELEMENT_REGEX,
  MODIFIER_REGEX,
  NESTED_ATTRIBUTE_CHILD_REGEX,
  NESTED_ATTRIBUTE_REGEX,
  NESTED_ATTRIBUTE_SIBLING_REGEX,
  NESTED_CLASS_CHILD_REGEX,
  NESTED_CLASS_REGEX,
  NESTED_CLASS_SIBLING_REGEX,
  SIBLING_REGEX,
};
