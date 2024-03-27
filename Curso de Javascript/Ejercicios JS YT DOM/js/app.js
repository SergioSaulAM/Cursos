import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcut, moveBall } from "./dom/teclado.js";
import countdown from "./dom/countdown.js";
import scrollTopButton from "./dom/btn_scroll.js";
import darkTheme from "./dom/dark_theme.js";

const d = document;


d.addEventListener('DOMContentLoaded', function (e) {

    /* *********** MENU HAMBURGUESA *********** */
    hamburguerMenu(".panel-btn", ".panel", ".menu a");

    /* *********** RELOJ *********** */
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");


    /* *********** ALARM *********** */
    alarm("../assets/ringtone.mp3", "#activar-alarma", "#desactivar-alarma");


    /* *********** COUNTDOWN *********** */
    countdown('countdown', "May 23, 2024", "Feliz Cumpleaños!!! 🥳🥳");

    /* *********** SCROLL TOP BUTTON *********** */
    scrollTopButton('.scroll-top-button');
});

d.addEventListener('keydown', (e) => {
    /* *********** EVENTOS DE TECLADO *********** */
    shortcut(e);
    moveBall(e, '.ball', '.stage');
});

/* *********** DARK MODE *********** */
darkTheme('.dark-theme-btn', 'dark-mode');
