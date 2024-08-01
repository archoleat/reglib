const extensions = {
  HTML_EXTENSION_REGEX: 'html',
  FILE_EXTENSION_REGEX: new RegExp(String.raw`\.[^.]+$`),
  JS_EXTENSION_REGEX: new RegExp(String.raw`\.js$`),
  PUG_EXTENSION_REGEX: new RegExp(String.raw`\.pug$`),
  SCSS_EXTENSION_REGEX: new RegExp(String.raw`\.s[ac]ss$`),

  NODE_MODULES_REGEX: new RegExp('node_modules'),
  NODE_MODULES_REGEX_LITERAL: /node_modules/,
};

// TODO: add new regex, write readme.md and add literal version for each regex

// ^#(?:[0-9a-fA-F]{3}){1,2}$ (Hexadecimal Color Validation)
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{minlength,maxlength}$/ (Password Validation (1 uppercase, 1 lowercase, 1 number, 1 special))
// /\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i (ISBN Number Validation)
// /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/ (IPV4 Address Validation)
// (([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])) (IPV6 Address Validation)
// /^[0-3]?[0-9](/|\.|-)[0-3]?[0-9](/|\.|-)[1-9]\d{3}$/gi (Date Validation In mm/dd/yy format (Separator does not matter))
// /^(jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec)(/|\.|-)[0-3]?[0-9](/|\.|-)[1-9]\d{3}$/gi (Date Validation In mon/dd/yyyy format (Ex: Jan/23/2001, Separator does not matter))
// /^(jan(uary)?|feb(ruary)?|(mar)?ch|(apr)?il|may|(jun)?e|(jul)?y|(aug)?ust|sep(tember)?|sept|(oct)?ober|(nov)?ember|(dec)?ember)$/i; (Month Validation (Both Full and Abbreviated Form, Ex: Jan(uary)))
// (\currency_symbol\s?[0-9,]+(\.[0-9]{2})?) (Extract Price Value from any string)
// /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i (Parse an Email Header to retrieve "To" address)
// (?:http:\/\/)?(?:www\.)?facebook\.com/(?:(?:\w)*#!/)?(?:pages/)?(?:[\w\-]*/)*([\w\-]*) (Check if the given Facebook Profile Link is valid)
// ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ (Credit Card Validation (Does not check for fake numbers) Supported Cards: Visa, MasterCard, American Express, Diners Club, Discover, and JCB)
// /^[a-z0-9]{MIN_CHARS,MAX_CHARS}$/i (Username Validation with minimum and maximum characters)
// (http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])? (Extract URLs from a string)
// ^.*MSIE [5-8](?:\.[0-9]+)?(?!.*Trident/[5-9]\.0).*$ (Get the current Internet Explorer Version being used)
// /^.+\.(jpg|jpeg|png|gif|bmp|svg|webp|ico)$/gi (Validate image filenames (Remove/ADD extensions as required))
// /[a-zA-Z\s]*, [A-Z][A-Z]/ (Validate City Names (Or any words) with First 2 letters abbreviated (Ex: India, IN))
// /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/ (US Phone Number Validation)
// /^[0-9]\{3}-[0-9]\{2}-[0-9]\{4}$/ (Social Security Number Validation)
// /<tag_name>(\n|.)*</tag_name>/gi (Verify if the given string contains content between the provided html tags (Ex: <p>Hello</p>))
// /</?[^>]+>/g (Validates if the given string has either a opening or closing HTML tag (Does not verify if the HTML Tag exists))
// /^@?(\w){1,15}$/ (Twitter Username Validation)
// /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i (URL Validation)
// /([+-]?(?:'.+?'|".+?"|[^+\- ]{1}[^ ]*))/g (Google Search Syntax Validation)
// /@media([^{]+)\{([\s\S]+?})\s*}/g (Extract properties and values from CSS Media Queries)
// <!--(.*?)--> (Strip all comments from a HTML Code Block)
// ^\s*[a-zA-Z\-]+\s*[:]{1}\s[a-zA-Z0-9\s.#]+[;]{1} (Extract Individual CSS Properties from the given Code Block)
// /http:\/\/(?:youtu\.be/|(?:[a-z]{2,3}\.)?youtube\.com/watch(?:\?|#\!)v=)([\w-]{11}).*/gi (Extract Video ID from a valid Youtube Video Link)
// \< *[img][^\>]*[src] *= *["\']{0,1}([^"\'\ >]*) (Extract image source links from HTML Image Tags)
// ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$ (Base64 String Validation)
// /\d{1,3}(?=(\d{3})+(?!\d))/g (Separates the digits in the string to thousand with commas)
// /\s\s+/g, ' ' (Convert multiple spaces to single spaces between each word in a string)
// \[([^]]+)\] (Extract Square Brackets and the content between them)
// /[^A-Za-z0-9 ]/ (Non-Alphanumeric Characters Validation)
// /^(\s*)?[^/]{0,2}(($log|console)\.(warn|log|info))(.*)$/gmi (Extract native Javascript console and AngularJS $log log warn or info that are NOT comments / commented out)
// /\s*\([^)]*\)/', ' (Extract all brackets and the content between them)
// str.replace(/((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(/|/([\w#!:.?+=&%@!\-/]))?)/gi, '<a href=""></a>'); (Adds Link Tags to all the strings that start with http or https (Full Function Provided))
// /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i (UUID v1 Validation)
// /^[0-9A-F]{8}-[0-9A-F]{4}-[2][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i (UUID v2 Validation)
// /^[0-9A-F]{8}-[0-9A-F]{4}-[3][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i (UUID v3 Validation)
// /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i (UUID v4 Validation)
// /^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i (UUID v5 Validation)
// (["'])(?:(?=(\?))\2.)*?\1 (Extracts any text between quotations (Works with nested quotes too))
// /^[0-9]{5}(-[0-9]{4})?$/ (Zip Code(5 or 9 digits only) Validation)
// /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?/?.*/i (Extract the domain from a valid URL string)
// ^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$ (Validates if the given string is a valid JSON Web Token (JWT))
// ^\{(\s|\n\s)*(("\w*"):(\s)*("\w*"|\d*|(\{(\s|\n\s)*(("\w*"):(\s)*("\w*(,\w+)*"|\d{1,}|\[(\s|\n\s)*(\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})){1}(\s|\n\s)*(,(\s|\n\s)*\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})?)*(\s|\n\s)*\]))((,(\s|\n\s)*"\w*"):(\s)*("\w*(,\w+)*"|\d{1,}|\[(\s|\n\s)*(\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})){1}(\s|\n\s)*(,(\s|\n\s)*\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):("\w*"|\d{1,}))*(\s|\n)*})?)*(\s|\n\s)*\]))*(\s|\n\s)*}){1}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d*|(\{(\s|\n\s)*(("\w*"):(\s)*("\w*(,\w+)*"|\d{1,}|\[(\s|\n\s)*(\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})){1}(\s|\n\s)*(,(\s|\n\s)*\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})?)*(\s|\n\s)*\]))((,(\s|\n\s)*"\w*"):(\s)*("\w*(,\w+)*"|\d{1,}|\[(\s|\n\s)*(\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):(\s)*("\w*"|\d{1,}))*(\s|\n)*})){1}(\s|\n\s)*(,(\s|\n\s)*\{(\s|\n\s)*(("\w*"):(\s)*(("\w*"|\d{1,}))((,(\s|\n\s)*"\w*"):("\w*"|\d{1,}))*(\s|\n)*})?)*(\s|\n\s)*\]))*(\s|\n\s)*}){1}))*(\s|\n)*}$ (Validates if the given string is a valid Non-array JSON)
// [^@/]+@[^@/]+ (Validates if the given string is in the form of test@test)
// \s+ (Replaces all the spaces in the given string with a single space)
// [^a-zA-Z0-9] (Replaces all the non-alphanumeric characters in the given string with a single space)
// ^\s*$ (Validates if the given string is blank line)
// ^[1-9]+[0-9]*$ (Checks if the given string is a valid positive integer)
// (^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$) (Validates if the given string is a valid positive decimal)
// ^\d*\.?\d*[0-9]+\d*$ (Validates if the given string is a valid positive decimal with a single decimal digit)
// [0-9]\{3}-[0-9]\{2}-[0-9]\{4} (Validates if the given string is a valid Social Security Number)
// ^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$ (Validate if the given string is a valid date)
// <(FONT|font)([ ]([a-zA-Z]+)=("|\')[^"\']+("|\'))*[^>]+>([^<]+)(</FONT>|</font> (Replaces all the font tags in the given string with a single space)

export { extensions };
