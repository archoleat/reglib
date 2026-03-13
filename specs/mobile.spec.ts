import { describe, expect, test as spec } from 'bun:test';

import { IS_MOBILE_REGEX } from '#src/index.ts';

const validTestCases = [
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X)',
  'Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X)',
  'Mozilla/5.0 (iPod touch; CPU iPhone OS 14_4 like Mac OS X)',
  'Mozilla/5.0 (Linux; Android 11; SM-G991B)',
  'Mozilla/5.0 (Linux; Android 10; ONEPLUS A6013)',
  'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; en)',
  'BlackBerry9700/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/103 MIDP-2.1 CLDC-1.1',
];

const invalidTestCases = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
  'Mozilla/5.0 (X11; Linux x86_64)',
  'Mozilla/5.0 (compatible; Googlebot/2.1)',
];

describe('IS_MOBILE_REGEX', () => {
  validTestCases.forEach((testCase) => {
    spec(`should match mobile user agent: ${testCase}`, () => {
      expect(testCase).toMatch(IS_MOBILE_REGEX);
    });
  });

  invalidTestCases.forEach((testCase) => {
    spec(`should not match desktop user agent: ${testCase}`, () => {
      expect(testCase).not.toMatch(IS_MOBILE_REGEX);
    });
  });
});
