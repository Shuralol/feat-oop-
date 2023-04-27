import Character from "../character.js";

describe("Character", () => {
  let character;

  beforeEach(() => {
    character = new Character("Test");
  });

  describe("levelUp", () => {
    it("should increase level by 1", () => {
      character.levelUp();
      expect(character.level).toBe(2);
    });

    it("should increase attack and defence by 20%", () => {
      character.levelUp();
      expect(character.attack).toBe(12);
      expect(character.defence).toBe(12);
    });

    it("should set health to 100", () => {
      character.health = 50;
      character.levelUp();
      expect(character.health).toBe(100);
    });

    it("should throw an error if health is 0", () => {
      character.health = 0;
      expect(() => {
        character.levelUp();
      }).toThrowError("нельзя повысить левел умершего");
    });
  });

  describe("damage", () => {
    it("should decrease health by damage points", () => {
      character.damage(25);
      expect(character.health).toBe(80);
    });

    it("should calculate health after taking into account defence", () => {
      character.defence = 50;
      character.damage(50);
      expect(character.health).toBe(75);
    });

    it("should not allow health to go below 0", () => {
      character.damage(200);
      expect(character.health).toBe(0);
    });

    it("should not decrease health if health is already 0", () => {
      character.health = 0;
      character.damage(50);
      expect(character.health).toBe(0);
    });
  });
});