var express = require('express');
var app = express();
var buffer = new buffer(27);
var fs = require('fs');
var fichero = 'index.txt';
app.use(express.logger());

fs.readFileSync(fichero,buffer);
buffer.toString('utf8',0,buffer.length());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
