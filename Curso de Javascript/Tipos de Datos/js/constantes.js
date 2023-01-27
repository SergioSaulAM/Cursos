const PI = Math.PI;

let usuario = "Saul";
//export default let password = "qwerty"; ❌
const password = "qwerty";
//export default password; ✅

const hello = () => console.log('Hola');


function saludar() {
    console.log('Hola Módulos +ES6');
}

class Saludar {
    constructor () {
        console.log("Hola Clases +ES6");
    }
}

export {usuario, password, saludar, hello, Saludar};