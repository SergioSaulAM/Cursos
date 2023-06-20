// ========================= WEB APIs ===========================
/* console.log(window);
console.log(document);

// Código para hacer hablar un texto.
let texto = "Hola Papá, comprame una PlayStation 5";
const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
hablar(texto); */


// ========================= DOM: INTRODUCCIÓN ===========================
/* 
console.log("******************** ELEMENTOS DEL DOCUMENTO ********************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>");
 */


// ========================= DOM: NODOS, ELEMENTOS Y SELECTORES ===========================
//Nodos: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
/* 
// MÉTODOS CASI NO UTILIZABLES
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card")); //No es necesario poner el punto
console.log(document.getElementsByName("nombre"));

// MÉTODOS UTILIZABLES
console.log(document.getElementById("menu")); //No es necesario poner el #
console.log(document.querySelector("#menu")); //Es necesario poner el # (si se quiere recuperar un elemento con cierto ID) o el . (si se quiere recuperar elementos de una clase)
console.log(document.querySelector(".card"));
console.log(document.querySelector("a")); //Solamente trae el primer selector que se le haya especificado que haya encontrado en el documento HTML.
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el => {
    console.log(el);
});

document.querySelectorAll(".card").forEach(el => {
    console.log(el);
});

console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")[3]);
 */


// ========================= DOM: ATRIBUTOS Y DATA-ATTRIBUTES ===========================

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-mx");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "JavaScript";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));