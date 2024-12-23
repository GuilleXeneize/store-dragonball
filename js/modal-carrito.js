// Referencias al enlace y al modal
const navLinkCarrito = document.querySelector(".nav-link.nav-link-p");
const modalCarrito = new bootstrap.Modal(
    document.getElementById("modalCarrito"),
);

// Variable para alternar el estado del modal
let isModalOpen = false;

// Abrir/cerrar el modal al hacer clic
navLinkCarrito.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto del enlace
    if (isModalOpen) {
        modalCarrito.hide(); // Cerrar modal
        isModalOpen = false;
    } else {
        modalCarrito.show(); // Abrir modal
        isModalOpen = true;
    }
});
