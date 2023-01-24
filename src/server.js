const porta = 3003
const express = require("express")
const app = express()
const database = require("./database")

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get("/produtos", (req, res, next) => {
    res.send(database.getProdutos())
})

app.get("/produtos:id", (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})


app.post("/produtos", (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}`)
})