var mySymbol = Symbol("My New Symbol");

var a = Symbol("a"),
    b = Symbol("a");
console.log(a === b);

var myObj = {};
myObj[a] = 5;
console.log(myObj[a]);
console.log(myObj[b]);

var a = Symbol.for("a"),
    b = Symbol.for("a");
console.log(a === b);

Symbol.keyFor(a);
