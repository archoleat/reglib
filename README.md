# Regex Library

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Freglib)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Freglib)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
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

## Installation

```shell
bun i -D @archoleat/reglib
```

## List of Regex

- `FONT_FILE_NAME_REGEX`: Matches FontFamily-FontWeight.woff2

- `ITALIC_REGEX`: Searches for the words `Italic` or `italic`.

- `VARIABLE_FONT_REGEX`: Searches for the words `var` or `variable`.

- `selectors`
  - `bem`
    - `BLOCK_REGEX`
    - `ELEMENT_REGEX`
    - `MODIFIER_REGEX`

  - `child`
    - `ATTRIBUTE_REGEX`
    - `CLASS_REGEX`

  - `nested`
    - `ATTRIBUTE_REGEX`
    - `CLASS_REGEX`
    - `ELEMENT_REGEX`
    - `MODIFIER_REGEX`

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
