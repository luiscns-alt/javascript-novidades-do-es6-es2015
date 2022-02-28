var a = new Promise(function (resolve, reject) {
    resolve();
})
    .then(function (b) {
        return b;
    })
    .then(function (c) {
        return c;
    })
    .then(function (d) {
        return d;
    })
    .then(function (e) {
        return e;
    })
    .then(function (f) {
        return f;
    });

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

myPromise.then((value) => console.log(`My value is ${value}`));

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

myPromise
    .then((value) => {
        console.log(`My value is ${value}`);
        return 900;
    })
    .then((value) => {
        console.log(`My value is ${value}`);
        return 100;
    })
    .then((value) => {
        console.log(`My value is ${value}`);
        return 700;
    });
