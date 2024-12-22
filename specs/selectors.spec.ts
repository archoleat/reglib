import { describe, expect, test as spec } from 'bun:test';

import { selectors } from '#src/index.ts';

describe('Nested Selectors Regex', async () => {
  const NESTED_ATTRIBUTE = selectors.nested.ATTRIBUTE_REGEX;
  const NESTED_CLASS = selectors.nested.CLASS_REGEX;
  const NESTED_MODIFIER = selectors.nested.MODIFIER_REGEX;

  spec('should &[attribute]', async () => {
    expect('&[attribute]').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute] {}', async () => {
    expect('&[attribute] {}').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute=value]', async () => {
    expect('&[attribute=value]').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute*=value]', async () => {
    expect('&[attribute*=value]').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute=value] {}', async () => {
    expect('&[attribute=value] {}').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute*=value] {}', async () => {
    expect('&[attribute*=value] {}').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("&[attribute='value']", async () => {
    expect("&[attribute='value']").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute*="value"]', async () => {
    expect('&[attribute*="value"]').toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute="value"] {}', async () => {
    expect("&[attribute='value'] {}").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &[attribute*="value"] {}', async () => {
    expect("&[attribute*='value'] {}").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("&[attribute='value']", async () => {
    expect("&[attribute='value']").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("&[attribute*='value']", async () => {
    expect("&[attribute*='value']").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("&[attribute='value'] {}", async () => {
    expect("&[attribute='value'] {}").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("&[attribute*='value'] {}", async () => {
    expect("&[attribute*='value'] {}").toMatch(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('should &.class', async () => {
    expect('&.class').toMatch(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('should &.class {}', async () => {
    expect('&.class {}').toMatch(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('should &--modifier', async () => {
    expect('&--modifier').toMatch(new RegExp(`&${NESTED_MODIFIER}`));
  });

  spec('should &--modifier {}', async () => {
    expect('&--modifier {}').toMatch(new RegExp(`&${NESTED_MODIFIER}`));
  });
});
