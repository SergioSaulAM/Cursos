//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") => {
    if (typeof cadena !== 'string') return console.error("Lo sentimos, ingresó un parámetro no válido.")

    if (cadena === "") return console.warn(`Lo sentimos, no ingresó una cadena de texto como parámetro.`)

    let cad = "";
    
    for (let i = cadena.length-1; i >= 0; i--) cad = cad + cadena.charAt(i)
        
    return console.log(cad);
}

invertirCadena("Hola Mundo");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarNumCad = (cadena = "", p = "") => {
    if(typeof cadena !== 'string' || typeof p !== 'string') return console.error("Lo sentimos, ingresó un parámetro no válido.")

    if (cadena === "" && p === "") return console.warn(`Lo sentimos, no ingresó una cadena de texto como parámetro.`)

    let cadArr = cadena.split(" ");
    let cont = 0;

    for (const i of cadArr) i.toUpperCase() === p.toUpperCase() ? cont += 1 : cont += 0
        
    return console.log(`Se repite la palabra '${p}' ${cont} veces`);
}


contarNumCad("Hola mundo adios hola", "hola");


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (cadena = "") => {
    if(typeof cadena !== 'string') return console.error("Lo sentimos, ingresó un parámetro no válido.")

    if (cadena === "") return console.warn(`Lo sentimos, no ingresó una cadena de texto como parámetro.`)

    let cad = "";
    let cad2 = cadena;
    
    for (let j = 0; j <= cad2.length-1; j++) if (cad2.charAt(j) === " ") cad2 = cad2.replace(" ", "");

    for (let i = cadena.length-1; i >= 0; i--) cad = cad + cadena.charAt(i).toUpperCase().replace(" ", "");
        
    cad2.toUpperCase() === cad ? console.log(`La ${cadena} es un palíndromo`) : console.log(`La ${cadena} no es un palíndromo`)
}

palindromo('Anita lava la tina');


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminaPatron = (cadena = "", pat = "") => {
    if(typeof cadena !== 'string' || typeof pat !== 'string') return console.error('Error!! Ingresó como parámetro un valor diferente a una cadena.');

    if (cadena === "" || pat === "") return console.warn('No ingresó un parámetro.');

    for (let i = 0; i < pat.length; i++) {
        for (let j = 0; j < cadena.length; j++) {
            if (cadena.charAt(j) === pat.charAt(i)) cadena = cadena.replace(pat.charAt(i), "");            
        }
    }

    return console.log(cadena);
}

eliminaPatron("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");