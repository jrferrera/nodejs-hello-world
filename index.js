const http = require('http');
const port = 8000;

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}`);