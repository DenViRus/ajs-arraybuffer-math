import { MathCharacter } from "./mathCharacter.js";

export class Magician extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.baseAttack = 200;
  }
}
