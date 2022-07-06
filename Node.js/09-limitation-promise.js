// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// interval(1000)
//   .then(() => {
//     console.log('1s done');
//   });

// Limite principale de Promise :
// ne fonctionne que si le callback est appelé une fois
// setTimeout OK / setInterval KO
// addEventListener KO
// requete HTTP OK / WebSocket KO

// 2 solutions à ce problème :
// Observable via la lib RxJS
// Asynchronous Iterator ES2018

const { Observable } = require('rxjs');


// function interval(delayMs) {
//   return new Observable((observer) => {
//     setInterval(() => {
//       observer.next();
//     }, delayMs);
//   });
// }

// interval(1000)
//   .subscribe(() => {
//     console.log('1s done');
//   });


const readline = require('readline');
const fs = require('fs');

function readlines(path) {
  return new Observable((observer) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(path),
    });

    rl.on('line', (line) => {
      observer.next(line);
    });
  });
}

// Version Observable de lire un fichier ligne par ligne (en async)
let lineNb = 1;
readlines('.prettierrc')
  .subscribe((line) => {
    console.log((lineNb++) + ' ' + line);
  });

// Version Async Iteration de lire un fichier ligne par ligne (en async)
(async () => {
  let lineNb = 1;

  const rl = readline.createInterface({
    input: fs.createReadStream('.prettierrc'),
  });

  for await (const line of rl) {
    console.log((lineNb++) + ' ' + line);
  }
})();
