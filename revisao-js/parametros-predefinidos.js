// Forma é um parâmetro opcional. Sendo assim, ele não
// precisa ser informado na função. Caso ele tenha sido
// omitido, assumirá o valor de 'R'.
function areaForma(base, altura, forma = 'R'){
    let area
    switch (forma) {
        case 'R': //Retangulo
            area = base * altura
            break
        case 'T': //Triangulo
            area = base * altura / 2
            break
        case 'E': //Elipse
            area = (base / 2) * (altura / 2) * Math.PI
            break
    }
    return area
}

console.log(`Retangulo 45x15: ${areaForma(45, 15, 'R')}`)
console.log(`Triangulo 13x8: ${areaForma(13, 8, 'T')}`)
console.log(`Elipse 12x16: ${areaForma(12, 16, 'E')}`)
console.log(`Quadrado 6.5x6.5: ${areaForma(6.5, 6.5)}`)
console.log(`Retangulo 20x25: ${areaForma(20, 25)}`)