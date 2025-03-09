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

describe('Nested Selectors Regex', () => {
  spec('should match &[attribute]', async () => {
    expect('&[attribute]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should match &[attribute=value]', async () => {
    expect('&[attribute=value]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should match &[attribute*=value]', async () => {
    expect('&[attribute*=value]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should match &[attribute="value"]', async () => {
    expect('&[attribute="value"]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should match &[attribute*="value"]', async () => {
    expect('&[attribute*="value"]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("should match &[attribute='value']", async () => {
    expect("&[attribute='value']").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("should match &[attribute*='value']", async () => {
    expect("&[attribute*='value']").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should match &.class', async () => {
    expect('&.class').toMatch(new RegExp(NESTED_CLASS_REGEX));
  });

  spec('should match &--modifier', async () => {
    expect('&--modifier').toMatch(new RegExp(NESTED_MODIFIER_REGEX));
  });

  spec('should match &__element', async () => {
    expect('&__element').toMatch(new RegExp(NESTED_ELEMENT_REGEX));
  });

  spec('should match [attribute]', async () => {
    expect('[attribute]').toMatch(new RegExp(ATTRIBUTE_REGEX));
  });

  spec('should match [attribute=value]', async () => {
    expect('[attribute=value]').toMatch(new RegExp(ATTRIBUTE_REGEX));
  });

  spec('should match [attribute*=value]', async () => {
    expect('[attribute*=value]').toMatch(new RegExp(ATTRIBUTE_REGEX));
  });

  spec('should match .class', async () => {
    expect('.class').toMatch(new RegExp(CLASS_REGEX));
  });

  spec('should match --modifier', async () => {
    expect('--modifier').toMatch(new RegExp(MODIFIER_REGEX));
  });

  spec('should match __element', async () => {
    expect('__element').toMatch(new RegExp(ELEMENT_REGEX));
  });

  spec('should match sibling selector', async () => {
    expect('+ p').toMatch(new RegExp(SIBLING_REGEX));
  });

  spec('should match child selector', async () => {
    expect('> p').toMatch(new RegExp(CHILD_REGEX));
  });

  spec('should match sibling selector', async () => {
    expect('div + p').toMatch(new RegExp(SIBLING_REGEX));
  });

  spec('should match child selector', async () => {
    expect('div > p').toMatch(new RegExp(CHILD_REGEX));
  });

  spec('should match attribute sibling selector', async () => {
    expect('[attribute] + p').toMatch(new RegExp(ATTRIBUTE_SIBLING_REGEX));
  });

  spec('should match attribute child selector', async () => {
    expect('[attribute] > p').toMatch(new RegExp(ATTRIBUTE_CHILD_REGEX));
  });

  spec('should match class sibling selector', async () => {
    expect('.class + p').toMatch(new RegExp(CLASS_SIBLING_REGEX));
  });

  spec('should match class child selector', async () => {
    expect('.class > p').toMatch(new RegExp(CLASS_CHILD_REGEX));
  });

  spec('should match nested attribute sibling selector', async () => {
    expect('&[attribute] + p').toMatch(new RegExp(NESTED_ATTRIBUTE_SIBLING_REGEX));
  });

  spec('should match nested attribute child selector', async () => {
    expect('&[attribute] > p').toMatch(new RegExp(NESTED_ATTRIBUTE_CHILD_REGEX));
  });

  spec('should match nested class sibling selector', async () => {
    expect('&.class + p').toMatch(new RegExp(NESTED_CLASS_SIBLING_REGEX));
  });

  spec('should match nested class child selector', async () => {
    expect('&.class > p').toMatch(new RegExp(NESTED_CLASS_CHILD_REGEX));
  });
});
