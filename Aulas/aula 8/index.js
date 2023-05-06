/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCM = 1.80;

let imc = peso / (alturaEmCM *alturaEmCM); //peso / (altura * altura)

let anoNascimento = 2023 - idade ;

console.log(imc);
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, ' anos,',' pesa',peso ,'kg tem', alturaEmCM, 'e seu IMC é de', imc);
console.log(nome, sobrenome,'nasceu em', anoNascimento);

// template strings

console.log(nome+ ' ' +sobrenome + ' tem ' + idade + 'anos,' + 'pesa ' + peso + 'kg' + ` tem ${alturaEmCM} de altura + e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);