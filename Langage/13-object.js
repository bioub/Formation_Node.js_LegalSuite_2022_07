// objets prédéfinis au niveau langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// objets prédéfinis du navigateur
console.log(typeof document); // object
console.log(typeof window); // object
console.log(typeof navigator); // object

// objets prédéfinis de Node.js
console.log(typeof process); // object

// objets prédéfinis du navigateur et Node.js
console.log(typeof console); // object

// l'objet en JavaScript est un dictionnaire
// système de couples clé/valeur

// on peut ajouter des clés/valeurs
// extension
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

// on peut modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2'));

// on peut supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// il est possible de supprimer Math.random
// delete Math.random;
// Math.random();

// Ne pas modifier les objets que vous n'avez pas créé


// Pour créer un nouvel objet
// 2 syntaxes possibles
// Object literal
// Use case :
// - pour des objets simple à créer
// - si plusieurs instances, ne pas mettre de méthode
// - l'objet n'a pas de type autre que Object
const coords1 = {
  x: 1,
  y: 2,
  getType: () => 'Coords',
};

coords1.z = 3;

console.log(coords1.x, coords1.y, coords1.z);

JSON.stringify({ x: 1, y: 2 });

const coords2 = {
  x: 1,
  y: 2,
  getType: () => 'Coords',
};

console.log(coords1.getType() === coords2.getType()); // true 'Coords' === 'Coords'
console.log(coords1.getType === coords2.getType); // false () => 'Coords' === () => 'Coords'



// Constructor (fonction constructeur)
// use case
// - pour des objets complexe à créer
// - si plusieurs instances, Ok pour y mettre des méthodes
// - l'objet aura d'autre type que Object
// - possibilité de simuler de l'héritage

// const regex = new RegExp('[a-z]+');
// console.log(regex.test('abc'));

function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return `Hello my name is ${this.prenom}`;
};

const romain = new Contact('Romain');
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Hello my name is Romain


const eric = new Contact('Eric');
console.log(eric.prenom); // Romain
console.log(eric.hello()); // Hello my name is Romain

console.log(romain.hello == eric.hello); // true (la fonction n'est pas dupliquée)

console.log(romain instanceof Contact); // true
console.log(romain instanceof Object); // true
