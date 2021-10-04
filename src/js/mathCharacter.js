import { Character } from "./character.js";

export class MathCharacter extends Character {
  constructor(name) {
    super(name);
    this.stoned = false;
    this.attack = null;
    this.distance = !this.distance || Number(this.distance) <= 0 ? 1 : this.distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    this._attack = (this.baseAttack / 100) * (100 - (this.distance - 1) * 10);

    if (this.stoned) {
      this._attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(this._attack);
  }
}
