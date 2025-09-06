import { describe, expect, test as spec } from 'bun:test';

import { HYPHEN_REGEX, HYPHENS_REGEX } from '#src/index.ts';

describe('Hyphen Regexes', () => {
  describe('HYPHEN_REGEX (/-+/g)', () => {
    spec('should match any hyphen sequence', () => {
      expect('hello-world').toMatch(HYPHEN_REGEX);
      expect('---test---').toMatch(HYPHEN_REGEX);
      expect('a-b-c').toMatch(HYPHEN_REGEX);
    });

    spec('should not match hyphen-less strings', () => {
      expect('helloWorld').not.toMatch(HYPHEN_REGEX);
      expect('12345').not.toMatch(HYPHEN_REGEX);
      expect('').not.toMatch(HYPHEN_REGEX);
    });
  });

  describe('HYPHENS_REGEX (/(^-|-$)/g)', () => {
    spec('should match ONLY leading/trailing hyphens', () => {
      expect('-hello').toMatch(HYPHENS_REGEX);
      expect('world-').toMatch(HYPHENS_REGEX);
      expect('-test-case-').toMatch(HYPHENS_REGEX);
    });

    spec('should not match middle hyphens', () => {
      expect('hello-world').not.toMatch(HYPHENS_REGEX);
      expect('a-b-c').not.toMatch(HYPHENS_REGEX);
      expect('no_hyphens').not.toMatch(HYPHENS_REGEX);
    });
  });
});
