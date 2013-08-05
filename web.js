var express = require('express');
var app = express();
var buffer = new buffer(27);
var fs = require('fs');
var fichero = 'index.txt';
app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync(fichero, buffer);
  response.send(buffer.toString('utf8',0,buffer.length()));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
