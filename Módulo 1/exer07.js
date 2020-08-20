/*
7º exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome = 'Diego';
const idade = 23;
const usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
};
*/

const name = 'Diego';
const age = 23;
const login = {
    name, //nome da propriedade igual o nome da variavel não precisa repetir
    age,
    cidade: 'Rio do Sul',
};

console.log(`Nome: ${name}, Idade: ${age}, Cidade: ${cidade}`)