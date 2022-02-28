var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

myPromise
    .then((value) => {
        console.log(`My Value: ${value}`);
        return 900;
    })
    .then((value) => {
        console.log(`My Value: ${value}`);
        return 100;
    });

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

var p2 = Promise.resolve(77);

Promise.all([p1, p2]).then((value) => {
    console.log(value);
});
