const nome = "Matheus"; //string

const num1 = 10; //number

let nomeAluno; //undefined = não aponta pra local nenhum na memória

const sobrenomeAluno = null; //nulo = não aponta pra local nenhum na memória

const aprovado = false; //boolean = true ou false (valor logico)

console.log(typeof nome, nome);

const a = [1, 2 ];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d); // 2 | 2

c = 3;
console.log(c, d); // 3 | 2

