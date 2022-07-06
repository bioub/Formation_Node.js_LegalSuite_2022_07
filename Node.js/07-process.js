// process.exit(0); // kill node avec succès
// process.exit(1); // kill node avec erreur
// process.exit(2); // kill node avec erreur

console.log(process.cwd()); // Current Working Dir
console.log(process.getuid()); // User Id qui execute Node

console.log(process.memoryUsage());
console.log(process.cpuUsage());
console.log(process.platform);

const os = require('os');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.platform());

console.log(process.argv); // arguments du programme
// Pour manipuler les args, voir les bibliothèques :
// optimist
// minimist
// yargs
// meow
// commander
// inquirer

