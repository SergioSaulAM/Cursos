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