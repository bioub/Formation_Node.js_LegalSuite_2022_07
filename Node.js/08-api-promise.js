// setTimeout(() => {
//   console.log('1s done');
// }, 1000);

// timeout(1000)
//   .then(() => {
//     console.log('1s done');
//   });

// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// const util = require('util');

// const timeout = util.promisify(setTimeout);

// (async () => {
//   await timeout(1000);
//   console.log('1s done');
// })()



function randomTimeout() {
  return new Promise((resolve, reject) => {
    const delayMs = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

// (async () => {
//   const randomDelay = await randomTimeout();
//   console.log(randomDelay + 'ms done');
// })()

 (async () => {
    const delays = await Promise.all([
      randomTimeout(),
      randomTimeout(),
      randomTimeout(),
      randomTimeout(),
      randomTimeout(),
    ]);

    console.log(delays);
  })()

// Promise.all :
// combine un tableau de promise
// sera resolue lorsque toutes les promesses auront été résolue
// si l'une des promesse est rejetée l'ensemble est rejeté
// use case : lire 2 fichier en même temps pour les écrire dans un fichier

// Promise.allSettled :
// combine un tableau de promise
// sera resolue lorsque toutes les promesses auront été résolue
// si l'une des promesse est rejetée l'ensemble est quand même résolu et on
// saura individuellement quelle promesse a échouée ou non
// use case : un dashboard qui envoit plusieurs requetes mais on veut
// faire un affichage partiel si une requete échoue

// Promise.race
// combine un tableau de promise
// sera resolue lorsque la première a été résolue
// si la première est rejeté l'ensemble est rejeté
// use case : envoi d'une requete avec un timeout

// Promise.any
// combine un tableau de promise
// sera resolue lorsque la première a été résolue
// si la première est rejeté on continue jusqu'à ne pas avoir de promesse rejetée
// use case : interroger 3 serveurs miroirs pour connaitre le plus rapide

// Promise.resolve
// alias
// de new Promise((resolve) => resolve());
// use case : dans un test unitaire pour remplacer une fonction asynchrone
// par une fonction définie dans le test

// Promise.reject
// alias
// de new Promise((resolve, reject) => reject());
// use case : dans un test unitaire pour remplacer une fonction asynchrone
// par une fonction définie dans le test
