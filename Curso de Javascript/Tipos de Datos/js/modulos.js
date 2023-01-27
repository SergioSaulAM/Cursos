import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {aritmetica as calculos} from "./arimetica.js";


console.log('Archivo modulos.js');
console.log(PI, usuario);
//console.log(aritmetica.sumar(3,4));
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
saludar();
let saludo = new Saludar();
saludo;