//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* 
    MI PROPUESTA PERSONAL
const binDec = (val = null, base = null) => {
    if (typeof val !== 'number') return console.warn(`Ingresó un valor no válido`);
    if (!(/(2|10)/.test(base))) return console.error('No ingresó una base válida (2|10)');
    if (typeof base !== 'number') return console.warn(`El parámetro ${base} NO es un número.`);
    
    let cociente = 0;
    let residuo = 0;
    let dec = 0;
    let bin = "";

    if (base === 2) {
        let rev = String(val).split("").reverse().join("");

        for (let i = 0; i < rev.length; i++) {
            if(parseInt(rev.charAt(i)) === 0 | parseInt(rev.charAt(i)) === 1) {
                dec = dec + (Math.pow(2, i)*parseInt(rev.charAt(i)));
            } else {
                return console.log("NO ingresó un valor binario válido");
            }
        }

        return console.log(`${val} = ${dec}`);
    } else {
        cociente = val;

        do {
            residuo = cociente % 2;
            cociente = Math.floor(cociente / 2);
            bin = bin + String(residuo);
        } while (cociente !== 0);

        return console.log(`${val} = ${bin.split("").reverse().join("")}`);;
    }
} */

const binDec = (val = null, base = null) => {
    if (typeof val !== 'number') return console.warn(`Ingresó un valor no válido`);
    if (!(/(2|10)/.test(base))) return console.error('No ingresó una base válida (2|10)');
    if (typeof base !== 'number') return console.warn(`El parámetro ${base} NO es un número.`);

    if (base === 2) {
        //parseInt() convierte un valor binario a decimal si especificamos como segundo parámetro el número 2
        return console.info(`${val} base ${base} = ${parseInt(val, base)} base 10`);
    } else {
        //toString() convierte un valor decimal a binario si especificamos como único parámetro el número 2
        return console.info(`${val} base ${base} = ${val.toString(2)} base 2`);
    }
}

//binDec(1001);
//binDec(2);
//binDec('',2);
binDec(100010, 2);
binDec(101, 2);
binDec(34, 10);
binDec(5, 10);




//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (total = null, desc = null) => {
    if (typeof total !== 'number' || typeof desc !== 'number') return console.error(`Error!! No ingresó un parámetro válido.`);
    if (Math.sign(total) === -1 || Math.sign(desc) === -1) return console.warn(`Lo sentimos, ingresó un número negativo como parámetro.`);
    if (desc === 0) return console.warn(`Lo sentimos, no se puede aplicar un descuento del 0%.`);
    return console.log(`Monto $${total} con ${desc}% de descuento = $${total *  (1 - (desc / 100))}`);
}

descuento(1000, 20);
descuento(1000, 25);
//descuento(1000, -12);
//descuento(1000, );
//descuento('1000', 20);
//descuento(10, 10);


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (date = null) => {
    if (!(date instanceof Date) || date === null) return console.error(`Error!! No ingresó una fecha como parámetro.`);

    let todayMinusDate = new Date().getTime() - date.getTime(); //Obtener el timestamp de la fecha actual a la ingresada por el usuario.
    let yearsInMS = 1000 * 60 * 60 * 24 * 365; //Obtener los milisegundos de un año para poder dividirlo entre la diferencia de fechas.
    //Si se requiere calcular los días, la multiplicación se acorta a: 1000*60*60*24
    //Si se requiere calcular lustros, la multiplicación sería: 1000*60*60*24*365*5
    let humanYears = Math.floor(todayMinusDate / yearsInMS); //Se usa un Math.floor para poder evitar incongruencias de fechas (si no ha pasado una fecha para que el año sea más).

    return (Math.sign(humanYears) === -1) 
    ? console.info(`Faltan ${Math.abs(humanYears)} años para el ${date.getFullYear()}.`)
    : (Math.sign(humanYears) === 1) 
        ? console.info(`Han pasado ${humanYears} años, desde ${date.getFullYear()}.`)
        : console.info(`Estamos en el año actual ${date.getFullYear()}.`);
}

calcularAnios(new Date(2002, 4, 23));
calcularAnios(new Date(2024, 4, 23));
//calcularAnios();