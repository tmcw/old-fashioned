export const camelCase = (s: string) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
};
