// 1. Lógica de Cambio de Color (Modo Oscuro)
const btnOscuro = document.getElementById("cambiar-color-oscuro");
const btnClaro = document.getElementById("cambiar-color-claro");

btnOscuro.addEventListener("click", () => {
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-oscuro");
});

btnClaro.addEventListener("click", () => {
    document.body.classList.remove("modo-oscuro");
    document.body.classList.add("modo-claro");
});

// 2. Validación de Formulario
const myForm = document.getElementById("myForm");
if (myForm) {
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const pass = document.getElementById("password");

        if (nombre.value === "" || email.value === "" || pass.value === "") {
            alert("Por favor, complete todos los campos");
        } else {
            alert("¡Formulario enviado correctamente!");
        }
    });
}

// 3. Funciones de Redes Sociales
function openWhatsApp() {
    const phone = "1234567890"; // Cambia por tu número
    const message = "Hola Game Price, me gustaría contactarte";
    window.open(`https://youtu.be/dQw4w9WgXcQ?si=FIDv6cHBNQrLhB9y`, '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/geeks_para_geeks?igsh=MXg2MGJ3ZjZrbTF6Yg==', '_blank');
}