const fs = require('fs')

//promise + async / await

//convertendo readfile pra primise

const readFile = path => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err)
      reject(err)
    else
      resolve(data)
  })
})

//convertendo readfile pra prpmise

const writeFile = (path, data) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, (err) => {
    if (err)
      reject(err)
    else
      resolve()
  })
})

module.exports = {
  readFile, writeFile
}