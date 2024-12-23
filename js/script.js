import { hamburguesa } from "./menuHamburquesaIndex.js";
import { listenersCarrito } from "./carrito.js";
import { buscarProductos } from "./buscador.js";
import { setupAccordion } from "./filtros.js";
import { animar } from "./animarCarrito.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguesa(".abrir-menu", ".cerrar-menu");
    listenersCarrito("buy", "borrar-producto", "btn-danger");
    buscarProductos();
    setupAccordion();
    animar(".buy", "d-none");
});
