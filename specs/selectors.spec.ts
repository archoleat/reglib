import { describe, expect, test as spec } from 'bun:test';

import {
  NESTED_ATTRIBUTE_REGEX,
  NESTED_CLASS_REGEX,
  NESTED_MODIFIER_REGEX,
  NESTED_ELEMENT_REGEX,
  ATTRIBUTE_REGEX,
  CLASS_REGEX,
  MODIFIER_REGEX,
  ELEMENT_REGEX,
  SIBLING_REGEX,
  CHILD_REGEX,
  ATTRIBUTE_SIBLING_REGEX,
  ATTRIBUTE_CHILD_REGEX,
  CLASS_SIBLING_REGEX,
  CLASS_CHILD_REGEX,
  NESTED_ATTRIBUTE_SIBLING_REGEX,
  NESTED_ATTRIBUTE_CHILD_REGEX,
  NESTED_CLASS_SIBLING_REGEX,
  NESTED_CLASS_CHILD_REGEX,
} from '#src/index.ts';

const testCases = [
  { selector: '&[attribute]', regex: NESTED_ATTRIBUTE_REGEX },
  { selector: '&[attribute=value]', regex: NESTED_ATTRIBUTE_REGEX },
  { selector: '&[attribute*=value]', regex: NESTED_ATTRIBUTE_REGEX },
  { selector: '&[attribute="value"]', regex: NESTED_ATTRIBUTE_REGEX },
  { selector: '&[attribute*="value"]', regex: NESTED_ATTRIBUTE_REGEX },
  { selector: "&[attribute='value']", regex: NESTED_ATTRIBUTE_REGEX },
  { selector: "&[attribute*='value']", regex: NESTED_ATTRIBUTE_REGEX },
  { selector: '&.class', regex: NESTED_CLASS_REGEX },
  { selector: '&--modifier', regex: NESTED_MODIFIER_REGEX },
  { selector: '&__element', regex: NESTED_ELEMENT_REGEX },
  { selector: '[attribute]', regex: ATTRIBUTE_REGEX },
  { selector: '[attribute=value]', regex: ATTRIBUTE_REGEX },
  { selector: '[attribute*=value]', regex: ATTRIBUTE_REGEX },
  { selector: '.class', regex: CLASS_REGEX },
  { selector: '--modifier', regex: MODIFIER_REGEX },
  { selector: '__element', regex: ELEMENT_REGEX },
  { selector: '+ p', regex: SIBLING_REGEX },
  { selector: '> p', regex: CHILD_REGEX },
  { selector: 'div + p', regex: SIBLING_REGEX },
  { selector: 'div > p', regex: CHILD_REGEX },
  { selector: '[attribute] + p', regex: ATTRIBUTE_SIBLING_REGEX },
  { selector: '[attribute] > p', regex: ATTRIBUTE_CHILD_REGEX },
  { selector: '.class + p', regex: CLASS_SIBLING_REGEX },
  { selector: '.class > p', regex: CLASS_CHILD_REGEX },
  { selector: '&[attribute] + p', regex: NESTED_ATTRIBUTE_SIBLING_REGEX },
  { selector: '&[attribute] > p', regex: NESTED_ATTRIBUTE_CHILD_REGEX },
  { selector: '&.class + p', regex: NESTED_CLASS_SIBLING_REGEX },
  { selector: '&.class > p', regex: NESTED_CLASS_CHILD_REGEX },
];

describe('Nested Selectors Regex', () => {
  testCases.forEach(({ selector, regex }) => {
    spec(`should match "${selector}"`, () => {
      expect(selector).toMatch(new RegExp(regex));
    });
  });
});
