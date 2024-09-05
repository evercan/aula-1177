// 1)Escreva um programa em JavaScript que imprima todos os números pares de 1 a 20.

// 2)Crie uma função que calcule a média de um array de números.
// function contaVogais(str) {
//     if (typeof str !== "string") return 0;
//     const vogais = "aeiouAEIOU";
  
//     let count = 0;
  
//     for (let char of str) {
//       if (vogais.includes(char)) count++;
//     }
  
//     return count;
//   }

// 3)Escreva um programa que, dada uma string, conte o número de vogais nela.
// const palavra = "paralelepipedo";
// const arrVogais = ["a", "e", "i", "o", "u"];

// let cont = 0;
// for (const letra of palavra) {
//     if(arrVogais.includes(letra)){
//         cont++;
//     }
// }


// 4) Escreva um programa que use um laço for para imprimir os números de 1 a 100 
//no console, mas substitua os números divisíveis por 3 por "Fizz" 
// e os números divisíveis por 5 por "Buzz". 
// Para números divisíveis por ambos 3 e 5, exiba "FizzBuzz".

// function fizzBuzzUmaCem() {
//     for (let i = 1; i <= 100; i++) {
//       let output = "";
//       if (i % 3 === 0) output += "Fizz";
//       if (i % 5 === 0) output += "Buzz";
//       console.log(output || i);
//     }
//   }

// 5) Crie um array de objetos, onde cada objeto representa um aluno com 
// propriedades como nome e notas (um array de notas). 
// Use um laço for...of para iterar sobre o array de alunos e, para cada aluno,
// use um laço for para calcular a média de suas notas. 
// Exiba o nome do aluno e sua média no console.

const arrayObj = [
    {nome: "João", notas: [8, 9, 6]}
    // {nome: "Pedro", notas: [7, 9, 9]},
    // {nome: "Maria", notas: [10, 9, 9]}
];

console.time();
for (const aluno of arrayObj){
    let media = 0;
    for (const nota of aluno.notas){
        media += (nota / aluno.notas.length);
    }
    console.log(`Nome: ${aluno.nome} \nNota: ${media.toFixed(2)}`);
}

console.timeEnd();
// 6) Percorrer uma string e contar a frequência de cada caractere, ou seja quantas vezes cada um tem na string.

//7) Dado um array de arrays, encontrar a soma de todos os números contidos nos arrays internos.
// const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// 8) Escreva um loop para calcular o fatorial de um número fornecido.

// const frase = 'Esta é uma frase de exemplo';
// const frequencia = {};

// for (let caractere of frase) {
//     if (caractere !== ' ') {
//         if (frequencia[caractere]) {
//             frequencia[caractere]++;
//         } else {
//             frequencia[caractere] = 1;
//         }
//     }
// }

// console.log(frequencia);