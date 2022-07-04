// function externe(msg) {
//   function interne() {
//     console.log(msg);
//   }
//   interne();
// }

// externe('Hello');

// pile d'appel
// ^
// |
// |interne
// |externe
// +----------------------------------> temps

// function externe(msg) {
//   function interne() {
//     console.log(msg);
//   }
//   return interne;
// }

// const hello = externe('Hello');
// hello();

// pile d'appel
// ^
// |
// |
// |externe - interne/hello
// +----------------------------------> temps

function externe(msg) {
  function interne() {
    console.log(msg);
  }
  setTimeout(interne, 1000);
}

externe('Hello');

// pile d'appel
// ^
// |
// |
// |externe                 interne/hello
// +------------------------1s----------> temps
