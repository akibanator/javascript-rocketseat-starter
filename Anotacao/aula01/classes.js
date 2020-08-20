//classes no javascript ficaram disponiveis no ES6

//Podemos usar herança também
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
    }
}


//Podemos criar classes e definir métodos
//Podemos usar construtores, construtores vão ser o primeiro método a ser executado toda vez que a nós instanciarmos a classe
class TodoList extends List { //Herdado de List
    constructor() {
        super(); //Quando herdamos de outras classe, é normal usarmos super() para invocar o constructor da classe pai
        this.todos = [];
        this.usuario = 'Diego';
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos)
    }

    mostrarUsuario() {
        console.log(this.usuario)
    }
}

//Instanciar a classe

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}

//Criar um button com id 'novotodo' para testar o code acima

//Métodos estaticos não precisam ser instanciados 

/*class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}*/ //Maneira incorreta de declarar um método estatico, as classes estáticas não enxergam o restante do código.
//A maneira correta de usar classes estáticas normalmente usamos para passar alguma informação e ele retornar outra informação independente do restante da classe
//Quando usamos static class normalmente nem utilizamos constructor

TodoList.addTodo();


class Matematica {
    static soma(a,b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2))