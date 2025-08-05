/*
 * Aritiméticos  
 * + = Adição / Concatenação
 * - = subtração
 * * = multiplicação
 * / = divisão
 * ** = potencia 
 * % = resto da divisão
 * Incremento = ++
 * Decremento = --
*/

const num1 = 2;
const num2 = 10;
const num3 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + num3 * num2);
console.log((num1 + num3) * num2);

let contador = 1;
contador++; //2 
contador++; //3 
++contador; //4 
console.log(contador);

let contar = 3;
contar *= 2;
console.log(contar);

// NaN - Not a number parseInt (inteiro), parseFloat (decimais)
const num4 = 10;
const num5   = Number('5.2');
console.log(num4 + num5);
console.log(typeof num5);

