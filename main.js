var express = require('express');
var app = express();
app.get("/hello/:name", function(req, res) {
  console.log(req.params.name);
  res.send('Hello ' + req.params.name);
})
app.get('/', function(req, res) {
  res.send('Welcome to Data Representation & Querying');
})
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})
const posts = {
  "posts": [{
      "id": "fadf12421l",
      "title": "First server-side post",
      "content": "This is coming from the server"
    },
    {
      "id": "ksajflaj132",
      "title": "Second server-side post",
      "content": "This is coming from the server!"
    }
  ]
}
app.get("/api/posts", function(req, res) {
  console.log(posts);
  res.send('Hello ' + JSON.stringify(posts));
})
var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Welcome to Data Representation & Querying", host, port)
})
app.get('/test', function(req, res) {
  console.log("file io");
  res.sendFile('C:\Users\Sl0thmens\Documents\GitHub\NodeLab3\index.html');
});
// Console will print the message
console.log('Welcome to Data Representation & Querying”');