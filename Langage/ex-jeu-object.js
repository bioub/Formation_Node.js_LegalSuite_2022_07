const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

// importe le module readline
const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    // const min = options.min ?? 0;
    // const max = options.max ?? 100;
    const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
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


const game = new Jeu();
game.jouer();


// pile d'appel
// ^
// |                                question                                    question
// |question                        jouer                                       jouer
// |jouer    ..⟳..                  =>       ..⟳..                              =>       ..⟳..
// +--------------------------------ENTREE--------------------------------------ENTREE-----------> temps
//

// files d'attente de macro-tasks
// file d'attente :
