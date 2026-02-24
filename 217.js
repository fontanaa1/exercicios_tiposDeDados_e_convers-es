// 16. Converta as strings "123", "123.45", "", "abc" e "0" para números e exiba os resultados.
console.log(Number("123"));     // 123 (number)
console.log(Number("123.45"));  // 123.45 (number)
console.log(Number(""));        // 0 (number)
console.log(Number("abc"));     // NaN (Not-a-Number)
console.log(Number("0"));       // 0 (number)

// 17. Use a função `parseInt` e `parseFloat` para converter strings e explique as diferenças.
console.log(parseInt("123.45"));  // 123 (inteiro, ignora a parte decimal)
console.log(parseFloat("123.45"));  // 123.45 (número com ponto flutuante)

console.log(parseInt("abc123"));  // NaN (não consegue converter "abc123" para número)
console.log(parseFloat("123abc")); // 123 (lê até o primeiro caractere não numérico)