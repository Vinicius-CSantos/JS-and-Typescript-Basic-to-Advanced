// Váriavel constante - Não podemos criar constantes com palavras reservadas
// Utilizamos o camelCase
// Constantes são case-sensitive
// Constante precisa ser criada e utilizada ao mesmo tempo.
// Não podemos modificar o valor de uma constante
// Não utilize VAR, utilize const. 


// const nome = 'Vinicius';
// console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(resultadoDuplicado);

console.log(typeof (primeiroNumero + segundoNumero));