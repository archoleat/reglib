const HTML_EXTENSION_REGEX = '.html';
const PUG_EXTENSION_REGEX = '.pug';

const extensions = {
  HTML_EXTENSION_REGEX,
  PUG_EXTENSION_REGEX,
  FILE_EXTENSION_REGEX: new RegExp(String.raw`\.[^.]+$`),
  JS_EXTENSION_REGEX: new RegExp(String.raw`\.js$`),
  PUG_EXTENSION_REGEX_REGEX: new RegExp(`${PUG_EXTENSION_REGEX}$`),
  SCSS_EXTENSION_REGEX: new RegExp(String.raw`\.s[ac]ss$`),

  NODE_MODULES_REGEX: new RegExp('node_modules'),
};

export { extensions };
