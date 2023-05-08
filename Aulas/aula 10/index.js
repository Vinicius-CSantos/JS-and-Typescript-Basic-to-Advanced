/*
primitive data types


*/

const nome = 'Vinicius'; // String
const nome1 = "Vinicius"; // String
const nome2 = `Vinicius`; // String
const num = 1; // number
const num2 = 10.42; //number

let nomeAluno; // undefined = não aponta para algum local na memória.
let sobrenomeAluno = null; // NULO - aponta para lugar nenhum não declarado, null é utilizado quando queremos desconfigurar uma variável (VAZIO).
const boolean = true; // True or False (Valor lógico).
const aprovado = true; //Valor boolean explicito. 

const a = [1, 2];
const b = a;


console.log(a, b);

/*
Quando trabalhamos com valores de referência e alteramos a referencia logo o valor original é substituido.

Como o exemplo abaixo: 

b.push(3)
console.log(a, b);

Resposta:
[ 1, 2, 3] [ 1, 2, 3] 

*/