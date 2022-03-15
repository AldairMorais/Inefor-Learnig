/*
var mostrarsite = true;
const site = "http://localhost/TailwindCss/VILA.ao/VILADocs/Home2.php"

console.log("Hello World")
console.log("My name is Aldair")
console.log("I'm learning node js with programming leader")

if (mostrarsite) {
    console.log(site)
}
*/

// esse ./ é usado quando o arquivo se encontra na mesma pasta.
// require() é o método usado para importar o arquivo externo que queremos usar aqui...
// Mas para poder usá-la tenho de armazená-la numa variável.

// var somaFuncao = require("./calculadora")
// Aqui tava recebendo apenas uma...



var calculadora = require("./calculadora")
// Aqui estou recebendo mais de uma...



// nomedavar.funcao
// calculadora.soma(10, 1) 
// Aqui posso acessar todas as funções nessa variável...

calculadora.nome = "Nome da clc mudado!";
console.log(calculadora.nome) // Maneira de chamar o nome daqui...

console.log(calculadora.soma(10, 1) );
console.log(calculadora.multi(10, 10) );
console.log(calculadora.sub(10, 1) );
console.log(calculadora.div(20, 10) );