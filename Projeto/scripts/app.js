var myObj = {
    a: 1,
    b: 2,
    c: 3,
};

var a = myObj.a,
    b = myObj.b,
    c = myObj.c;

var { a, b, c, outraVariavel = 5 } = myObj;
