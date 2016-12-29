'use strict'

const EventEmitter = require('events').EventEmitter;

let logger = new EventEmitter();

logger.on('error', function(message){
  console.log('Erro: '+message);
});


logger.emit('error', 'Olá meu error!')
