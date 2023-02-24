//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocCons = (palabra = '') => {
    if (typeof palabra !== 'string') return console.error('Lo sentimos!! Ingresó un tipo de dato diferente a una cadena.');
    if (!palabra) return console.warn('No ingresó una cadena.');

    let vocal = 0;
    let consonante = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (/(A|E|I|O|U|a|e|i|o|u)/.test(palabra.charAt(i))) {
            vocal++;
        } else if (palabra.charAt(i) !== ' ') {
            consonante++;
        }
    }

    return console.log(`Vocales: ${vocal}, Consonantes: ${consonante}`);
}

//Propuesta YouTube
const contarLetras = (cadena = "") => {
    if (typeof cadena !== 'string') return console.error('Lo sentimos!! Ingresó un tipo de dato diferente a una cadena.');
    if (!cadena) return console.warn('No ingresó una cadena.');

    let vocales = 0;
    let consonantes = 0;
    cadena = cadena.toUpperCase();
    for (const letra of cadena) {
        if(/[AEIOUÁÉÍÓÚÜ]/.test(letra)) vocales++;
        if (/[BCDFGHJKLMNÑPQRSTVWXYZ]/.test(letra)) consonantes++;
    }
    return console.log({
        cadena,
        vocales,
        consonantes
    });
}

//vocCons();
vocCons('Hola Mundo');
contarLetras('Hola Mundo');
//vocCons(6);


//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn('No ingresaste un nombre.');
    if (typeof nombre !== 'string') return console.error(`El valor ${nombre} ingresado, NO es una cadena de texto.`);


    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóöÚúü\s]+$/g.test(nombre);

    return (expReg) ? console.info(`${nombre}, es un nombre válido.`) : console.warn(`${nombre} NO es un nombre válido.`)
}

validarNombre();
validarNombre(0);
validarNombre('Sergio Saul');



//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if (typeof email !== 'string') return console.error('Lo sentimos, pero ingresó un parámetro diferente a una cadena.');
    if (email === '') return console.warn('Ingresó una cadena vacía.');
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ? console.info(`${email} SÍ es un email válido.`) : console.info(`${email} NO es un email válido.`) 
}

validarEmail('ssaul@gmail.com');
validarEmail('29103@asf03.com');