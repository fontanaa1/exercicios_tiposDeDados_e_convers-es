// 7. Liste os tipos primitivos do JavaScript em um array e exiba seus valores usando `console.log()`.
let tiposPrimitivos = ['string', 'number', 'boolean', 'undefined', 'symbol', 'bigint', 'null'];
console.log(tiposPrimitivos);

// 8. Declare uma variável para cada tipo primitivo e exiba seus valores.
let stringExemplo = "Texto";       // string
let numberExemplo = 123;          // number
let booleanExemplo = true;        // boolean
let undefinedExemplo;             // undefined
let symbolExemplo = Symbol("simbolo"); // symbol
let bigintExemplo = 123456789n;   // bigint
let nullExemplo = null;           // null

console.log(stringExemplo);   // "Texto"
console.log(numberExemplo);   // 123
console.log(booleanExemplo);  // true
console.log(undefinedExemplo); // undefined
console.log(symbolExemplo);   // Symbol(simbolo)
console.log(bigintExemplo);   // 123456789n
console.log(nullExemplo);     // null

// 9. Verifique se uma variável contém um valor do tipo `Symbol` usando `typeof`.
let exemploSymbol = Symbol("exemplo");
console.log(typeof exemploSymbol === "symbol");  // true