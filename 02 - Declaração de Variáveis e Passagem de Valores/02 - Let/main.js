for (var i = 0; i < 5; i++) {}
console.log(i);

for (let i = 0; i < 5; i++) {}
console.log(i);

var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);
