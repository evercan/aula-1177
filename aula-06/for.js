// for, for ...in , for ... of

//for(inicialização;condicao; incremento){
    // codigo a ser repetido
//}

// controle preciso do inicio ao fim da iteração, condição, incremento de iteração
// laço tradicional, como indexes de arrays
for(let i=0; i<=5; i++){
   // console.log(i);
}

//for ..in - iterar as propriedades enumeraveis de um objeto
// é util acessar as chaves e valores do objeto

const obj = {a:1, b:2, c:3}

for(const key in obj){
 //   console.log('chave: '+ key, 'valor: '+ obj[key])
}

// for .. of - iterar sobre os valores dos arrays

const array = ["leao","cachorro",323,"pato","elefante",{a:1,b:2},true,[59,310193,93]]

for(const item of array){
  //  console.log(item);
}

const meuArray = new Set([1,1,2,2,3,4,5]);

//console.log(meuArray);

for(const value of meuArray){
    console.log(value);
}