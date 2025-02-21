/*
Interfaces e tipagem avançada -  Funções
*/

// interface tipando a funcao multiplicar que recebe 2 parametros
// do tipo number, e retorna um number
interface Multiplicacao{
    (a:number, b:number): number;
}

//definindo a funcao
const multiplicar: Multiplicacao = (a, b) => a * b;

//chamando a funcao
console.log(multiplicar(2,20));
console.log(multiplicar(34244,235222));

