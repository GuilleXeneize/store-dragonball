const d = document;

export function buscarProductos() {
    const buscadorInput = d.getElementById("buscador");
    const productos = d.querySelectorAll(".card-produc");

    // Input detecta cambios en la barra de búsqueda
    buscadorInput.addEventListener("input", () => {
        // Obtener el valor de la búsqueda
        const terminoBusqueda = buscadorInput.value.trim().toLowerCase();

        if (terminoBusqueda === "") {
            // Si la barra de búsqueda está vacía, mostrar todos los productos
            productos.forEach((producto) => {
                producto.classList.remove("d-none");
            });
        } else {
            //Si hay texto Para saber si hay coincidencias
            let coincidencias = false;

            productos.forEach((producto) => {
                const nombreProducto = producto
                    .querySelector(".nombre-producto")
                    .textContent.toLowerCase();

                // Verificar si el nombre del producto empieza con el texto de búsqueda
                if (
                    nombreProducto.startsWith(terminoBusqueda) ||
                    nombreProducto.includes(terminoBusqueda)
                ) {
                    producto.classList.remove("d-none");
                    coincidencias = true;
                } else {
                    producto.classList.add("d-none");
                }
            });

            // Si no hay coincidencias, mostrar todos los productos
            if (!coincidencias) {
                productos.forEach((producto) => {
                    producto.classList.remove("d-none");
                });
            }
        }
    });
}
