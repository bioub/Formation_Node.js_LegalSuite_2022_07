const net = require('net');

// Socket est un DuplexStream
const socket = net.connect(80, 'example.org');

// Réponse du serveur est redirigée vers le terminal
socket.pipe(process.stdout);

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.org\r\n');
  socket.write('User-Agent: Node.js example\r\n');
  socket.end('\r\n');
});
