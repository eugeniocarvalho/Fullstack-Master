//fs é filesystem, serve pra ler ou gravar arquivos do disco
const fs = require('fs')

console.log('inicio1')
//assincrona
fs.readdir('./', function (error, files) {
  if (error)
    console.log('erro: ', error)
  else
    console.log(files)
})

console.log('fim1')

console.log('inicio2')
//sincrona
console.log(fs.readdirSync('../'))
console.log('fim2')