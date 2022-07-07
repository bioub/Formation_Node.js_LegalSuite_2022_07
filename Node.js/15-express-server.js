const express = require('express');

const app = express();

// le callback sera appelé pour toutes les méthodes HTTP
// et pour les URL qui commencent par /api/
app.use('/api', (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify({msg: 'Hello API'}));
  res.end();
});

// app.all arrive en 2e, il traite les requete qui n'ont
// pas été traité par les routes précédentes
// le callback sera appelé pour toutes les méthodes HTTP
// et pour les URL qui sont exactement /hello
app.all('/hello', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.write('<h2>Hello</h2>');
  res.end();
});

// le callback sera appelé si la méthode HTTP matche la méthode (fonction) de app
// et pour les URL qui sont exactement /
app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.write('Home');
  res.end();
});
// app.post();
// app.head();
// app.put();
// app.patch();
// app.delete();

// Pour traiter les 404
// toutes les autres URL
app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/html');
  res.write('<h2>Not Found</h2>');
  res.end();
});

app.listen(4000, () => {
  console.log('Server started http://localhost:4000');
});
