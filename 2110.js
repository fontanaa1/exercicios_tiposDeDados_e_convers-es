// 20. Crie uma operação que envolva uma string e um número, mostrando como ocorre a conversão implícita.
let numero = 5;
let texto = "O número é ";

let resultado = texto + numero;  // Implicit conversion: número é convertido para string

console.log(resultado);  // "O número é 5"
console.log(typeof resultado);  // "string"