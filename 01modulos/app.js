//Importar funções de cálculos

const calculos = require('./calculos')

//Chamar as funções importadas

const multiplicacao = calculos.multiplicar
console.log(multiplicacao(1, 2))


const soma = calculos.somar
console.log(soma(2, 2))