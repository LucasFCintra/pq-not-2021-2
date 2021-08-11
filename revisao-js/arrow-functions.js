// Função tradicional com 1 parâmetro e 1 linha de código no corpo, com return
function quadrado(x){
    return x * x
}

// Arrow function equivalente
// 1° A função deve ser atribuida a uma variável(ou, melhor, a uma constante)
// 2° Desaparece a palavra chave 'function'
// 3° Desaparecem os parênteses em torno dos parametros
// 4° Após o parâmetro, aparece o símbolo => (flecha, arrow)
// 5° Desaparecem as chaces em torno do corpo da função
// 6° Desaparece a palavra chave 'return'
const quadrado2 = x => x * x

console.log(quadrado(9))
console.log(quadrado2(9))
console.log('---------------------------')

// Função tradicional com 2 argumentos, 1 linha de corpo com return
function potencial(base, expoente){
    return base ** expoente
}

// Arrow function equivalente
const potencial2 = (base, expoente) => base ** expoente

console.log(potencial(3, 5))
console.log(potencial2(3, 5))
