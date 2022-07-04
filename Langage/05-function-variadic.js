function sum1(a, b) {
  let result = a + b;

  // pseudo-variable (this, arguments, super, new.target)
  // elle est créée au moment de l'appel
  // arguments n'est pas de type Array
  for (let i = 2; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sum1(1, 2, 3, 4, 5)); // 15

// ES2015 REST Param operator
function sum2(a, b, ...nbs) {
  let result = a + b;

  // pseudo-variable (this et arguments)
  // elle est créée au moment de l'appel
  // nbs est de type Array
  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum1(1, 2, 3, 4, 5)); // 15
