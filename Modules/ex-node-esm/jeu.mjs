import { createInterface } from 'readline';
// importer getRandomInt

class Jeu {
  constructor(options = {}) {
    // const min = options.min ?? 0;
    // const max = options.max ?? 100;
    const { min = 0, max = 100 } = options;

    this.rl = createInterface({
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
    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez saisi : ' + answer);

      const entierSaisi = parseInt(answer, 10);

      if (isNaN(entierSaisi)) {
        console.log('Il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (this.entierAlea < entierSaisi) {
        console.log('Trop grand');
        this.jouer();
      } else if (this.entierAlea > entierSaisi) {
        console.log('Trop petit');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

// exporter Jeu
