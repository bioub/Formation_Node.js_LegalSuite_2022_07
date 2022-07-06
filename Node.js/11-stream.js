const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('.prettierrc');
const ts = zlib.createGzip();
const ws = fs.createWriteStream('.prettierrc.zip');

// rs.on('data', (buffer) => {
//   ws.write(buffer);
// })

// cat .prettierrc | zip > .prettierrc.copy
rs.pipe(ts).pipe(ws);

// ReadStream : lecture (méthode read)
// WriteStream : écrite (méthode write)
// DuplexStream : lecture + écriture (méthode read et write)
// TransformStream : lecture -> transformation -> écriture (méthode read et write)
