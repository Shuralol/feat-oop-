import Bowman from './bowman.js';
import Swordsman from './swordsman.js';
import Magician from './magician.js';
import Undead from './undead.js';
import Zombie from './zombie.js';
import Daemon from './daemon.js';

const bowman = new Bowman('Лучник');
const swordsman = new Swordsman('Мечник');
const magician = new Magician('Маг');
const undead = new Undead('Нежить');
const zombie = new Zombie('Зомби');
const daemon = new Daemon('Демон');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);