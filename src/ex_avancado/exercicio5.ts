/*
Manipulacao avancada de tipos
*/

// Alias RespostaServidor pode ser tanto uma string quanto um boolean
type RespostaServidor = string | boolean;

//funcao processarResposta que recebe 
function processarResposta(resposta: RespostaServidor){
    if (typeof resposta === "boolean"){
        console.log(resposta ? "Operação bem sucedida" : "Operacão falhou");
    } else{
        console.log(`Mensagem do servidor: ${resposta}`);
    }
}


//exemplos de uso
processarResposta(true);
processarResposta(false);
processarResposta("Erro 500");