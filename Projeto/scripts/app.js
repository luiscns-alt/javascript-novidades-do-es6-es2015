var a = Symbol.for("a"),
    b = Symbol.for("a");

console.log(a === b);
console.log(Symbol.keyFor(a));

var myObj = {};
myObj[a] = 5;

console.log(myObj[Symbol.for("a")]);
console.log(JSON.stringify(myObj));
