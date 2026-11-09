# Regex Library

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Freglib)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Freglib)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/remark.yaml?label=Remark)
![Zero Deps](https://img.shields.io/badge/zero_dependencies-blue)

## Table of Contents

- [Installation](#installation)
- [List of Regex](#list-of-regex)
- [Contributing](#contributing)
- [License](#license)

This library provides a collection of useful
regular expressions for various use cases.

## Installation

```shell
bun i @archoleat/reglib
```

Use `bun i -D @archoleat/reglib` when only development tools import it.

## List of Regex

CSS and BEM patterns are unanchored fragments for composing expressions
or finding matches inside a string. A successful `.test()` does not validate
the entire input.
Wrap a fragment in `^(?:...)$` when you need a whole-value check:

```typescript
import { BLOCK_REGEX } from '@archoleat/reglib';

const isBlock = new RegExp(`^(?:${BLOCK_REGEX})$`);

isBlock.test('my-block'); // true
isBlock.test('Block'); // false
isBlock.test('block!'); // false
```

`ATTRIBUTE_REGEX` matches any nonempty bracketed text, including spaces.
It does not validate CSS attribute-selector syntax.

- ATTRIBUTE_REGEX

  - Pattern: `\[[^\]]+\]`.
  - Description: Matches an attribute in square brackets.
  - Example: Finds `[attr]`, `[data-test]`, and `[attr or attr]`.

- CLASS_REGEX

  - Pattern: `\.[a-z0-9_-]+`.
  - Description: Matches a CSS class name starting with a dot (.).
  - Example: Finds `.class`, `.my-class`, `.class_name`, and `.class` inside `.class!`.

- BLOCK_REGEX

  - Pattern: `[a-z][a-z0-9]*(-[a-z0-9]+)*`.
  - Description: Matches a BEM block name.
  - Example: Finds `lock` inside `Block` and `block` inside `block!`.

- ELEMENT_REGEX

  - Pattern: `(__[a-z0-9]+(-[a-z0-9]+)*)`.
  - Description: Matches a BEM element name.
  - Example: Finds `__element`, `__my-element`, and `__element` inside `__element!`.

- MODIFIER_REGEX

  - Pattern: `(--[a-z0-9]+(-[a-z0-9]+)*)`.
  - Description: Matches a BEM modifier name.
  - Example: Finds `--modifier`, `--my-modifier`, and `--modifier` inside `--modifier!`.

- SIBLING_REGEX

  - Pattern: `(?:[^ ,{}]+\s*)?\+\s*[^ ,{}]+`.
  - Description: Matches a sibling selector in CSS.
  - Example: Matches `+ p`, `div + p`, `.class + .another-class`, but not `div > p`.

- CHILD_REGEX

  - Pattern: `(?:[^ ,{}]+\s*)?>\s*[^ ,{}]+`.
  - Description: Matches a child selector in CSS.
  - Example: Matches `> p`, `div > p`, `.class > .another-class`, but not `div + p`.

- ATTRIBUTE_SIBLING_REGEX

  - Pattern: `\[[^\]]+\]\s*\+\s*[^ ,{}]+`.
  - Description: Matches an attribute selector followed by a sibling selector.
  - Example: Matches `[attr] + div`, `[data-test] + .class`.

- ATTRIBUTE_CHILD_REGEX

  - Pattern: `\[[^\]]+\]\s*>\s*[^ ,{}]+`.
  - Description: Matches an attribute selector followed by a child selector.
  - Example: Matches `[attr] > div`, `[data-test] > .class`.

- CLASS_SIBLING_REGEX

  - Pattern: `\.[a-z0-9_-]+\s*\+\s*[^ ,{}]+`.
  - Description: Matches a class selector followed by a sibling selector.
  - Example: Matches `.class + div`, `.my-class + .another-class`.

- CLASS_CHILD_REGEX

  - Pattern: `\.[a-z0-9_-]+\s*>\s*[^ ,{}]+`.
  - Description: Matches a class selector followed by a child selector.
  - Example: Matches `.class > div`, `.my-class > .another-class`.

- NESTED_ATTRIBUTE_SIBLING_REGEX

  - Pattern: `&\[[^\]]+\]\s*\+\s*[^ ,{}]+`.

  - Description: Matches a nested attribute selector
    followed by a sibling selector.

  - Example: Matches `&[attr] + div`, `&[data-test] + .class`.

- NESTED_ATTRIBUTE_CHILD_REGEX

  - Pattern: `&\[[^\]]+\]\s*>\s*[^ ,{}]+`.

  - Description: Matches a nested attribute selector
    followed by a child selector.

  - Example: Matches `&[attr] > div`, `&[data-test] > .class`.

- NESTED_CLASS_SIBLING_REGEX

  - Pattern: `&\.[a-z0-9_-]+\s*\+\s*[^ ,{}]+`.
  - Description: Matches a nested class selector followed by a sibling selector.
  - Example: Matches `&.class + div`, `&.my-class + .another-class`.

- NESTED_CLASS_CHILD_REGEX

  - Pattern: `&\.[a-z0-9_-]+\s*>\s*[^ ,{}]+`.
  - Description: Matches a nested class selector followed by a child selector.
  - Example: Matches `&.class > div`, `&.my-class > .another-class`.

- NESTED_ATTRIBUTE_REGEX

  - Pattern: `&\[[^\]]+\]`.
  - Description: Matches a nested attribute selector.
  - Example: Matches `&[attr]`, `&[data-test]`.

- NESTED_CLASS_REGEX

  - Pattern: `&\.[a-z0-9_-]+`.
  - Description: Matches a nested class selector.
  - Example: Matches `&.class`, `&.my-class`.

- EMAIL_REGEX

  - Pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`.

  - Description: Matches email addresses with basic validation.

  - Example: Matches `user@example.com`, `test.email@domain.co.uk`,
    but not `invalid@`, `@domain.com`, or `user@domain`.

- FONT_FILE_NAME_REGEX

  - Pattern: A complex regex for matching font file names.

  - Description: Matches font file names based on family,
    weight, italic, variable, and extension. Family names contain one or two
    PascalCase words; `OpenSansCondensed-Regular.woff2` does not match.

  - Example: Matches `Roboto-Bold.woff2`, `OpenSans-ItalicVariable.ttf`.
    > More info [validate-font-file-name](https://github.com/archoleat/validate-font-file-name)

- IS_MOBILE_REGEX

  - Pattern: `Mobi|iP(hone|od|ad)|Android|BlackBerry`.

  - Description: Matches selected mobile user-agent tokens. This is a
    heuristic: user-agent strings can be spoofed, reduced, or presented in
    desktop mode. It does not identify screen size or input capabilities;
    use CSS media queries and feature detection for responsive behavior.

  - Example: Matches `iPhone`, `iPad`, `Android`, `BlackBerry`,
    `Mobile Safari`, but not `Windows`, `Macintosh`.

- NAME_REGEX

  - Pattern: `^(?!-)[A-Za-z\u00C0-\u017FА-Яа-яЁё\s\-\u3000\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]+(?<!-)$`.

  - Description: Matches names with support for Latin, Cyrillic,
    Japanese, and Chinese scripts. Cannot start or end with a hyphen.
    This is a restricted character allowlist, not a universal personal-name
    validator: valid names with apostrophes, combining marks, or other scripts
    may be rejected. A match does not establish a person's identity.

  - Example: Matches `John Doe`, `Jean-Paul`, `Иван Петров`,
    `田中太郎`, but not `-John`, `Name-`, or `123`.

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
