'use strict';

const http = require('http'),
      fs   = require('fs');


let server = http.createServer(function(req, res){
  let novoArquivo = fs.createWriteStream('arquivo.flv');
  let size = req.headers['content-length'];
  let uploaded = 0;

  req.pipe(novoArquivo);

  req.on('data', function(chunk){
    uploaded += chunk.length;
    var progress = (uploaded / size) * 100;
    res.write('progress: '+parseInt(progress, 10)+'%\n');
  });

  req.on('end', function(){
    res.end('Upload concluído!\n');
  });

  req.on('error', function(error){
    console.log('Error: '+error);
  });

});

server.listen(3000, function(){
  console.log('Server rodando em localhost:3000');
})
