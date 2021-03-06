var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/wow', function(req, res) {
    res.sendFile(__dirname + '/static/wow.html');
});

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server running on port: 3000');
});