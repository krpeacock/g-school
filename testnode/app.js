var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join('public/ftp', 'public')));


// Serve up public/ftp folder
var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']});

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res);
  serve(req, res, done);
})

// Listen
server.listen(8000);
console.log("Listening on localhost:8000");
