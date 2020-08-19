class idade {
    constructor() {
        this.idade = [];
    }

    addIdade(n) {
        this.idade.push(n)
    }

    exibeIdade() {
        console.log(this.idade)
    }
}

var iidade = new idade();

iidade.addIdade(10)

iidade.exibeIdade()