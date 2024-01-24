import hamburguerMenu from "./dom/menu_hamburguesa.js";

const d = document;

d.addEventListener('DOMContentLoaded', function (e) {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
});
