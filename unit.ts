import { BaseUnit, Fmt } from "./types.ts";
import { formatFloat } from "./format_float.ts";

class CL extends BaseUnit {
  name = "CL";
  format(unit: Fmt) {
    const a = this.amount;
    switch (unit) {
      case "Ml":
        return (
          `${formatFloat(a * 10)} Ml`
        );

      case "Oz":
        return (
          `${formatFloat(a * 1 / 3)} Oz`
        );

      case "CL":
      default:
        return (
          `${formatFloat(a)} Cl`
        );
    }
  }
}

class PluralUnit extends BaseUnit {
  format(_unit: Fmt) {
    if (this.plural && this.amount > 1) {
      return `${this.amount} ${this.plural} `;
    }
    return `${this.amount} ${this.name} `;
  }
}

class None {
  name = "None";

  format() {
    return ``;
  }
}

class Tsp extends PluralUnit {
  name = "Tsp";
}
class Dash extends PluralUnit {
  name = "Dash";
  plural = "Dashes";
}
class Slice extends PluralUnit {
  name = "Slice";
}
class Whole extends PluralUnit {
  name = "Whole";
}
class Sprig extends PluralUnit {
  name = "Sprig";
  plural = "Sprigs";
}
class Wedge extends PluralUnit {
  name = "Wedge";
  plural = "Wedges";
}
class Twist extends PluralUnit {
  name = "Twist";
  plural = "Twists";
}
class Cube extends PluralUnit {
  name = "Cube";
  plural = "Cubes";
}
class Drop extends PluralUnit {
  name = "Drop";
  plural = "Drops";
}
class Peel extends PluralUnit {
  name = "Peel";
}
class Zest extends PluralUnit {
  name = "Zest";
  plural = "Zests";
}

class Spear extends PluralUnit {
  name = "Spear";
  plural = "Spears";
}
class Leaves extends PluralUnit {
  name = "Leaf";
  plural = "Leaves";
}
class Splash extends PluralUnit {
  name = "Splash";
  plural = "Splashes";
}

export const U = {
  CL,
  Tsp,
  Dash,
  Slice,
  Whole,
  Sprig,
  Wedge,
  Twist,
  Cube,
  Drop,
  Peel,
  Zest,
  None,
  Spear,
  Leaves,
  Splash,
};
