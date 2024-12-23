const botonFormulario = document.getElementById("abrirFormulario");
const modalFormulario = new bootstrap.Modal(
    document.getElementById("modalFormulario"),
);

botonFormulario.addEventListener("click", () => {
    modalFormulario.show();
});
