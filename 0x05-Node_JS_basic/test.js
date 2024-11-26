const { createServer } = require('node:http')
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('string', 'Dubai');
  res.end('Welcome to Dubai')
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});