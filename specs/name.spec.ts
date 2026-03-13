import { describe, expect, test as spec } from 'bun:test';

import { NAME_REGEX } from '#src/index.ts';

const validTestCases = [
  'John',
  'Mary',
  'Jean-Pierre',
  'María Dolores',
  'Ivan Петров',
  'Иван',
  'Волков',
  'José María',
  'Jean-Pierre Martin',
  'Фёдор',
  '田中太郎',
  '李明',
  'マリア',
  'Привет мир',
  'Maria-Anna',
];

const invalidTestCases = [
  'John123',
  'Jean@Pierre',
  'Maria_Dolores',
  'José#Maria',
  'Name!',
  'José_García',
  'John-',
  '-John',
  '123',
];

const edgeCaseTestCases = ['John。Garcia'];

describe('NAME_REGEX', () => {
  validTestCases.forEach((testCase) => {
    spec(`should match valid name: ${testCase}`, () => {
      expect(testCase).toMatch(NAME_REGEX);
    });
  });

  invalidTestCases.forEach((testCase) => {
    spec(`should not match invalid name: ${testCase}`, () => {
      expect(testCase).not.toMatch(NAME_REGEX);
    });
  });

  edgeCaseTestCases.forEach((testCase) => {
    spec(`should not match edge case: ${testCase}`, () => {
      expect(testCase).not.toMatch(NAME_REGEX);
    });
  });
});
