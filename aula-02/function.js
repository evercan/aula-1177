function soma(valorA, valorB){
    let resultado = valorA + valorB;
    return resultado;
}
let numero1 = 50
let numero2 = 40
let somaTotal = soma(numero1,numero2);

//console.log(somaTotal);

const subtracao = function(valorA,valorB){
    let resultado = valorA - valorB;
    return resultado;
}

let resultadoSub = subtracao(10,5);

console.log(resultadoSub);

const dividir = (valorA, valorB) => valorA / valorB

const multiplicar  = (valorA,valorB) => {
    let resultado = valorA * valorB;
    return resultado;
}

let numero4 = 50
let numero5 = 40
let resultMulti = multiplicar(numero4,numero5);
console.log(resultMulti);

const curry = (a) =>{
    //console.log(' valor a = ' + a);
    return (b) =>{
       // console.log(' valor b = ' + b);
        return (c) =>{
            return a+b+c
        }
    }
}

let total = curry(10)(40)(80);

console.log(total);





