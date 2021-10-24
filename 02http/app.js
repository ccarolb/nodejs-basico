//1 - Importando o módulo http, que é padrão do nodejs no require.
const http = require('http')


//2 - Criando o servidor:

//2.1 - http.createServer()
//             2.2- função(req, res)
http.createServer(function (req, res) {
    res.write('Olá, mundo!') //2.2.1 - res.ação()
    res.end()                             //2.2.1 - res.end()
}).listen(8080) //2.3 - adicionando a porta com listen()

//3 - rodar o node app.js