function* myCounter() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var counter = myCounter();
var counterValue = counter.next();

console.log(counterValue);

function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
}

var myGen = myGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
