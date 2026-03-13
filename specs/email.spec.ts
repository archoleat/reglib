import { describe, expect, test as spec } from 'bun:test';

import { EMAIL_REGEX } from '#src/index.ts';

const validTestCases = [
  'user@example.com',
  'john.doe@company.co.uk',
  'test+tag@mail.org',
  'info@domain.store',
  'support@api.dev',
];

const invalidTestCases = [
  'plainaddress',
  '@nodomain.com',
  'user@',
  'user name@example.com',
  'user@example',
  'user@@example.com',
  'user@.com',
];

describe('EMAIL_REGEX', () => {
  validTestCases.forEach((testCase) => {
    spec(`should match valid email: ${testCase}`, () => {
      expect(testCase).toMatch(EMAIL_REGEX);
    });
  });

  invalidTestCases.forEach((testCase) => {
    spec(`should not match invalid email: ${testCase}`, () => {
      expect(testCase).not.toMatch(EMAIL_REGEX);
    });
  });
});
