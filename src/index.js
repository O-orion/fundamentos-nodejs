const express = require('express'); // importando

const app = express(); //chamando ou ativando o express
app.use(express.json()) //permitindo o recebindo de json no body

//
app.listen('3333') //Ligando o express(nossa aplicação) na porta que passarmos pelo parãmetro

app.get('/', (request, response) => {
    const query = request.query
    console.log(query)
    return response.json({verdade: 'JESUS CRISTO É O SENHOR!!'}) //enviando uma resposta em Json podendo retorna um array,objeto e nenhum dado
   // return response.send('<h1 style="text-align: center">Jesus Cristo é o SENHOR!</h1>') //enviando uma resposta para quem está acessando
}) //vai receber o path(caminho) e uma arrow function, com dois parâmetros, request = tudo aquilo que está recebendo da nossa requisição, response tudo que nossa resquisição vai responder

app.post('/add', (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(["Jesus Cristo é bom","Jesus Cristo é maravilhoso"])
})

app.put("/altera/:id", (request, response) => {
    const params = request.params;
    console.log(params)
    return response.json(["Te amo Jesus Cristo"])
})

app.delete("/delet/:id", (request, response) => {
    response.json(["Jesus Cristo é bom"])
})