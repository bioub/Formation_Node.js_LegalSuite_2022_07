const readline = require('readline'); // binaire de Node (sources : lib/readline.js)
const chalk = require('chalk'); // install npm (node_modules/chalk/source/index.js via la clé main du package.json)
const { getRandomInt } = require('./random'); // fichier local (commence toujours pas ./ ou ../)

class Jeu {
  constructor(options = {}) {
    // const min = options.min ?? 0;
    // const max = options.max ?? 100;
    const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }
    this.rl.question(chalk.blue('Quel est le nombre ? '), (answer) => {
      console.log(chalk.underline('Vous avez saisi : ' + answer));

      const entierSaisi = parseInt(answer, 10);

      if (isNaN(entierSaisi)) {
        console.log(chalk.red('Il faut saisir un nombre'));
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (this.entierAlea < entierSaisi) {
        console.log(chalk.yellow('Trop grand'));
        this.jouer();
      } else if (this.entierAlea > entierSaisi) {
        console.log(chalk.yellow('Trop petit'));
        this.jouer();
      } else {
        console.log(chalk.green('Gagné'));
        this.rl.close();
      }
    });
  }
}

// exporter Jeu
module.exports = Jeu;
