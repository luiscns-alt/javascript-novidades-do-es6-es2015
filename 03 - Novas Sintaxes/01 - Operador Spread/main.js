var myList = [3, 4, 5],
    a = [1, 2, ...myList];

console.log(a);

var myList = [3, 4, 5];

function myFunc(a, b, c) {
    console.log(a, b, c);
}

myFunc(...myList);

function myFunc(a, b, ...c) {
    console.log(a, b, c);
}

myFunc(1, 2, 3, 4, 5, 6, 7);
