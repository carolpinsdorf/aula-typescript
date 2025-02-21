/* Generics */
/*
interface genetica de um repositorios, o metodo sem retorno "salvar" que recebe 
um dado generico
@ param dado: T
e outro metodo obterTodos, sem parametros que retorna uma lista de dados genericos
*/
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

//interface para definir usuario
interface Usuario{
    nome: string;
    email: string;
}

//implementacao da inteface generica de repositorio
class RepositorioUsuarios implements Repositorio<Usuario>{
    private usuarios: Usuario[] = [];

    salvar(usuario: Usuario): void{
        this.usuarios.push(usuario);
    }
    obterTodos(): Usuario[] {
        return [...this.usuarios];
    }
}

// exemplo de uso
const repositorio = new RepositorioUsuarios();

repositorio.salvar({nome: "Carol", email: "carol@fiap.com"});
repositorio.salvar({nome: "Milena", email: "milena@paradiso.com"})

console.log(repositorio.obterTodos());
