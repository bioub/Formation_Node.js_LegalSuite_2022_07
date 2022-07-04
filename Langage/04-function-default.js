function sum1(a, b, c) {
  if (c === undefined) {
    c = 0;
  }
  return a + b + c;
}

console.log(sum1(1, 2)); // NaN

function sum2(a, b, c) {
  // avec ||
  // si "c" est falsy (false, 0, '', null, undefined)
  // alors ou lui affecte 0
  // A UTILISER UNIQUEMENT SI la valeur par défaut
  // est elle meme falsy
  c = c || 0;
  return a + b + c;
}

console.log(sum2(1, 2)); // NaN

function sum3(a, b, c) {
  // ES2020 Nullish Coalescing operator
  // si "c" est nullish (null, undefined)
  // alors ou lui affecte 0
  c = c ?? 0;
  return a + b + c;
}

console.log(sum3(1, 2)); // NaN

// ES2015 Default param
function sum4(a, b, c = 0) {
  return a + b + c;
}

console.log(sum4(1, 2)); // NaN
