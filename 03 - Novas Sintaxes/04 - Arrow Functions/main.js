var sum = (a, b) => {
    return a + b;
};

var double = (n) => n * 2;
console.log(double(5));

var myList = [1, 10, 15, 35, 2, 27, 31];

myList.sort(function (a, b) {
    return a > b ? 1 : -1;
});

console.log(myList);

var myList = [1, 10, 15, 35, 2, 27, 31];

myList.sort((a, b) => (a > b ? 1 : -1));

console.log(myList);

var myList = [{ a: 1 }, { a: 2 }, { a: 3 }];

var myNewList = myList.map(function (obj) {
    return obj.a;
});

console.log(myNewList);

var myNewList = myList.map((obj) => obj.a);

var myObj = {
    a: 5,
    myFunc: function () {
        console.log(this.a);
        var newFunc = function () {
            console.log(this.a);
        };
        newFunc();
    },
};

myObj.myFunc();
