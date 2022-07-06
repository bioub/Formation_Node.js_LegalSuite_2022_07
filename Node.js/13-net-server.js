const net = require('net');

const server = net.createServer((socket) => {
  // Requete du client est redirigée vers le terminal
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('Content-length: 7\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.end();
});

// server.on('connection', () => {});
// server.on('listening', () => {});

server.on('error', (err) => {
  console.log(err);
});

server.listen(4000, () => {
  console.log('Server started http://localhost:4000');
});
