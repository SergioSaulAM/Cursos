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
/* 
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
*/


// ========================= DOM: ESTILOS Y VARIABLES CSS ===========================
/* 
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("text-decoration"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style.marginLeft);
console.log(window.getComputedStyle($linkDOM).getPropertyValue("margin-left"));

// Variables CSS - Custom Properties CSS
const $html = document.documentElement, $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.setProperty("color", varYellowColor);

$html.style.setProperty("--dark-color", "blue");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/


// ========================= DOM: CLASES CSS ===========================
/* 
$card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia");
*/

// ========================= DOM: TEXTO & HTML ===========================

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El Model de Objeto del Documento (<b><i>DOM - Document</i></b>) es un API parar documentos HTML y XML.
    </p>
    <p>
        Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// $whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;