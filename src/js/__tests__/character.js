class Character {
    constructor(name, type, health = 100, level = 1) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
    }
  
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  
    get attack() {
      throw new Error('Attack method should be defined in subclass');
    }
  
    get defence() {
      throw new Error('Defence method should be defined in subclass');
    }
  }
  
  export default Character;