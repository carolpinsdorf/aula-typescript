/* Generics */
/*
Funcao generica que recebe um array de qualquer tipo, inverte a ordem do conteudo
e retorna uma array do mesmo tipo com a ordem invertida
@ param itens T[]
*/
function inverterArray<T>(itens: T[]): T[]{
    return itens.reverse()
}

// Exemplos de uso
const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];

console.log(inverterArray(numeros));  
console.log(inverterArray(strings));  