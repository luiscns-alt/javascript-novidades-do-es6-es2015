var a = 5,
    b = 7;

var obj = {
    a,
    b,
    x() {
        console.log(this);
    },
};

obj.x();
