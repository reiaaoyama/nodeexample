//  server02.js - an example server
var http = require('http');

const PORT=8000;

function handleRequest(request, response) {
	console.log('connection received '+ request.headers.host);
	response.end('Hello, World:' + request.url);
	console.log('  Access with: ' + request.url );
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log('Server started on port: '+ PORT);
});

