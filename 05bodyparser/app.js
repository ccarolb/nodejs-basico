const express = require('express') //1º require express
const bodyParser = require('body-parser') //2º require body-parser, pois trabalha c/ express.

const app = express();

//Implementando o bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configurando as rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/form.html') //Implementa o formulário na api.
})

app.post('/receive', function (req, res) {
    res.write(`O nome digitado foi: ${req.body.name}`)
    res.end();
})

app.listen(8080);