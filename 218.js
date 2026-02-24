// 18. Converta os valores `0`, `1`, `""`, `"Hello"`, `null`, `undefined`, `{}` e `[]` para booleanos e exiba os resultados.
console.log(Boolean(0));        // false (0 é considerado "falsy")
console.log(Boolean(1));        // true  (qualquer número diferente de 0 é "truthy")
console.log(Boolean(""));       // false (string vazia é "falsy")
console.log(Boolean("Hello"));  // true  (qualquer string não vazia é "truthy")
console.log(Boolean(null));     // false (null é "falsy")
console.log(Boolean(undefined)); // false (undefined é "falsy")
console.log(Boolean({}));       // true  (objeto vazio é "truthy")
console.log(Boolean([]));       // true  (array vazio é "truthy")