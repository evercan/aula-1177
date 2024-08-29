// Array associativo
// é uma estrutura de dados que associa valores e chaves ou indices

var pessoa = [];
pessoa["nome"] = "Everton"
pessoa["idade"] = 41;

//console.log(pessoa["idade"]);

const sinonimos = {
    "feliz" : ["alegre", "contente", "radiante"],
    "triste" : ["melancolico","abatido", "deprimido"],
    "rapido" : ["eficiente", "agil", "veloz"]
}
//console.log(sinonimos.triste);

// New Map()
// Permite mapear as chaves para valores de forma flexivel

const mapa = new Map();

//mapa.set("feliz",sinonimos.feliz);
//mapa.set("triste",sinonimos.triste);
//mapa.set("frio", "gelado");

//mapa.set("rapido",["eficiente", "agil", "veloz"]);
// inserir / atualizar chave


mapa.set(Math.floor(Math.random()*100), {nome:"Alice", idade:30});
mapa.set(Math.floor(Math.random()*100), {nome:"Bob", idade:25});
mapa.set(Math.floor(Math.random()*100), {nome:"Everton", idade:30});
mapa.set(Math.floor(Math.random()*100), {nome:"João", idade:50});

console.log(mapa);

mapa.forEach((valor,chave) => {
  //  console.log(`Chave: ${chave}, valor: ${valor.nome}, ${valor.idade}`)
});


let arrayDePares= [...mapa];
//console.log(arrayDePares);
// apagar a chave
//mapa.delete("feliz");

// verificar se existe resultado em boolean
//console.log(mapa.has("agil"));

// retorna o valor associado a chave
resposta = mapa.get(4);
//console.log(resposta);
//console.log(`usuario numero do ID 2: nome : ${resposta.nome}, Idade : ${resposta.idade}`);

//console.log(mapa);

const produtos = [
    { nome: "Produto A", preco: 70 },
    { nome: "Produto B", preco: 40 },
    { nome: "Produto C", preco: 55 },
  ];
  const map = new Map();
  map.set(1, produtos);

 // console.log(map);