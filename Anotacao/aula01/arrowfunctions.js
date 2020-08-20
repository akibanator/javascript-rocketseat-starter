const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(function(item) { //isso é uma funcão anonima
    return item * 2
})

//reduzimos o codigo acima usando arrow function
const newArr = arr.map(item => item * 2)

//não recomendado o codigo abaixo
const teste = () => {
    return 'teste';
}

console.log(teste())
// teste