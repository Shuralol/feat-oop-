import Bowman from "../bowman.js";
import Daemon from "../daemon.js";
import Magician from "../magician.js";
import Swordsman from "../swordsman.js";
import Undead from "../undead.js";
import Zombie from "../zombie.js";

describe("Character", () => {
  it("should create a new Bowman character", () => {
    const character = new Bowman("Klark");
    expect(character.name).toBe("Klark");
    expect(character.type).toBe("Bowman");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  it("should create a new Daemon character", () => {
    const character = new Daemon("Uburu");
    expect(character.name).toBe("Uburu");
    expect(character.type).toBe("Daemon");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  it("should create a new Magician character", () => {
    const character = new Magician("Merlin");
    expect(character.name).toBe("Merlin");
    expect(character.type).toBe("Magician");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  it("should create a new Swordsman character", () => {
    const character = new Swordsman("Arthur");
    expect(character.name).toBe("Arthur");
    expect(character.type).toBe("Swordsman");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  it("should create a new Undead character", () => {
    const character = new Undead("Dracula");
    expect(character.name).toBe("Dracula");
    expect(character.type).toBe("Undead");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  it("should create a new Zombie character", () => {
    const character = new Zombie("Zack");
    expect(character.name).toBe("Zack");
    expect(character.type).toBe("Zombie");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });
});
