import getRandom from './getRandom.mjs';
import { hello } from './hello.mjs';

/** @type {string} */
const names = ['Romain', 'Eric'];

for (const n of names) {
  console.log(hello(n));
}

console.log(getRandom());
