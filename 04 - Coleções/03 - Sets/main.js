var mySet = new Set();
var a = { myValue: 1 },
    b = { myValue: 2 };

mySet.add(a);
mySet.add(b);
mySet.add(a);

var a = { myValue: 1 },
    b = { myValue: 2 };
var mySet = new Set([a, b]);

// .has(item) - verifica se determinado item está presente no Set;
// .delete(item) - remove determinado item do Set;
// .clear() - limpa todo o Set;
// .size - retorna a quantidade de itens no Set.
