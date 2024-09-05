// try / catch / finally

// try {
//     // codigo que pode lançar exceções
// } catch (e) {
//     // Trata a exceção
//     console.error(e);
// }
// //bloco opcional
// finally{
//     // executado indenpedente de exceções
// }
    try {
        const resultado = 10 / 2;
        if(resultado == 5){
            throw new Error('o valor do resultado não confere');
        }
    } catch (error) {        
        console.error({
            "data": Date(),
            "linha de execucao": 20,
            "nome-arquivo" : "tratamento-erros.js",
            "message":error
        });
    } finally{
        console.log('Este bloco sempre será executado')
    }

