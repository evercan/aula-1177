// funcoes e assinaturas
// reaproveitar codigo

function soma(a,b){
    return a+b
}

const substracao = function(a,b){
    return a-b
}

// Assinatura da Funcao
// NomedoFuncao(parametroTipo1, parametroTipo2, parametroTipoN...) -> RetornoTipo

// soma (number,number) -> number

// Parametros nomeados
// usando objeto para passar com nomes especificos
// {
//     nome: 'Everton',
//     saudacao: 'ola',
//     idade: 41
// }

function saudacao({nome,saudacao,idade,notas=[]}){   
    return `${saudacao}, ${nome} e idade ${idade}, ${notas}`
}

// console.log(saudacao({
//     nome:"Everton",
//     idade: 41,
//     saudacao: "Ola",
//     notas: [9,10,70]
// }));

function saudacao2(pessoa){
    const nome = pessoa.nome;
    if(cep){

    }
    //return `${pessoa}`
    console.log(pessoa);
}

const pessoa = {
    nome:"Everton", 
    saudacao:"Ola", 
    idade:41,
    notas: [10,5,6],
    endereco:{
        rua: "Rua X"
    },
    cep: 956800
}

// composição e encadeamento
// composição de funções - combina funcoes
//encadeamento - é a pratica de chamar varias funções em sequencia

const numeros = [1,2,3,4,5,6,7,8,9,10]

const resultado = numeros
.filter(numero=> numero % 2 ===0)  //filtrando os numeros pares
.map(numero1=> numero1 * 2) // dobrei os numeros pares
.reduce((soma,numero2) => soma+numero2,0) // soma todos os numeros do array que sobrou

console.log(numeros);
console.log(resultado);

