import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcut, moveBall } from "./dom/teclado.js";
import countdown from "./dom/countdown.js";
import scrollTopButton from "./dom/btn_scroll.js";
import darkTheme from "./dom/dark_theme.js";
import responsiveMedia from "./dom/objeto_responsive.js";

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

    /* *********** RESPONSIVE MEDIA *********** */
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=BnXXmG3GYSk&list=RDBnXXmG3GYSk&start_radio=1" target="_blank">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/BnXXmG3GYSk?si=Qu07InPm6VyluerB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/a9AKt2UMUycGPMww6" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.5284821814853!2d-99.1505277!3d19.3028607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce005208010919%3A0x9761ee695190b694!2sEstadio%20Azteca!5e0!3m2!1ses-419!2smx!4v1711554414225!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
});

d.addEventListener('keydown', (e) => {
    /* *********** EVENTOS DE TECLADO *********** */
    shortcut(e);
    moveBall(e, '.ball', '.stage');
});

/* *********** DARK MODE *********** */
darkTheme('.dark-theme-btn', 'dark-mode');
