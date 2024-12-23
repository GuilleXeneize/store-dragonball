export function setupAccordion() {
    const filtros = document.querySelectorAll(".filtros");
    const productos = document.querySelectorAll(".card-produc");
    const filtroAll = document.querySelector(
        ".accordion-collapse .filtros[category='all']",
    );

    // Asegurarse de que todos los productos sean visibles al inicio
    productos.forEach((producto) => producto.classList.remove("hidden"));

    // Agregar clase activa al filtro con category='all' al cargar
    if (filtroAll) {
        filtroAll.classList.add("ct_item-active");
    }

    // Agregar evento click a cada filtro
    filtros.forEach((filtro) => {
        filtro.addEventListener("click", function (e) {
            e.preventDefault(); // Prevenir comportamiento predeterminado

            // Eliminar la clase activa de todos los filtros
            filtros.forEach((f) => f.classList.remove("ct_item-active"));

            // Agregar la clase activa al filtro seleccionado
            this.classList.add("ct_item-active");

            // Obtener la categoría seleccionada
            const categoria = this.getAttribute("category");

            // Mostrar/ocultar productos según la categoría
            productos.forEach((producto) => {
                const productoCategoria = producto.getAttribute("category");

                if (categoria === "all" || productoCategoria === categoria) {
                    // Mostrar productos que coincidan con la categoría seleccionada
                    producto.classList.remove("hidden");
                } else {
                    // Ocultar productos que no coincidan
                    producto.classList.add("hidden");
                }
            });
        });
    });
}
