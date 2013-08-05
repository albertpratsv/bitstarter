var express = require('express');
var app = express();
var buffer = new buffer();
var fs = require('fs');
var fichero = "index.txt"
app.use(express.logger());

app.get('/', function(request, response) {
  buffer = fs.readFileSync(fichero, buffer);
  response.send(buffer.toString(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
