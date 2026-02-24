// 13. Crie uma expressão que envolva uma conversão implícita entre número e string.
let numero = 10;
let texto = "A idade é ";

let resultado = texto + numero;  // A conversão implícita de número para string ocorre aqui
console.log(resultado);  // "A idade é 10"
console.log(typeof resultado);  // "string"

// 14. Use um operador matemático para converter uma string em um número implicitamente.
let stringNumero = "20";
let resultadoMatematico = +stringNumero + 5;  // O operador "+" converte implicitamente a string para número

console.log(resultadoMatematico);  // 25
console.log(typeof resultadoMatematico);  // "number"