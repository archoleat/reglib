# Regex Library

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Freglib)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Freglib)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/reglib/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installtion)
- [List of Regex](#list-of-regex)
- [Contributing](#contributing)
- [License](#license)

This library provides a collection of useful
regular expressions for various use cases.

## Installation

```shell
bun i -D @archoleat/reglib
```

## List of Regex

- ATTRIBUTE_REGEX

  - Pattern: `\[[^\]]+\]`.
  - Description: Matches an attribute in square brackets.
  - Example: Matches `[attr]`, `[data-test]`, but not `[attr or attr]`.

- CLASS_REGEX

  - Pattern: `\.[a-z0-9_-]+`.
  - Description: Matches a CSS class name starting with a dot (.).
  - Example: Matches `.class`, `.my-class`, `.class_name`, but not `class` or `.class!`.

- BLOCK_REGEX

  - Pattern: `[a-z][a-z0-9]*(-[a-z0-9]+)*`.
  - Description: Matches a BEM block name.
  - Example: Matches `block`, `my-block`, `block-name`, but not `Block` or `block!`.

- ELEMENT_REGEX

  - Pattern: `(__[a-z0-9]+(-[a-z0-9]+)*)`.
  - Description: Matches a BEM element name.
  - Example: Matches `__element`, `__my-element`, but not `element` or `__element!`.

- MODIFIER_REGEX

  - Pattern: `(--[a-z0-9]+(-[a-z0-9]+)*)`.
  - Description: Matches a BEM modifier name.
  - Example: Matches `--modifier`, `--my-modifier`, but not `modifier` or `--modifier!`.

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

- FONT_FILE_NAME_REGEX

  - Pattern: A complex regex for matching font file names.

  - Description: Matches font file names based on family,
    weight, italic, variable, and extension.

  - Example: Matches `Roboto-Bold.woff2`, `OpenSans-Italic-Variable.ttf`.
    > More info [validate-font-file-name](https://github.com/archoleat/validate-font-file-name)

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
