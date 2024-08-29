const prompt = require('readline-sync');
// if, else ,else if, switch, ternario

// instalação do prompt
// https://www.npmjs.com/package/readline-sync
// npm i readline-sync


//if(condicao){
    // codigo a ser executado a se a condição for verdadeira
//}

//let idade = 11;
//let idade =prompt.question('Digite sua idade? ');
 //prompt("Digite sua idade?");

// if(idade >= 18){
//     console.log('Você é maior de idade');
// }else{
//     console.log('Vou pra casa, você é dimenor');
// }

let nomeDigitado = "Everton"

// if(nomeDigitado){
//     console.log('nome encontrado');
// }else{
//     console.log('nome não encontrado');
// }

// let suaIdade = 3;
// let idade =prompt.question('Digite sua idade? ');de <=2 ){
//     valorVenda = 10;
// }else if(suaIdade <=12 ){
//     valorVenda = 12;
// }else if(suaIdade <18 ){
//     valorVenda = 15;
// }else if(suaIdade <=60 ){
//     valorVenda = 20;
// }else {
//     valorVenda = 25;
// }

//console.log(`O valor a ser pago sera de R$ ${valorVenda}`);



/*
    1 - listar
    2 - deletar
    3 - pegar por id
    4 - sair
    5 - opção invalida
*/



// const opcao = 10
console.log(`
1 - listar 
2 - deletar
3 - pegar por id
4 - sair`);

// let opcao = prompt.questionInt('Digite a opção desejada? ');

// switch(opcao){
//     case 1 :
//         console.log('Listar')        
//         break;
//     case 2 :
//         console.log('deletar')
//         break;
//     case 3 :
//         console.log('pegar por id')
//         break;
//     case 4 :
//         console.log('sair');
//         break;
//     default:
//         console.log('Opção Invalida')    
// }


// operador ternario

//       IF    THEN     ELSE
// condition ? expr1 : expr2

let idade = 25
// if(idade >= 18){
//     console.log('Você é maior de idade');
// }else{
//     console.log('Vou pra casa, você é dimenor');
// }

const maior= `A sua idade de ${idade} é maior de Idade`;
const menor= `A sua idade de ${idade} é considerado menor`;
const maiorDeIdade = idade >= 18 ? maior: menor

console.log(maiorDeIdade);
