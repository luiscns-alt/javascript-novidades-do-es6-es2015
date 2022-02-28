class MyArray extends Array {
    doubleValues() {
        return this.map((item) => item * 2);
    }
}

var myList = new MyArray(1, 2, 3, 4);
myList.push(5);

console.log(myList.doubleValues());
