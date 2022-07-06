// fs.readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     fs.writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log('Copy done');
//       }
//     });
//   }
// });


const fs = require('fs/promises'); // Depuis Node 14

// Callback Hell
// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('.prettierrc.copy', buffer)
//       .then(() => {
//         console.log('Copy done');
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })


// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     return fs.writeFile('.prettierrc.copy', buffer);
//   })
//   .then(() => {
//     console.log('Copy done');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })

// Avec les fonction fléchée plus compactes
fs.readFile('.prettierrc')
  .then((buffer) => fs.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err.message))
