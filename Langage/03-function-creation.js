console.log(hello('Romain'));

// function declaration
function hello(name) {
  return `Hello ${name}`;
}

// function expression (à éviter)
const hello2 = function(name) {
  return `Hello ${name}`;
};

// anonymous function expression (à éviter)
['Romain', 'Eric'].map(function(name) {
  return `Hello ${name}`;
});

// named function expression (à éviter)
['Romain', 'Eric'].map(function hello(name) {
  return `Hello ${name}`;
});

// ES2015 Arrow function
const hello3 = (name) => {
  return `Hello ${name}`;
};

// ES2015 Arrow function
['Romain', 'Eric'].map((name) => `Hello ${name}`);
