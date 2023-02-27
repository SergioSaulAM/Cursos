//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const cuadradoArray = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i],2);
    }

    return console.info(`Tu matriz al cuadrado es: ${array}`);
}

cuadradoArray();
cuadradoArray();
cuadradoArray([5,7,8]);


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const menorMayor = (array = undefined) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    let menor = array[0];
    let mayor = array[0];
    for (const i of array) {
        if (typeof i !== 'number') return console.error('Error!! El arreglo contiene un tipo de dato diferente de número.');
        if (i < mayor) menor = i;
        if (i > menor) mayor = i;
        if (i === menor || i === mayor) {mayor = mayor; menor = menor;} 
    }
    return console.log(`Mayor: ${mayor} ; Menor: ${menor}`);
}

menorMayor([1,4,5,99,-60]);
menorMayor([1,'4',5,99,-60]);
menorMayor();


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

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
parImpar([1,2,3,4,5,6,7,8,'9',0]);
parImpar({});