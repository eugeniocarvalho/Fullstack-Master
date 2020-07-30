//no next existe um processo de build que transforma o import pro require
const express = require('express')

// a aplicação em express se da pela chamada do express
const app = express()

// ele lida com caminho diretorios
const path = require('path')

//colocando qual sistem de view ele vai utilizar
app.set('view engine', 'ejs')

// definir meus views
// em qual diretorio vamos salvar esses templates, esses arquivos que pertencem ao view engine
//pegar o diretorio atual, que é a constante __dirname e unir com o nome views
//quando estamos lidando com a pasta views/, nao precisa reiniciar o servidor pra atualizar esses arquiso.
app.set('views', path.join(__dirname, 'views'))

//é necessario definir as rotas pra ter algo disponivel
app.get('/', (req, res) => {
  //é possivel retornar um JSON 
  //res.send({name: 'eugênio'})
  res.send({ name: 'eugênio' })
})

//é possivel fazer outros endPoints
app.get('/users', (req, res) => {
  res.send([{ name: 'Eugênio' }])
})

//com isso, fica assim, por causa da linha 26
app.get('/page', (req, res) => {
  res.render('page', {name: 'Eugênio'})
})



//Se eu quiser o next ou uma outra aplicação querer pegar esses dados, eles ja estao em JavaScript, entao é mais facil lidar com a plataforma web, é aqui onde o express tem o seu melhor 

//pro app ficar disponivel, é necessario fazer um listen, ele precisa "ouvir" se alguem esta chamando ele
//passando a porta e um erro
app.listen(3000, err => {
  console.log(err)
})