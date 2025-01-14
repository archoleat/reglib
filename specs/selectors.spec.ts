import { describe, expect, test as spec } from 'bun:test';

import { NESTED_ATTRIBUTE_REGEX, NESTED_CLASS_REGEX } from '#src/index.ts';

describe('Nested Selectors Regex', async () => {
  spec('should &[attribute]', async () => {
    expect('&[attribute]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute] {}', async () => {
    expect('&[attribute] {}').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute=value]', async () => {
    expect('&[attribute=value]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute*=value]', async () => {
    expect('&[attribute*=value]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute=value] {}', async () => {
    expect('&[attribute=value] {}').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute*=value] {}', async () => {
    expect('&[attribute*=value] {}').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("&[attribute='value']", async () => {
    expect("&[attribute='value']").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute*="value"]', async () => {
    expect('&[attribute*="value"]').toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute="value"] {}', async () => {
    expect("&[attribute='value'] {}").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &[attribute*="value"] {}', async () => {
    expect("&[attribute*='value'] {}").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("&[attribute='value']", async () => {
    expect("&[attribute='value']").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("&[attribute*='value']", async () => {
    expect("&[attribute*='value']").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("&[attribute='value'] {}", async () => {
    expect("&[attribute='value'] {}").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec("&[attribute*='value'] {}", async () => {
    expect("&[attribute*='value'] {}").toMatch(new RegExp(NESTED_ATTRIBUTE_REGEX));
  });

  spec('should &.class', async () => {
    expect('&.class').toMatch(new RegExp(NESTED_CLASS_REGEX));
  });

  spec('should &.class {}', async () => {
    expect('&.class {}').toMatch(new RegExp(NESTED_CLASS_REGEX));
  });

  // spec('should &--modifier', async () => {
  //   expect('&--modifier').toMatch(new RegExp(MODIFIER_REGEX));
  // });

  // spec('should &--modifier {}', async () => {
  //   expect('&--modifier {}').toMatch(new RegExp(MODIFIER_REGEX));
  // });
});
