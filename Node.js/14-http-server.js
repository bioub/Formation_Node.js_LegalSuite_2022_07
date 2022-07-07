const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // par défaut

  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-type', 'text/plain');
    res.write('Home');
  }
  else if (req.method === 'GET' && req.url === '/hello') {
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Hello</h2>');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Not found</h2>');
  }

  res.end();
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(4000, () => {
  console.log('Server started http://localhost:4000');
});
