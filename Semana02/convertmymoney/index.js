const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})


app.listen(3000, err => {
  if (err)
    console.log('deu ruim ao tentar iniciar o server', err)
  else
    console.log('deu bom pra iniciar o server')
})

