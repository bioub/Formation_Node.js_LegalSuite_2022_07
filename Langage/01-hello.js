/**
 * Ma fonction hello
 * @param {string} name Le nom
 * @returns {string} Un message
 */
function hello(name) {
  return `Hello ${name}`;
}

/** @type {string} */
const names = ['Romain', 'Eric'];

names.push('Jean'); // possible avec const
// names = []; // erreur avec const

for (const n of names) {
  console.log(hello(n));
}

