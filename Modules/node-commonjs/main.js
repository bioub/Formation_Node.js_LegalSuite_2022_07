// function (exports, require, module, __filename, __dirname) {
'use strict';

const getRandom = require('./getRandom');
const { hello } = require('./hello');

/** @type {string} */
const names = ['Romain', 'Eric'];

for (const n of names) {
  console.log(hello(n));
}

console.log(getRandom());

// }
