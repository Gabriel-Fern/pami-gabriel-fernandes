//declarações de variáveis
let nome: string = 'Gabriel';
let idade: number = 17;
let estaAtivo: boolean = true;

//arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

//tuplas
let pessoa: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//interfaces - são usadas para definir estruturas de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; 
}

//Utilizar elas fica assim:
let novo_usuario: Usuario ={
    nome: 'Amanda',
    idade: 18
};

console.log(novo_usuario);
