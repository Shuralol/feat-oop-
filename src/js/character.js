class Character {
  /*     constructor(name, type, health = 100, level = 1) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
    } */
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error(
        "Invalid name. Name should be a string of length 2 to 10 characters."
      );
    }

    const allowedTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!allowedTypes.includes(type)) {
      throw new Error(
        `Invalid type. Type should be one of: ${allowedTypes.join(", ")}.`
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
  /*   
    get attack() {
      throw new Error('Attack method should be defined in subclass');
    }
  
    get defence() {
      throw new Error('Defence method should be defined in subclass');
    }
  } */
  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    return this._attack;
  }

  set defence(defence) {
    this._defence = defence;
  }

  get defence() {
    return this._defence;
  }
}

export default Character;
