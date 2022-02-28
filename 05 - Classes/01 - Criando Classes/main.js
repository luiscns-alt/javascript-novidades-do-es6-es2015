class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

var myAnimal = new Animal("Gumball");
myAnimal.sayName();
