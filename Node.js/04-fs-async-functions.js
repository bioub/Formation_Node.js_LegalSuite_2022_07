const fs = require('fs/promises');

// ES2017 Async functions
// async function copyPrettierrc() {
//   try {
//     const buffer = await fs.readFile('.prettierrc');
//     await fs.writeFile('.prettierrc.copy', buffer);
//     console.log('Copy done');
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// copyPrettierrc();

(async () => {
  try {
    const buffer = await fs.readFile('.prettierrc');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log(err.message);
  }
})();
