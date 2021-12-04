const express = require('express'); // importando

const app = express(); //chamando ou ativando o express

//
app.listen('3333') //Ligando o express(nossa aplicação) na porta que passarmos pelo parãmetro

app.get('/', (request, response) => {
    return response.json({verdade: 'JESUS CRISTO É O SENHOR!!'}) //enviando uma resposta em Json podendo retorna um array,objeto e nenhum dado
   // return response.send('<h1 style="text-align: center">Jesus Cristo é o SENHOR!</h1>') //enviando uma resposta para quem está acessando
}) //vai receber o path(caminho) e uma arrow function, com dois parâmetros, request = tudo aquilo que está recebendo da nossa requisição, response tudo que nossa resquisição vai responder

