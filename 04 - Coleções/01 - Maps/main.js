var myObj = {};
var a = { value: 1 },
    b = { value: 2 };

myObj[a] = 5;
myObj[b] = 10;
console.log(myObj[a], myObj[b]);

// Agora no ES6 nós temos o Map:
var myObj = new Map();
var a = { value: 1 },
    b = { value: 2 };

myObj.set(a, 5);
myObj.set(b, 10);
console.log(myObj.get(a), myObj.get(b));

// Não podemos usar “[ ]” para acessar as propriedades. Para isso, use “get()” e “set()”;
// Podemos limpar todo o conteúdo com a função “clear()”;
// Para pegar o número de chaves, use “size” ao invés de “length”.
