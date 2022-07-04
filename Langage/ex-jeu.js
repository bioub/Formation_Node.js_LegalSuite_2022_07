// importe le module readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // pour rejouer
    jouer();

    // pour terminer la partie
    // rl.close();
  });
}
jouer();
