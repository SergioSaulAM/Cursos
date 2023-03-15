//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

//Función propuesta personal
const ascDesc = (asc = null) => {
    if(!(asc instanceof Array)) return console.error('Lo sentimos! Ingresó un parámetro diferente a un array.');
    if(asc.length === 0) return console.warn('Envió un arreglo vacío. Favor de mandar datos.');
    for (const i of asc) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }

    const desc = []
    let a = 0;
    for (let j = 0; j <= 10; j++) {
        for (let i = 0; i < asc.length; i++) {
            if(asc[i] < asc[i+1]) {
                asc[i] = asc[i];
            } else if (asc[i] > asc[i+1]) {
                a = asc[i];
                asc[i] = asc[i+1];
                asc[i+1] = a;
            }
        }
    }

    for (let a = asc.length-1; a >= 0; a--) desc.push(asc[a]);
    return console.log({asc, desc});
}

//ascDesc([])
//ascDesc()
//ascDesc(3204)
//ascDesc("fkojadsf")
//ascDesc([7,5,7,8,6])
ascDesc([7,10,9,8,6,13,1,15,0,20,1])


// Función de YT
// Esta función no funcionó del todo bien :(
const ordenarArreglo = (arr = null) => {
    if(!(arr instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (arr.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    for (const i of arr) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    })
}

//ordenarArreglo();
//ordenarArreglo([]);
//ordenarArreglo([20,1,2,7,'10']);
//ordenarArreglo([7,5,7,8,6]);
//ordenarArreglo([7,10,9,8,6,13,1,15,0,20,1]);


//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//Función propuesta personal
const duplicados = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos! Ingresó un parámetro diferente a un array.');
    if(array.length === 0) return console.warn('Envió un arreglo vacío. Favor de mandar datos.');


    for (let a = 0; a <= 10; a++) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                }
            }
        }
    }

    console.log(array);
}

duplicados(["x", 10, "x", 2, "10", 10, true, true])
//duplicados(["x", 10, "x", 2, 10, 10, true, true])
//duplicados(["x", 10, "x", 2, 10, 10, true, true, 2, 2, 17])

// Función de YT
const quitarDuplicados = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos! Ingresó un parámetro diferente a un array.');
    if(array.length === 0) return console.warn('Envió un arreglo vacío. Favor de mandar datos.');
    if(array.length === 1) return console.warn('El arreglo debe tener al menos dos elementos.');

    //return console.info({
    //    original: array,
    //    //.filter() genera otro arreglo mientras está comparando.
    //    sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
    //})

    //El Set permite generar un objeto donde su conjunto de elementos que no permita elementos duplicados.
    return console.info({
        original: array,
        //Con el spread operator se forma el conjunto de elementos del arreglo sin repetirse.
        sinDuplicados: [...new Set(array)]
    })
}

quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//Función propuesta personal
const promedio = (array = null) => {
    if(!(array instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (array.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    for (const i of array) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }
    
    let suma = 0;
    for (const i of array) {
        if (typeof i !== 'number') {
            return console.error('Lo sentimos, ingresó un elemento diferente a un número dentro del arreglo.')
        }
        suma += i;
    }
    let promedio = suma / array.length;
    return console.log(`El promedio de [${array}] es ${promedio}`);
}

//promedio();
//promedio([]);
//promedio([7,10,9,8,6,13,1,15,0,'20',1])
//promedio([9,8,7,6,5,4,3,2,1,0]);


// Función de YT
const prom = (arr = null) => {
    if(!(arr instanceof Array)) return console.error('Lo sentimos, ingresó un parámetro diferente de un arreglo.');
    if (arr.length === 0) return console.warn('ERROR! Ingresó un arreglo vacío.');
    for (const i of arr) {
        if (typeof i !== 'number') return console.error(`Lo sentimos, el valor ${i} es un ${typeof i}.`);
    }


    return console.info(
        //Genera un nuevo arreglo basado en el arreglo original.
        //.reduce(acumulador, elemento_actual, índice_elemento, arreglo)
        arr.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length-1) {
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`
            } else {
                //Se agrega el 'return total' para que tome el valor actual del total.
                return total;
            }
        })
    );
}


prom([9,8,7,6,5,4,3,2,1,0]);