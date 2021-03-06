import { readFile, writeFile } from 'fs/promises';

// ES2022 Top Level Await
// On peut se passer de la fonction async
// A condition d'utiliser les modules ESM
try {
  const buffer = await readFile('.prettierrc');
  await writeFile('.prettierrc.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err.message);
}
