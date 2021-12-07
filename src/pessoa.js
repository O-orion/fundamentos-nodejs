const express = require('express') //importando o express
const { v4: uuidv4 } = require("uuid") //utilizando a biblioteca UUID, com a v4 para gera id aleatorios


const app = express() //ativando express

//JESUS CRISTO É O SENHOR HOJE E SEMPRE;


app.listen('4444') //ligando express na porta 44444
app.use(express.json())
const custorms = []

app.get("/", (request, response) => {
    return response.status(200).json(custorms)
})

app.post('/account', (request, response) => {
    const {cpf, name} = request.body; //DESESTRURAÇÃO, pegando somente nom é o cpf
    const id = uuidv4(); //gerando um ID aleátorio
    custorms.push({
        id,
        cpf,
        name,
        statement: []
    })
    console.log(custorms)
    return response.status(201).send("Jesus Cristo é o Senhor")
})



