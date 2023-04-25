import Character from "./character.js";

class Undead extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

export default Undead;