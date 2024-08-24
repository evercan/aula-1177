//1) Escreva uma função que receba um vetor de números e retorne a soma de todos 
 // os elementos.


//2) Escreva uma função que encontre o valor máximo em um vetor de números.


//3) Uma empresa está implementando um chatbot para um síndico de um condomínio. 
//Esse síndico tem a necessidade de saber num primeiro momento se o feedback dos 
//condôminos é um dos predefinidos por ele.
//A lista dos possíveis feedbacks é essa:
//const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
//O chatbot deve então receber o feedback digitado pelo usuário e retornar se esse 
//valor é válido ou não.
// Caso o usuário digite “Péssimo” ou “Ótimo” deve valer por “Pessimo” e “Otimo” 
//respectivamente.
//Para resolver esse problema, crie uma função chamada verificarFeedbackValido
//que deve:
//- Receber uma string.
//- Retornar um valor booleano caso esse feedback (string) seja um valor válido.
// - Utilize a função includes() no seu desenvolvimento.


// 4)Um hospital acaba de atualizar seu sistema de chamada por senhas. Bem como 
//já funcionava, esse sistema tem uma fila preferencial e cada paciente preenche 
//seu nome ao dar entrada no hospital.
/*Por estar ainda em desenvolvimento, a lista é composta apenas pelo nome completo
 das pessoas.
O secretário fará a chamada do próximo paciente, porém para gerar o relatório de 
tempo de espera ele precisa saber qual a posição do paciente na fila.
A lista que o secretário possui é essa aqui:
const pacientes = [
  "Bento Raimundo Cavalcanti",
  "Oliver Samuel Cardoso",
  "Geraldo Ryan Danilo Carvalho",
  "Isis Tatiane Sophie Santos",
  "Clarice Esther Moraes",
];
A próxima da fila é "Isis Tatiane Sophie Santos", agora o secretário precisa saber 
//qual a posição dela na fila, lembrando que a posição 0 não faz sentido para ele,
// devemos começar da posição 1.
Para resolver esse problema, crie uma função chamada verificarPosicaoPacienteFila 
que deve:
- Receber uma string (nome do paciente).
- Retornar um número com a posição do paciente da fila +1 (somado com o número 1), 
pois a posição na fila deve começar em 1.
- Utilize a função indexOf() no seu desenvolvimento.
*/