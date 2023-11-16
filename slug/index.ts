import { characters, locales } from "./locale.ts";

export interface SlugOptions {
  replacement: string;
  remove: RegExp | undefined;
  lower: boolean;
  strict: boolean;
  locale:
    | "bg"
    | "de"
    | "es"
    | "fr"
    | "pt"
    | "uk"
    | "vi"
    | "da"
    | "nb"
    | "it"
    | "nl"
    | "sv";
  trim: boolean;
  extends: Record<string, string>;
}

/**
 * Converts a string into a valid slug
 * @example
 * console.log(slug("some string")); // some-string
 * console.log(slug("some string", "_")); // some_string
 * console.log(slug("I ♥ UNICODE")); // I-love-UNICODE
 * console.log(slug("I ♥ UNICODE"), { lower: true }); // i-love-unicode
 * @example
 * slug("some ƒÚÑķÝ and ☢ string", {
 *  replacement: "-",
 *  remove: undefined,
 *  lower: true,
 *  strict: false,
 *  locale: "vi",
 *  trim: true,
 *  extends: { "☢": "nuclear" },
 * }); // some-fUNkY-and-nuclear-string
 */
export function slug(
  input: string,
  options?: string | Partial<SlugOptions>,
): string {
  let settings: SlugOptions = {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
    extends: {},
  };

  if (typeof options === "string") {
    settings.replacement = options;
  } else {
    settings = { ...settings, ...options };
  }

  // create output string (to modify)
  let output = input.normalize();

  // trim leading and trailing whitespace
  if (settings.trim) output = output.trim();

  // remove non-ascii characters
  if (settings.strict) output = output.replace(/[^A-Za-z0-9\s]/g, "");

  // deal with locales
  const finalMap = {
    ...characters,
    ...locales[settings.locale],
    ...settings.extends,
  };
  for (let i = 0; i < output.length; i++) {
    const c = output[i] as keyof typeof finalMap;

    if (finalMap[c]) {
      output = output.substring(0, i) + finalMap[c] + output.substring(i + 1);
    }
  }

  // make lowercase
  if (settings.lower) output = output.toLowerCase();

  // convert spaces to replacement characters (and treat multiple spaces as a single space)
  output = output.replace(/\s+/g, settings.replacement);

  // add remove functionality
  output = output.replaceAll(settings.remove ?? /[^\w\s$*_+~.()'"!\-:@]+/g, "");

  return output;
}
