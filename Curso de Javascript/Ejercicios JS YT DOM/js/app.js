import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcut } from "./dom/teclado.js";

const d = document;


d.addEventListener('DOMContentLoaded', function (e) {

    /* *********** MENU HAMBURGUESA *********** */
    hamburguerMenu(".panel-btn", ".panel", ".menu a");

    /* *********** RELOJ *********** */
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");


    /* *********** ALARM *********** */
    alarm("../assets/ringtone.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener('keydown', (e) => {
    /* *********** EVENTOS DE TECLADO *********** */
    shortcut(e);
});
