function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// REST operator
// Conversion syntaxique
// D'une liste de valeur (ici 3, 4, 5)
// Vers un tableau (ici [3, 4, 5])

// SPREAD operator
// Conversion syntaxique
// D'un tableau (ici [3, 4, 5])
// Vers une liste de valeur (ici 3, 4, 5)

const nbs = [3, 4, 5];

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(...nbs));

const newNbs = [1, 2, ...nbs, 6, 7];
const cloneNbs = [...nbs]; // shallow clone (pas récursif)

// const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const firstName = tmp[0];
// const lastName = tmp[1];

// Array Destructuring
const fullName = 'Romain Bohdanowicz';
//    ['Rom'    , 'Boh'   ]
const [firstName, lastName] = fullName.split(' ');

// Array Destructuring with default and REST
const [one, two, ...otherNbs] = newNbs;
const [three, four, five, six = 6] = nbs;

// Object Destructuring ES6
const coords = { x: 1, y: 2 };
//    { x: 1     , y: 2      }
const { x: xValue, y: yValue } = coords;

console.log(xValue, yValue); // 1, 2

// Shorthand property
const username = 'Romain';
const user = {
  username, // username: username,
};

//    { x: 1     , y: 2      }
const { x, y, z = 0 } = coords;

// ES2018 REST ET SPREAD sur objet
const cloneCoords = { ...coords }; // SPREAD
const { x: maVarX, ...otherKeys } = coords; // REST
