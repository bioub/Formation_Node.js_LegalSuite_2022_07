const names = ['Romain', 'Eric', 'Jean'];

// Algo : créer un nouveau tableau
// qui contient en majuscule les prénoms de 4 lettres dans names

// Style de programme (paradigme)
// Programmation impérative
const newArray1 = [];

for (const n of names) {
  if (n.length === 4) {
    newArray1.push(n.toUpperCase());
  }
}

// Programmation fonctionnelle
const newArray2 = names
  .filter((n) => n.length === 4)
  .map((n) => n.toUpperCase());

console.log(newArray1);
console.log(newArray2);

// pile d'appel
// ^
// |                             up   up
// |for { => - => - => }   for { => - => }
// |filter               - map             - lg
// +-------------------------------------------------------------> temps
//                                           ['ERIC', 'JEAN']
