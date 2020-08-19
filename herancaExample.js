class Polygon {
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }

    sayHeight() {
        console.log(this.height)
    }

    sayWidth() {
        console.log(this.width)
    }
  }
  
  class Square extends Polygon {
    constructor(length) {
      //this.height; // ReferenceError, precisa chamar o super primeiro!
      
      // Aqui, ele chama a classe construtora pai com o tamanho 
      // provido pelo Polygon -> width e height
      super(length, length);
      
      // Nota: Em classes derivadas, super() deve ser chamado antes de
      // usar this. Deixar isso de fora vai causar um ReferenceError.
      this.name = 'Square';
    }
  
    get area() {
      return this.height * this.width;
    }
  
    set area(value) {
      this.area = value;
    } 
  }

  var teste = new Polygon(12, 14);
  teste.sayName();

  teste.sayHeight();
  teste.sayWidth();

  var teste2 = new Square(4);
  teste2.sayName();

  teste2.sayHeight();
  teste.sayWidth();