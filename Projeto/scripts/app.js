class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    cry() {
        super.sayName();
        console.log("Meow");
    }
}

var myAnimal = new Cat("Gumball");
myAnimal.cry();

class MyClass {
    static double(number) {
        return number * 2;
    }
}

console.log(MyClass.double(5));
