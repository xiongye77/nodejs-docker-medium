var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello from Node Server App deployedzzzzzzzzzzzzzzzzate with CodePipeline!V2');
  
};
var www = http.createServer(handleRequest);
www.listen(80);
