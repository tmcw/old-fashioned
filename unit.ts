export class BaseUnit {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
}

export class CL extends BaseUnit {}
export class Tsp extends BaseUnit {}
export class Dash extends BaseUnit {}
export class Slice extends BaseUnit {}
export class Whole extends BaseUnit {}
export class Sprig extends BaseUnit {}
export class Wedge extends BaseUnit {}
export class Twist extends BaseUnit {}
export class Cube extends BaseUnit {}
export class Drop extends BaseUnit {}
export class Peel extends BaseUnit {}
export class Zest extends BaseUnit {}
export class None extends BaseUnit {}
export class Spear extends BaseUnit {}
export class Leaves extends BaseUnit {}
export class Splash extends BaseUnit {}
