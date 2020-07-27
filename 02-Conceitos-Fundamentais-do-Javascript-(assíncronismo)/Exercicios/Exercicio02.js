/*
A função readdir disponível no módulo fs do Node, permite ler um diretório, e retornar seu conteúdo como um vetor. Crie uma versão em Promise da função.

Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {})
*/

const { readdir } = require('fs')

const dir = directory => new Promise((resolve, reject) => {
  readdir(directory, (err, files) => { 
    if (err)
      reject(err)
    else
      resolve(files)
  })
})

dir('./').then(files => console.log(files))