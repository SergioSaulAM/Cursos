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
/*
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
*/


// ========================= DOM: TRAVERSING: RECORRIENDO EL DOM ===========================

/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.firstChild);
console.log($cards.lastElementChild);
console.log($cards.lastChild);
console.log($cards.previousElementSibling);
console.log($cards.previousSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/



// ========================= DOM: CREANDO ELEMENTOS Y FRAGMENTOS ===========================

/* const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://loremflickr.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://loremflickr.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// Renderizado de elementos


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"], $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");

document.body.appendChild($ul);
estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});


const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");

$ul2.innerHTML = "";
document.body.appendChild($ul2);
continentes.forEach(e => ($ul2.innerHTML += `<li>${e}</li>`));



// Fragmentos

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */


// ========================= DOM: TEMPLATES HTML ===========================
/*
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://picsum.photos/id/36/200/200"
        },
        {
            title: "Música",
            img: "https://picsum.photos/id/39/200/200"
        }
    ]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true); // 👈🏻 Código para clonar
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment);
 */


// ========================= DOM: MODIFICANDO ELEMENTOS (OLD STYLE) ===========================
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://picsum.photos/200/200" alt="Lorem Picsum">
    <figcaption>Lorem Picsum</figcaption>
`;

$newCard.classList.add("card");
// $cards.replaceChild($newCard, $cars.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);
*/


// ========================= DOM: MODIFICANDO ELEMENTOS (COOL STYLE) ===========================

/*
    .insertAdjacent...
        .insertAdjacentElement(position, el)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)
    Posiciones:
        beforebegin (hermano anterior)
        afterbegin (primer hijo)
        beforeend (ultimo hijo)
        afterend (hermano siguiente)

*/
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://picsum.photos/200/200" alt="Lorem Picsum">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Lorem Picsum");
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.before($newCard);
// $cards.append($newCard);
$cards.after($newCard);
 */


// ========================= DOM: MANEJADORES DE EVENTOS ===========================
/*
const $eventoSemantico = document.getElementById('evento-semantico'),
    $eventoMultiple = document.getElementById('evento-multiple');

function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

// 👇🏻 FUNCIÓN COMO EVENTO SEMÁNTICO 👇🏻
$eventoSemantico.onclick = holaMundo;


$eventoSemantico.onclick = function (e) {
    alert("Hola Mudno Manejador de Eventos Semántico");
    console.log(e);
    console.log(event);
}

// 👇🏻 FUNCIÓN COMO EVENTO MÚLTIPLE 👇🏻
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
 */


// ========================= DOM: EVENTOS CON PARÁMETROS Y REMOVER EVENTOS ===========================
/*
const $eventoMultiple = document.getElementById('evento-multiple'),
$eventoRemover = document.getElementById('evento-remover');

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click", (e) => {
    saludar('Saul');
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick); // 👈🏻 Aquí se deshabilita la función que maneja el evento. SIN PERÉNTESIS
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener('dblclick', removerDobleClick);
 */


// ========================= DOM: FLUJO DE EVENTOS (BURBUJA Y CAPTURA) ===========================
/*
const $divsElementos = document.querySelectorAll('.eventos-flujo div');

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

console.log($divsElementos);

$divsElementos.forEach(div => {
    // div.addEventListener("click", flujoEventos);
    // div.addEventListener("click", flujoEventos, false);
    // div.addEventListener("click", flujoEventos, true);
    div.addEventListener('click', flujoEventos, {
        capture: false,
        once: true
    })
});
 */

// ========================= DOM: STOPPROPAGATION & PREVENTDEFAULT ===========================

/* const $divsElementos = document.querySelectorAll('.eventos-flujo div'),
    $linkEventos = document.querySelector('.eventos-flujo a');

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
}

console.log($divsElementos);

$divsElementos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener('click', (e) => {
    alert("Hola");
    e.preventDefault();
    e.stopPropagation();
}) */



// ========================= DOM: DELEGACIÓN DE EVENTOS ===========================

/*
const $divsElementos = document.querySelectorAll('.eventos-flujo div');

function flujoEventos(e) {
    console.log(`Hola, te saluda ${this}, el click lo originó ${e.target.className}`); // 👈🏻 el this hace referencia al elemento document
}

document.addEventListener('click', (e) => {
    console.log('Click en ', e.target);
    if (e.target.matches('.eventos-flujo div')) {
        flujoEventos(e);
    }
    if (e.target.matches('.eventos-flujo a')) {
        alert("Hola");
        e.preventDefault();
    }
})
*/



// ========================= BOM: PROPIEDADES Y EVENTOS ===========================
/*
const $webApisHeadint = document.getElementById('web-apis-heading');

window.addEventListener('resize', (e) => {
    console.clear();
    console.log("********* EVENTO RESIZE *********");
    console.log(innerWidth);
    console.log(innerHeight);
    console.log(outerWidth);
    console.log(outerHeight);
    console.log(e);
});

window.addEventListener('scroll', e => {
    console.log("********* EVENTO SCROLL *********");
    console.log(scrollX, scrollY);
    console.log(e);
});

window.addEventListener("load", e => {
    console.log("********* EVENTO LOAD *********");
    console.log(screenX);
    console.log(screenY);
    console.log(e);
});

document.addEventListener('DOMContentLoaded', (e) => {
    console.log("********* EVENTO DOMContentLoaded *********");
    console.log(screenX);
    console.log(screenY);
    console.log(e);
});
 */



// ========================= BOM: MÉTODOS ===========================

const $btnAbrir = document.getElementById('abrir-ventana'),
    $btnCerrar = document.getElementById('cerrar-ventana'),
    $btnImprimir = document.getElementById('imprimir-ventana');

let ventana;

$btnAbrir.addEventListener('click', (e) => {
    ventana = open('https://jonmircha.com');
});

$btnCerrar.addEventListener('click', (e) => {
    ventana.close();
});

$btnImprimir.addEventListener('click', (e) => {
    print()
});

// alert('Hola');
// prompt('msg');
// confirm('msg');



// ========================= BOM: OBJETOS: URL, HISTORIAL Y NAVEGADOR ===========================

console.log('***************** OBJETO URL (location) *****************');
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
// location.reload()


console.log('***************** OBJETO HISTORIAL (history) *****************');
console.log(history);
console.log(history.length);
// history.forward(1);
// history.go(-3);
// history.back(2);


console.log('***************** OBJETO NAVEGADOR (navigator) *****************');
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);

