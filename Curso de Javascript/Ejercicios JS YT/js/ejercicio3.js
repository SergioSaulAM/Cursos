//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numAleatorio = () => console.log(Math.round(Math.random() * (601 - 500) + 500));
const aleatorio = () => console.log((Math.round(Math.random()*100) + 500));

numAleatorio();
aleatorio();


//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (num = 0) => {
    if (typeof num !== 'number') return console.error('Lo sentimos, ingresó un valor diferente a un número.');
    if (Math.sign(num) === -1) return console.warn('Ingresó un número negativo');

    let bool = null;
    let numString = num.toString();
    //let numString = String(num);

    //let alReves = numString.split("").reverse().join("");
    let j = numString.length-1;
    for (let i = 0; i < numString.length; i++) {
        (numString.charAt(i) === numString.charAt(j)) ? bool = true : bool = false
        j--;
    }

    return console.log(bool);
}

capicua(2002);
capicua(2000);
capicua(18.81);


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = null) => {
    if (typeof num !== 'number') return console.error('Lo sentimos, ingresó un valor diferente a un número.');
    if (Math.sign(num) === -1) return console.warn('Ingresó un número negativo. Favor de ingresar un número positivo.');
    if (num === 0) return console.log('Ingresó el cero como parámetro. Favor de ingresar un número positivo.');

    for (let i = num-1; i >= 1; i--) num *= i;
    console.log(num);
}

factorial(8);