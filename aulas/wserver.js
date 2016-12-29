'use strict';

const http = require('http');

let server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html charset: utf-8'});
  res.write('Olá mundo!');
  res.end();
});

server.listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
