// Objetos
//chave: valor
// key: value

function soma(valorA, valorB){
    return valorA + valorB
}

let pessoa = {
    nome: "Everton",
    idade: 41,
    torcida: "Internacional",
    altura: 1.78,
    recebe_emails: true,
    endereco : {
        rua: "Rua Henrique",
        numero: 178,
        complemento: "Apto 102",
        cidade: "Joinville",
        estado: "SC",
        somatodas: soma(10,50)
    }
}
//console.log(pessoa);

console.log(JSON.stringify(pessoa, null, 2));

//pega as chaves do objeto
let chaves = Object.keys(pessoa);

//console.log(chaves);

let valores = Object.values(pessoa.endereco);

//console.log(valores);
let pessoa_dois = {...pessoa}

//console.log(pessoa_dois);

pessoa_dois.nome = "João"
pessoa_dois.torcida = "Fluminense"
pessoa_dois.idade = 25;
pessoa_dois.endereco.rua = "Rua Nove"
pessoa_dois.teste = "novo"


//console.log(Object.keys(pessoa).length);
// percorrer o dicionario do objeto
for(let key in pessoa){
   // console.log("key : "+ key  + ", value : " + pessoa[key]);
    for(let key2 in pessoa.endereco){
// console.log("key : "+ key2  + ", value : " + pessoa.endereco[key2]);
    }
}
// 
let pares = Object.entries(pessoa.endereco);

//console.log(pares);