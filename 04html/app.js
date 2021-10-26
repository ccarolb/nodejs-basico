const express = require('express');

const app = express();

//Especificando arquivos estáticos
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html') //sendFile não precisa de .end
})

app.listen(8080)