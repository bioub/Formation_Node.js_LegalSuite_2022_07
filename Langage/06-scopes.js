// Portée globale
// globalVar = 'globalVar'; // plus possible en mode strict (ES5+)
globalThis.globalVar = 'globalVar'; // globalThis (ES2020)

// Portée de module (définie par le fichier)
const moduleVar = 'moduleVar'; // 2 systèmes connus avec Node (Modules CommonJS ou ESM)

function externe() {
  // Portée de closure (des portées ancetres)
  const closureVar = 'closureVar';

  function interne() {
    // Portée locale (à une fonction)
    const localVar = 'localVar';

    if (true) {
      // Portée de bloc
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
  }

  interne();
}

externe();

// ici interne n'existe pas
