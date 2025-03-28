function somar(a: number, b: number): number {
    return a + b;
  }
console.log(somar(5, 10)); // Correto: 15
//console.log(somar(5, "10")); // Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.

  function saudacao(nome: string, saudacaoPadrao?: string): string {
    if (saudacaoPadrao === undefined) {
      saudacaoPadrao = "Olá";
    }
    return saudacaoPadrao + ", " + nome + "!";
  }
  console.log(saudacao("Gabriel")); // "Olá Gabriel"
  //O ? indica que o parâmetro é opcional. 
  //Parâmetros rest:
  function somaTudo(...numeros: number []): number {
    return numeros.reduce((total, num) => total + num, 0);
  }
  console.log(somaTudo(1, 2, 3, 4)); //10
// o ... permite o armazenamento de diversos dados e os coloca em uma array//
//Retorno Void//
  function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
  }
  exibirMensagem("Quero que essa porra de linguagem tipada va para a casa do karalho");
  //o void indica que a função nao deve retornar um valor//

  //função de seta//
  const quadrado = (numero: number): number =>  numero * numero;
console.log(quadrado(92)); //25//

//infêrencia de tipo//
  function multiplicar(a: number, b: number) {
    return a*b;
  }
console.log(multiplicar(3, 34));

//sobrecarga de funções//
function somar(a: number, b: number): number;
function somar(a: string, b: string): string;
function somar(a: any, b: any): any {
  return a + b;
}
console.log(somar(5, 10)); // 15
console.log(somar("Olá, ", "TypeInferno!")); // "Olá, TypeScript!"

//função generica
  function inverterArray<T>(array: T[]): T[]{
return array.reverse();
  }
console.log(inverterArray([1, 2, 3]));
console.log(inverterArray (["a", "b", "c"]));