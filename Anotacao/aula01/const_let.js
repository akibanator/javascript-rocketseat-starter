//const é uma variável constante, ou seja, o valor não pode ser alterado.
const a = 1;
a = 3; //Não irá alterar o valor e 'a' continuará valendo 1


//const pode ser mutável, ou seja, o valor dentro do objeto declarado pode ser mutado.
const usuario = {nome: 'Akiba'};
usuario.nome = 'Cleiton';


//variaveis de escopo
//a variavel let é uma variavel de escopo
function exibeNumero(x) { //cada chave é um escopo
    let a = 5

    if (x>10) {
        let a = 2 //podemos atribuir um valor a variavel dentro de um escopo "filho"

        console.log(a, x)
    }
}

console.log(a) //variavel a não acessivel fora do escopo da function