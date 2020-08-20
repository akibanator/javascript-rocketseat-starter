/*
3º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
    return item + 10;
});
*/

const arr = [1, 2, 3, 4, 5];

const map1 = arr.map(item => item + 10)

console.log(map1)

/*
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);
*/

const usuario = { nome: 'Diego', idade: 23 };

// Até perceber que ler este código como mostraIdade recebe function, deu uma clareada na mente.
const mostraIdade = () => usuario.idade;

console.log(mostraIdade())

/*
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
*/

const nome = "Diego";
const idade = 23;

// Quando não declarada o parametro a variavel idade pega o valor padrão
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade})

//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));

/*
// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}
*/

const promise = () => new Promise((resolve, reject) => resolve());