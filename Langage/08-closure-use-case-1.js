for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// ici i vaut 3

// Dans 1s : ???
// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..1s.. 0 1 2
// C - ..1s.. 2 2 2
// D - ..1s.. 3 3 3


// pile d'appel
// ^
// |
// |                                                 lg   lg   lg
// |for { st - st - st } i==3                        => - => - =>
// +-------------------------------------------------1s-------------> temps
//                                                   3    3    3

function externe(msg) {
  // closure
  return () => {
    console.log(msg);
  };
}

for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i=0; i<3; i++) {
  // closure (grace à let)
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
