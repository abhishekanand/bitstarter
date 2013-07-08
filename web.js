var express = require('express');
var js = require('fs'); //ReferenceError: fs is not defined

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   //    response.send('Hello World3!');
   
   var buffer = fs.readFileSync('./index.html');
   response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
