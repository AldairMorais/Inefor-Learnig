
/* Módulos é um conceito que entendi ser a mesma coisa que o include do php e tem um pouco de 
semelhanças com o conceito de componentes.
Permite usar um um trecho de código escrito em um arquivo diferente noutro arquivo.

A primeira coisa a se fazer p/ trabalhar com módulos é exportar o que queremos usar noutro.
Então... Para seja possível usar qualquer coisa nesse arquivo em qualquer outro arquivo no programa
é necessário exportar esso que se quer usar arquivo.
*/



var soma = (a,b) =>{
    return a+b;
}

// module.exports = soma; 
// Esse é o código que permite que a função soma seja acessível em qualquer parte do programa.
// Esse acima é o método de pegar uma única função



// Maneira de exportar variáveis
// Essa variável pode ser exportada no module também
var nome = "Minha calculadora v1";


module.exports = {
    soma,
    multi,
    div,
    sub,
    nome
} // Esse é o método de pegar mais de uma função


function multi(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function sub(a,b){
    return a-b;
}

// var sub = (function (a,b){
//     return a-b;
// })
// console.log(sub(20,5))
// var reslt = div(10, 2);
// console.log(reslt);
// var reslt1 = multi(10, 2);
// console.log(reslt1);


