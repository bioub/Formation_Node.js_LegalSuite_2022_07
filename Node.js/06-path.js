const path = require('path');

console.log(path.parse('/Users/romain/Desktop/Formation-Node.js'))
console.log(path.extname('/Users/romain/Desktop/Formation-Node.js'))

console.log(path.join('Node.js', '.prettierrc'));
console.log(path.resolve('Node.js', '.prettierrc'));

// Bonne pratique pour faire référence à des chemins :
console.log(path.join(__dirname, '..', 'Node.js', '.prettierrc'));
console.log(path.resolve(__dirname, '..', 'Node.js', '.prettierrc'));
