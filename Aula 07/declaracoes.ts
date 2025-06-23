let nome: string = 'João';
let idade: number = 16;
let estaAtivo: boolean =  true;

//arrays 
let numeros: number [] = [1,2,3,4,5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos '];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number > = ['Ana',25, 'Carlos', 30];

//Tuplas
let pessoa: [string , number] = ['Maria', 30];

let id: number | string = 123;
id = 'ABC123';

// Interaces - Sao usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opcional
}

let novo_usuario: Usuario = {
    nome: 'Amanda' ,
    idade :18
};
