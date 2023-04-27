
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("нельзя повысить левел умершего");
    }

    this.level++;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      return;
    }

    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export default Character;