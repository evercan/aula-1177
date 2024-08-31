// Truthy - sao tratados com verdadeiros quando o contexto boolean
// Falsy - sao tratados falso

// Valores não vazios em geral são verdadeiros / true

// string
// if("Ola Mundo"){
//     console.log('Verdadeiro')
// }

// valores numericos
// valores verdadeiros - valores maiores que zero e menores que zero
//true  = 1
//false = 0

// if(0){
//     console.log('Verdadeiro')
// }

// valores falsos
// null, undefined, NaN, "", 0, false

// let variavelNaoDefinida;
// if(variavelNaoDefinida){
//     console.log('verdadeiro')
// }else{
//     console.log('falso');
// }

let variavelNaoDefinida = 10 * "texto";
// if(variavelNaoDefinida){
//     console.log('verdadeiro')
// }else{
//     console.log('falso');
// }
// if(isNaN(variavelNaoDefinida)) {
//     console.log('verdadeiro')
// }else{
//     console.log('falso');
// }

// let variavelArray = [];
//  if(variavelArray){
//      console.log('verdadeiro')
//  }else{
//      console.log('falso');
//  }

let variavelObj = {};
 if(variavelObj){
     console.log('verdadeiro')
 }else{
     console.log('falso');
 }