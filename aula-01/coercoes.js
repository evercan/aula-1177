// coerção implicita

//de numero para string
 var numero = 40
 
 var texto1 = "O numero é: " +numero+ "ff"

 
 // de string para numero
 var texto2 = "10"
 var numero2 = Number(texto2) + 2
 var numero4 = +texto2 + 2 
 var numero3 = texto2 * 2
 //console.log(numero4);

 //transforma o tipo em booleano

var valorNum = "Ola"
var isVerdadeiro = !!valorNum

//console.log(isVerdadeiro);

//Explicita

//converter de string para numero

var valorInteiro = "50"
var valorFlutuante = "50.80"
//var numero3 = parseInt(valorInteiro)
var numero3 = parseFloat(valorFlutuante)
var numero5 = Number(valorFlutuante)
//console.log(numero5)

// converter de numero para string
var numeroParaConversao = 65;
var textoConvertido = numeroParaConversao.toString();
var textoString = String(numeroParaConversao);

// Usando template literal
var texto = `O numero é: ${numero}`

// conversao explicita de boolean para numeros

var valorBooleano = true;

var numero5 = Number(valorBooleano)

console.log(numero5);

var valorBolean = Boolean(numero5)

console.log(valorBolean);

