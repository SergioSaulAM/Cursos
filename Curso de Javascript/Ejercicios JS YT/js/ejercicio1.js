//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const numCaracteresCadena = (cadena) => {
    if (typeof cadena === 'string') {
        console.log(`Longitud de cadena: ${cadena.length}.`);
    } else {
        console.error(`Lo sentimos, ingresó un elemento diferente a una cadena.`);
    }
}

numCaracteresCadena("Saul");



//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarCadena = (cadena, num) => {
    if (typeof cadena === 'string' && typeof num === 'number') {
        console.log(`Recorte: ${cadena.slice(0, num)}.`); 
    } else {
        console.error(`Lo sentimos, ingresó un elemento diferente a un número o cadena de texto.`);
    }
}

recortarCadena("Hola Mundo", 4);



//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const separarCadena = (cadena, sep) => {
    if(typeof cadena === 'string' && typeof sep === 'string') {
        console.log(cadena.split(sep));    
    } else {
        console.error(`Lo sentimos, ingresó un elemento diferente una cadena de texto en algún parámetro.`);
    }
}

separarCadena("Hola Que Tal", " ");



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirCadena = (cadena, num) => {
    if(typeof cadena === 'string' && typeof num === 'number') {
        console.log(cadena.repeat(num));    
    } else {
        console.error(`Lo sentimos, ingresó un elemento diferente a un número o cadena de texto.`);
    }
}

repetirCadena("Hola Mundo ", 4);