export function hamburguesa(abrir, cerrar) {
    const d = document,
        $enlaces = d.querySelector(".enlaces");

    d.addEventListener("click", (e) => {
        // Si apretamos abrir o todos sus hijos
        if (e.target.matches(abrir) || e.target.matches(`${abrir} *`)) {
            $enlaces.classList.add("visible");
        }
        if (e.target.matches(cerrar) || e.target.matches(`${cerrar} *`)) {
            $enlaces.classList.remove("visible");
        }
    });
}
