var mySet = new WeakSet();
var a = { myValue: 1 },
    b = { myValue: 2 };

mySet.add(a);
mySet.add(b);

a = null;
