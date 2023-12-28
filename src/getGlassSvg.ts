import { glasses } from "./glasses";
import { Glass } from "./types";

export function getGlassSvg(glass: Glass) {
  const glassSlug =
    Object.entries(glasses).find(([slug, g]) => g === glass)?.[0] || "";

  return `/icon/${glassSlug}.svg`;
}
