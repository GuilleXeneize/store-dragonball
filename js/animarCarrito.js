const d = document;

export function animar(btn, className) {
    d.addEventListener("click", (e) => {
        // Verificar si el clic se realizó sobre un elemento que coincide con el selector btn
        if (e.target.matches(btn)) {
            const hermanoAnterior = e.target.previousElementSibling;

            // Asegurarse de que el hermano anterior exista
            if (hermanoAnterior) {
                // Seleccionar todos los botones con la clase "buy" (enlaces en este caso)
                const $botones = d.querySelectorAll(".buy");

                // Deshabilitar todos los botones (enlaces)
                $botones.forEach((boton) => {
                    boton.style.pointerEvents = "none"; // Deshabilitar clickeo en los enlaces
                    boton.style.opacity = "0.5"; // Opcional: Hacer los botones semi-translúcidos
                });

                // Remover la clase d-none del hermano anterior
                hermanoAnterior.classList.remove(className);

                // Volver a habilitar los botones después de 5800ms
                setTimeout(() => {
                    hermanoAnterior.classList.add(className);
                    $botones.forEach((boton) => {
                        boton.style.pointerEvents = "auto"; // Volver a habilitar clickeo
                        boton.style.opacity = "1"; // Restaurar la opacidad original
                    });
                }, 800);
            }
        }
    });
}
