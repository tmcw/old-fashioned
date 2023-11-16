const NICE_FRACTIONS = new Map<number, string>(
  [
    [0, ""],
    [10, "⅒"],
    [11, "⅑"],
    [12, "⅛"],
    [14, "⅐"],
    [16, "⅙"],
    [20, "⅕"],
    [25, "¼"],
    [33, "⅓"],
    [37, "⅜"],
    [40, "⅖"],
    [50, "½"],
    [60, "⅗"],
    [62, "⅝"],
    [66, "⅔"],
    [75, "¾"],
    [80, "⅘"],
    [83, "⅚"],
    [87, "⅞"],
  ],
);

// TODO: refactor
export function formatFloat(a: number) {
  const intPart = Math.floor(a);
  const remainder = Math.floor((a - intPart) * 100);
  const nice = NICE_FRACTIONS.get(remainder);

  if (nice !== undefined) {
    return `${intPart === 0 ? "" : intPart}${nice}`;
  }

  return a.toFixed(2);
}
