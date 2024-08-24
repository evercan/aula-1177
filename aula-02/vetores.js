// vetor de numeros
// posicoes
            // 0,1,2,3,4
let vetor = [1,11,2,50,5,60]

//console.log(vetor);

// vetor de string

//console.log(frutas[6]);

// vetor misto
          // 0, 1   , 2   , 3
let misto = [5,"Ola", true, {nome:"joao", endereco: "rua X"}];

// console.log(misto[3]);
// spread
let nums = [1,2,3,4,...misto];
//console.log(nums);
//console.log(frutas.length); // quantidade de itens do array
//console.log(frutas.includes("maça")); // retorna boolean
//console.log(frutas.indexOf("uva")); // posição da fruta
//console.log(frutas.toString()); // converto para string
//console.log(frutas.join("; ")); // transforma separado por um delimitador
//console.log(frutas.sort()); // ordem alfabetica

let frutas = ["maça", //0 
                    "banana", //1
                    "uva", //2 
                    "pera", //3
                    "jaca", //4 
                    "laranja" //5
                    //"limao" //6
                    ];

//frutas.splice(2,4); // posição de start e a 
                      // quantidade de elementos
                                // remove do array original
//console.log(frutas);
//console.log(frutas.slice(2,4)); // posição de start 
                                // posição final 
                                // cria uma copia / não mexe no original
//console.log(frutas);

//frutas.push("limao"); // inseri no ultimo 
//console.log(frutas.pop()); // remove do ultimo
// FIFO

//frutas.unshift("tomate"); // coloca na posição 0
frutas.shift(); // remove da posição 0
console.log(frutas);
