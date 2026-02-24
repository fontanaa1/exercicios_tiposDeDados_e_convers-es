// 4. Declare uma variável com um valor `null` e outra com `undefined`. Use `typeof` para verificar seus tipos.
let valorNull = null;
let valorUndefined;

console.log(typeof valorNull);        // "object"
console.log(typeof valorUndefined);   // "undefined"

// 5. Crie um objeto e um array. Use `typeof` para exibir seus tipos e compare os resultados.
let objeto = {};  // Objeto vazio
let array = [];   // Array vazio

console.log(typeof objeto);   // "object"
console.log(typeof array);    // "object"

// 6. Declare uma variável com um valor `BigInt`. Use `typeof` para verificar seu tipo.
let numeroGrande = 1234567890123456789012345678901234567890n;  // BigInt

console.log(typeof numeroGrande);  // "bigint"