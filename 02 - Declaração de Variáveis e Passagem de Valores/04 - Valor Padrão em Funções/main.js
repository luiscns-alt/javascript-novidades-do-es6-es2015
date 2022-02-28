// Antigamente
function myFunc(a) {
    a = a || 5;
    console.log(a);
}

// Atualmente
function myFunc(a = 5) {
    console.log(a);
}
