//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


//Función propuesta personal
const cuadradoArray = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    for (const i of array) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');

    let cuadrado = [];
    for (let i = 0; i < array.length; i++) {
        cuadrado.push(Math.pow(array[i],2));
    }

    //const newArr = array.map(el => el*el);
    //El método map() genera un arreglo nuevo a partir de uno original (ya hecho).

    return console.info(`Tu matriz al cuadrado es: ${cuadrado}`);
}

//cuadradoArray();
//cuadradoArray();
//cuadradoArray([5,7,'9']);
cuadradoArray([5,7,8]);

// Función de YT
const devuelveCuadrado = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    for (const i of array) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    const cuadrado = array.map(el => el*el);
    return console.info(`Tu matriz al cuadrado es: ${cuadrado}`);
}

devuelveCuadrado([5,7,8])





//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

//Función propuesta personal
const menorMayor = (array = undefined) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    let menor = array[0];
    let mayor = array[0];
    let mayMen = [];
    for (const i of array) { 
        if (typeof i !== 'number') return console.error('Error!! El arreglo contiene un tipo de dato diferente de número.');
        if (i < mayor) menor = i;
        if (i > menor) mayor = i;
        if (i === menor || i === mayor) {mayor = mayor; menor = menor;} 
    }
    mayMen.push(mayor, menor);
    //return console.info(`Arreglo original: ${array}\nValor mayor: ${Math.max(...array)}\nValor menor: ${Math.min(...array)}`)
    return console.log(mayMen);
}

menorMayor([1,4,5,99,-60]);
//menorMayor([1,'4',5,99,-60]);
//menorMayor();

// Función de YT
const minMax = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    for (const i of array) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }
    //La función max() devuelve el valor máximo de un conjunto de números. La función min() devuelve el valor mínimo un conjunto de números. Es OBLIGATORIO el operador Spread porque si no la función no funciona.
    return console.info(`Arreglo original: ${array}\nValor mayor: ${Math.max(...array)}\nValor menor: ${Math.min(...array)}`);
}

minMax([1,4,5,99,-60]);





//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

//Función propuesta personal
const parImpar = (array = undefined) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');

    let pares = [];
    let impares = [];
    for (const i of array) {
        if (typeof i !== 'number') return console.error('Error!! El arreglo contiene un tipo de dato diferente de número.');
        if (i % 2 === 0) pares.push(i);
        if (i % 2 !== 0) impares.push(i);
    }

    const resultado = {
        pares,
        impares
    }

    return console.log(resultado);
}

parImpar([1,2,3,4,5,6,7,8,9,0]);
//parImpar([1,2,3,4,5,6,7,8,'9',0]);
//parImpar({});

// Función de YT
const separarParesImpares = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    for (const i of array) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }

    return console.info({
        pares: array.filter(num => num % 2 === 0),
        impares: array.filter(num => num % 2 !== 0)
    });
}

separarParesImpares([1,2,3,4,5,6,7,8,9,0]);
