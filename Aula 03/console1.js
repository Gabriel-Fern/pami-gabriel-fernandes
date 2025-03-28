function somar(a, b) {
    return a+b;
}
console.log(somar(5,"10")); //resultado inesperado: "510"

//parâmetro padrao
function saudacao(nome, saudacaoPadrao) {
    if (saudacaoPadrao === undefined) {
        saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + ", " + nome + "!";
}
console.log(saudacao("Gabriel")); //Olá, Gabriel

//parametro rest

function somarTudo(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4)); 

//funções em seta//
    const quadrado = (numero) => numero * numero;
console.log(quadrado(5)); //25