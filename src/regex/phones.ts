const phones = {
  RU_REGEX: new RegExp(String.raw`^\+7 \((9\d{2,3})\) \d{3}-\d{2}-\d{2}$`),
  US_REGEX: new RegExp(String.raw`^\+1 \((\d{3})\) \d{3}-\d{4}$`),
};

export { phones };
