var myList = [1, 10, 15, 5, 2, 27, 31];

myList.sort((a, b) => (a > b ? 1 : -1));

console.log(myList);

var myList2 = [{ a: 1 }, { a: 2 }, { a: 3 }];

var myNewList = myList2.map((obj) => obj.a);

console.log(myNewList);

var myObj = {
    a: 5,
    myFunc: function () {
        console.log(this.a);
        var newFunc = () => {
            console.log(this.a);
        };
        newFunc();
    },
};

myObj.myFunc();
