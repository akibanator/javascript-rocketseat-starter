const arr = [1, 3, 4, 5, 8 , 9]


//map percorre o vetor e retorna algo do vetor
const newArr = arr.map(function(item, index) { //o item é cada item do array
    return item + index //o index é a posição do array
})

// 1 + 0 = 1
// 3 + 1 = 4
// 4 + 2 = 6
// 5 + 3 = 8
//...

console.log(newArr)

//reduce é usado para transformar um array em somente um valor
//a seguir percorrendo o array
const sum = arr.reduce(function(total, next) { //total é o retorno da operação
    return total + next; //o next é o proximo item do array
})

//a primeira vez que ele executar o retorno é zero

// 0
// 1

// 1
// 4

// 4
// 4

// 8
// 5

// 13
// 8

// 21
// 9

// 30

const filter = arr.filter(function(item) {
    return item % 2 === 0; //retorna true ou false se o número é divisivel por 2
}) //em filter o retorno obrigatoriamente retornara true ou false

console.log(filter);

// [4, 8]

//verificar e encontrar uma informacao dentro do array
const find = arr.find(function(item) {
    return item === 4;
})

console.log(find);

// 4