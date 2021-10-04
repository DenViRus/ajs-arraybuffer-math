import { MathCharacter } from "./mathCharacter.js";

export class Daemon extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.baseAttack = 250;
  }
}
