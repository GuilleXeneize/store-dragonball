const d = document,
    contenedorCarrito = d.querySelector("#lista-carrito tbody");

let contador = d.querySelector(".contador-carrito");
let productosCarrito = [];

cargarCarritoLocalStorage();

export function listenersCarrito(agregar, eliminar, vaciar) {
    d.addEventListener("click", (e) => {
        if (e.target.classList.contains(agregar)) {
            e.preventDefault();

            const cardSeleccionado = e.target.parentElement.parentElement;
            datosProductos(cardSeleccionado);
        }

        if (e.target.classList.contains(eliminar)) {
            eliminarProducto(e);
        }

        if (e.target.classList.contains(vaciar)) {
            vaciarCarrito(vaciar);
        }

        cambiarContador();
    });
}

function cambiarContador() {
    const totalCantidad = productosCarrito.reduce(
        (acumulador, prod) => acumulador + prod.cantidad,
        0,
    );
    contador.textContent = totalCantidad;
}

// Para Eliminar
function eliminarProducto(e) {
    const datosId = e.target.getAttribute("data-id");

    productosCarrito = productosCarrito.filter((datos) => datos.id !== datosId);

    guardarCarritoLocalStorage();
    carritoHTML();
}

function vaciarCarrito(vaciar) {
    productosCarrito = [];
    guardarCarritoLocalStorage();

    limpiarHTML();
}

function datosProductos(datos) {
    // console.log(datos);

    // Objeto con el contenido del card
    const infoCard = {
        imagen: datos.querySelector("img").src,
        titulo: datos.querySelector("h3").textContent,
        precio: parseFloat(
            datos.querySelector("h2").textContent.replace("US$", ""),
        ), // Convierte el precio a número
        id: datos.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    };

    const existe = productosCarrito.some((datos) => datos.id === infoCard.id);
    if (existe) {
        const articulos = productosCarrito.map((datos) => {
            if (datos.id === infoCard.id) {
                datos.cantidad++;
                return datos;
            } else {
                return datos;
            }
        });
        productosCarrito = [...articulos];
    } else {
        // Agrega los productos al carrito
        productosCarrito = [...productosCarrito, infoCard];
    }

    console.log(productosCarrito);

    guardarCarritoLocalStorage();

    carritoHTML();
}

function carritoHTML() {
    // Limpia el carrito para que no se repitan al agregar
    limpiarHTML();

    // Recorre el carrito
    productosCarrito.forEach((prod) => {
        // Esto es para no tener que poner prod.imagen, prod.titulo, etc
        const { imagen, titulo, precio, cantidad, id } = prod;
        const row = d.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}" width=50>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                US$${(precio * cantidad).toFixed(2)}
            </td>
            <td>
                ${cantidad}
            </td>
            <td class="td-modal" style="background-color: red;">
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega al tbody
        contenedorCarrito.appendChild(row);
    });

    // Calcula el precio total de todos los productos
    const total = productosCarrito.reduce(
        (acumulador, prod) => acumulador + prod.precio * prod.cantidad,
        0,
    );

    // Crea una fila extra para el TOTAL
    const totalRow = d.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="2" style="text-align: right; font-weight: bold;">TOTAL:</td>
        <td style="font-weight: bold;">US$${total.toFixed(2)}</td>
        <td></td>
    `;
    contenedorCarrito.appendChild(totalRow);
}

// Limpia el html para que no se agreguen siempre los mismos
function limpiarHTML() {
    // Forma mas Lenta de limpiar
    // contenedorCarrito.innerHTML = "";

    // Forma mas rápida si hay muchos elementos
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Guardar el carrito en Local Storage
function guardarCarritoLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}

// Cargar el carrito desde Local Storage
function cargarCarritoLocalStorage() {
    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
        productosCarrito = JSON.parse(carritoStorage);
        // Actualiza el HTML del carrito con los datos almacenados
        carritoHTML();
        // Actualiza el contador con los datos almacenados
        cambiarContador();
    }
}
