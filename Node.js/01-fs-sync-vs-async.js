const fs = require('fs');

// Synchrone
// Tant que le fichier n'a pas été lu, le thread est bloqué sur l'appel (ici readFileSync)
const buffer = fs.readFileSync('.prettierrc');
console.log(buffer.toString('utf-8'));

// Asynchrone
// Pendant que le fichier est lu, le thread est disponible
fs.readFile('.prettierrc', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('after readFile')
