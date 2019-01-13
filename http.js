/*
 * @Author: kael 
 * @Date: 2019-01-13 14:44:31 
 * @Last Modified by:   kael 
 * @Last Modified time: 2019-01-13 14:44:31 
 */

// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000);