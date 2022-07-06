const fs = require('fs');

try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err.message);
}

// pile d'appel
// ^
// |
// |
// |try { readFileSync XXXXXXXXXXXXXXXXX - writeFileSync XXXXXXXXXXX - lg }
// +---------------------------------------------------------------------------> temps
//

// Callback Hell - Pyramid of Doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// pile d'appel
// ^
// |
// |                                         writeFile                    lg
// |try { readFile } ..⟳..                   =>        ..⟳..              =>
// +---------------------------------------------------------------------------> temps
//
