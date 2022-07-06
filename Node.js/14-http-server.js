const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // par défaut
  res.setHeader('Content-type', 'text/plain');
  res.write('Bonjour');
  res.end();
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(4000, () => {
  console.log('Server started http://localhost:4000');
});
