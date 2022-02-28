function* myCounter() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var counter = myCounter();

var counterValue = counter.next();

function* myGenerator() {
    yield 5;
    console.log("we’re back!");
    yield 10;
}

function* myGenerator1() {
    yield [1, 2, 3, 4, 5];
}

function* myGenerator2() {
    yield* [1, 2, 3, 4, 5];
}

[...myGenerator2()];
