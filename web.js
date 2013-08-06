var express = require('express');
var app = express();
var buffer = new buffer(27);
var fs = require('fs');
var fichero = 'index.txt';
app.use(express.logger());

fs.readFileSync(fichero,buffer);
var k = buffer.toString('utf8');

app.get('/', function(request, response) {
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
