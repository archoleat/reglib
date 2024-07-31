import { describe, expect, test as spec } from 'vitest';

import { selectors } from '#regex';

describe('Nested Selectors Regex', () => {
  const NESTED_ATTRIBUTE = selectors.nested.ATTRIBUTE_REGEX;
  const NESTED_CLASS = selectors.nested.CLASS_REGEX;
  const NESTED_MODIFIER = selectors.nested.MODIFIER_REGEX;
  const CHILD_ATTRIBUTE = selectors.child.ATTRIBUTE_REGEX;
  const CHILD_CLASS = selectors.child.CLASS_REGEX;

  spec('nested (&[attribute)', async () => {
    expect('&[attribute]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute] {})', async () => {
    expect('&[attribute] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute=value])', async () => {
    expect('&[attribute=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*=value])', async () => {
    expect('&[attribute*=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute=value] {})', async () => {
    expect('&[attribute=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*=value] {})', async () => {
    expect('&[attribute*=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute="value"])', async () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*="value"])', async () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute="value"] {})', async () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*="value"] {})', async () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute='value'])", async () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute*='value'])", async () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute='value'] {})", async () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute*='value'] {})", async () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&.class)', async () => {
    expect('&.class').match(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('nested (&.class {})', async () => {
    expect('&.class {}').match(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('nested (&--modifier)', async () => {
    expect('&--modifier').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  spec('nested (&--modifier {})', async () => {
    expect('&--modifier {}').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  spec('child ([attribute] &)', async () => {
    expect('[attribute] &').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  spec('child ([attribute] & {})', async () => {
    expect('[attribute] & {}').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  spec('child (.class &)', async () => {
    expect('.class &').match(new RegExp(`&${CHILD_CLASS}`));
  });

  spec('child (.class & {})', async () => {
    expect('.class & {}').match(new RegExp(`&${CHILD_CLASS}`));
  });
});
