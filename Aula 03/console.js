function somar(a, b) {
    return a + b;
}
console.log(somar(5, 10)); // Correto: 15
//console.log(somar(5, "10")); // Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
function saudacao(nome, saudacaoPadrao) {
    if (saudacaoPadrao === undefined) {
        saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("Gabriel")); // "Olá Gabriel"
//O ? indica que o parâmetro é opcional. 
//Parâmetros rest:
function somaTudo() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, num) { return total + num; }, 0);
}
console.log(somaTudo(1, 2, 3, 4)); //10
// o ... permite o armazenamento de diversos dados e os coloca em uma array//
//Retorno Void//
function exibirMensagem(mensagem) {
    console.log(mensagem);
}
exibirMensagem("Quero que essa porra de linguagem tipada va para a casa do karalho");
//o void indica que a função nao deve retornar um valor//
//função de seta//
var quadrado = function (numero) { return numero * numero; };
console.log(quadrado(92)); //25//
//infêrencia de tipo//
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 34));
//sobrecarga de funções//

//função generica
function inverterArray(array) {
    return array.reverse();
}
console.log(inverterArray([1, 2, 3]));
console.log(inverterArray(["a", "b", "c"]));
