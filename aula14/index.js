//function saudacao(nome) {
//    return `Bom Dia ${nome}!`;
//}

//const variavel = saudacao('Luiz');
//console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

//const resultado = soma();
//console.log(resultado);


//console.log(soma(2, 3));
//console.log(soma(3, 1));
//console.log(soma(5, 10));

const raiz = function (n) {  // <- mesma coisa ->   // const raiz = n => n ** 0.5
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));


