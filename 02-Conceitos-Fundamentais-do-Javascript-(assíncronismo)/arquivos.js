const { readFile, writeFile } = require('./fs-promise')

/*
fs.readFile('temporizadores.js', (err, data) => {
  fs.writeFile('temporizadores-copy.js', data, (err) => {
    console.log('Arquivo copiado')
  })
})
*/


/*
readFile('temporizadores.js')
    .then(data => writeFile('copia-promise.js', data))
    .then( () => console.log('arquivo-copiado'))
    .catch(err => console.log(err))
*/

const copyFile = async () => {
  console.log('ola async/await')
  try {
    const data = await readFile('temporizadores.js')
    await writeFile('copia-async-await.js', data)

    //console.log(String(data))
    console.log('arquivo lido e escrito')
  } catch (error) {
    console.log('erro', error)
  }
}

copyFile().then(() => console.log('fim do async/await'))