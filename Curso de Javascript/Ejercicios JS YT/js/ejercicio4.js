//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (num = null) => {
    if (typeof num !== 'number') return console.error('Lo sentimos, no ingresó un número como parámetro.');
    if (num === 0) return console.warn('El número no puede ser 0');
    if (num === 1) return console.warn('El número no puede ser 1');

    let c = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) c++;
        if(c > 2) break;
    }
    (c <= 2) ? console.log(`El número ${num} es primo`) : console.log(`El número ${num} NO es primo`);

}

esPrimo(210);




//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = null) => {
    if (typeof numero !== 'number') return console.error('Lo sentimos, no ingresó un número como parámetro.');
    (numero % 2 === 0) ? console.log(`El número ${numero} es un número par.`) : console.log(`El número ${numero} es un número impar.`);
}

parImpar(8);




//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celFahr = (numero = null, grados = "") => {
    if (typeof numero !== 'number' || typeof grados !== 'string') return console.error('Lo sentimos, ingresó un parámetro no válido. Favor de revisar los parámetros. (número, "F/C")');
    if (grados.length !== 1 || !/(C|F)/.test(grados)) return console.error('Se ingresó un valor desconocido (C/F)');
    (grados === "C") ? console.log(`${numero}°C = ${Math.round((numero * (9/5)) + 32)}°F`) : (grados === "F") ? console.log(`${numero}°F = ${Math.round((numero - 32) * (5/9))}°C`) : console.log('Ingresó un parámetro no válido (C/F)');
}

celFahr(42, "F");