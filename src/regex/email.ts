const EMAIL_REGEX = new RegExp(
  String.raw`^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$`,
);

export { EMAIL_REGEX };
