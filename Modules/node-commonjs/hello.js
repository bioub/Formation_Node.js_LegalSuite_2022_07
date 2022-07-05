// function (exports, require, module, __filename, __dirname) {

'use strict';

/**
 * Ma fonction hello
 * @param {string} name Le nom
 * @returns {string} Un message
 */
function hello(name) {
  return `Hello ${name}`;
}

function bye(name) {
  return `Bye ${name}`;
}

// pour exporter plusieurs valeurs
exports.hello = hello;
exports.bye = bye;

// pas besoin d'une variable globale
// globalThis.hello = hello

// }
