// estrutura de controle para cria loops

// while e do while

//while(condicao){
    // codigo que vai ser executado
//}

//let i;
//i++
//console.log(i)

// valida antes execucao
//  let i= 0;
// while(i < 5){
//     console.log(i);
//      i++;    
// }

// executa o bloco ao menos 1 vez

// do {
//     // codigo a ser executado
// }while(condicao)

// let i;
// do {
//     console.log('mensagem '+ i);
//     i++
// }while(i < 5)

    console.log(Math.floor(Math.random()*100));
let numero;
do{
    numero = Math.floor(Math.random()*100);
    console.log(numero);
 }while(numero % 5 ===0)