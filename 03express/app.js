//Como o express é um módulo, devemos importá-lo.
const express = require('express')

//Criamos uma variável para obter acesso às funcionalidades do express.
const app = express();

//Criando uma rota:

//.get: método de criação de rota    //'/': raíz = localhost:8080
app.get('/', function (req, res) {
    res.write('Oi, mundo!')
    res.end();
})

//Servidor para a rota:
app.listen(8080);
