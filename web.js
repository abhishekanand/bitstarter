var express = require('express');
var fs = require('fs'); //ReferenceError: fs is not defined

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   //    response.send('Hello World3!');
   
   var indexhtml = fs.readFileSync('./index.html','utf-8');
//   var body = indexhtml;
   response.send(indexhtml);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
