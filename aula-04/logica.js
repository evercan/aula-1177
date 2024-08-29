// && AND
// || OR
// ! NOT

// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual
// == igual - valor
// === estritamente igual - valor e tipo 
// != diferente
// !== estritamente diferente

let numero1 = "10"
let numero2 = 10
// if(numero1 === numero2){
//     console.log('verdade')
// }else{
//     console.log('falso')
// }

//console.log(false && true);
//console.log(!false && !true);

const a = 3
const b = -2
             // true true
//console.log(a > 0 || !b < 0)
               // false || (false && true)
const valor = 2 == 3 || (4 < 0 && 1 ===1 )

//console.log(valor);

// let validacao = null // falso
// let validacao = NaN // falso
// let validacao = undefined // falso
// let validacao = "" // falso
// let validacao = "" //verdadeiro

//let validacao; 
let validacao = 0

//console.log(validacao);
if(validacao){
    console.log('verdadeiro')
}else{
    console.log('falso')
}