// Caso a gente queira criar uma Promise e a
// gente já tenha o valor retornado, não faz muito
// sentido instanciarmos uma Promise e chamar
// o “resolve()” dentro da função de callback.

// Para facilitar, podemos executar a função “resolve()”
// diretamente, sem a necessidade de instanciar
// uma nova Promise.
var myPromise = Promise.resolve(77);

var myValue = myFunction();
var myPromise = Promise.resolve(myValue);

/**
 * Essa função recebe uma lista de Promises
 * e executa o “then()” quando a primeira Promise
 * for resolvida ou retornar um erro.
 */
var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

var p2 = Promise.resolve(77);

Promise.race([p1, p2]).then((value) => {
    console.log(value);
});

/**
 * Essa função recebe uma lista de Promises e executa
 * o “then()” apenas quando todas as Promises forem
 * resolvidas ou quando houver o primeiro erro de uma Promise.
 */

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 2000);
});

var p2 = Promise.resolve(77);

Promise.all([p1, p2]).then((values) => {
    console.log(values);
});
