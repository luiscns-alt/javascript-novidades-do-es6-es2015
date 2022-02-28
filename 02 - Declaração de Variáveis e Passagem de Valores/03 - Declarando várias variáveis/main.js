var [a, b, c] = [1, 2, 3];
var a = 1,
    b = 2,
    c = 3;

var myObj = { a: 1, b: 2, c: 3 };
var { a, b } = myObj;

var myObj = { a: 1, b: 2, c: 3 };
var a = myObj.a,
    b = myObj.b;

var myObj = { a: 1, b: 2, c: 3 };
var a = myObj.a,
    b = myObj.b;

var myObj = { a: 1, b: 2 };
var { a, b, c = 5 } = myObj;
