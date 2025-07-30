const nome = "Matheus";
const sobrenome = "Moreira";
const idade = 19;
const peso = 67;
const altura = 1.77;

let imc = peso / (altura * altura);
let anoDeNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);