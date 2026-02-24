// 10. Converta um `boolean` em um número e exiba o resultado e seu tipo.
let booleano = true;         // Booleano
let numeroBooleano = Number(booleano);  // Conversão para número (true -> 1, false -> 0)

console.log(numeroBooleano, typeof numeroBooleano);  // 1 number

// 11. Converta `null` para um número e exiba o resultado e seu tipo.
let valorNull = null;        // Null
let numeroNull = Number(valorNull);  // Conversão para número (null -> 0)

console.log(numeroNull, typeof numeroNull);  // 0 number

// 12. Converta `undefined` para um número e exiba o resultado e seu tipo.
let valorUndefined = undefined;  // Undefined
let numeroUndefined = Number(valorUndefined);  // Conversão para número (undefined -> NaN)

console.log(numeroUndefined, typeof numeroUndefined);  // NaN number