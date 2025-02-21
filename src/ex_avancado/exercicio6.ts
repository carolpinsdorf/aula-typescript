/*
Manipulacao avancada de tipos
*/

// tipando objetos simples
type Estudante = {
    nome: string;
    curso: string;
}
type Trabalhador = {
    empresa: string;
    cargo: string;
}

//criando um objeto com intersection types
type EstudanteTrabalhador = Estudante & Trabalhador;

// exemplo de uso
const estudante1: EstudanteTrabalhador = {
    nome: "Carol",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "IBM",
    cargo: "Early Associate - Back End Developer"
}
console.log(estudante1);