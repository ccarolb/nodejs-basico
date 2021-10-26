const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html') //sendFile não precisa de .end
})

app.listen(8080)