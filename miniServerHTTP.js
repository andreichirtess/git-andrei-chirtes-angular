var express = require('express');
var port = 8080;

express().use(express.static(__dirname)).listen(port);

console.log("HTTP server listening on port", port);
