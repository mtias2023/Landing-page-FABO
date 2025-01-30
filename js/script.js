// Menú hamburguesa
 const menuToggle = document.getElementById('menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');

 menuToggle.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden'); // Muestra u oculta el menú
 });

// Carrusel
const carrusel = document.getElementById("carrusel");

function scrollCarruselIzquierda() {
    carrusel.scrollBy({
        left: -300, 
        behavior: "smooth"
    });
}

function scrollCarruselDerecha() {
    carrusel.scrollBy({
        left: 300, 
        behavior: "smooth"
    });
}

// Función para mostrar/ocultar la respuesta
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".material-icons");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.textContent = "expand_less"; // Cambia a ícono de cerrar
    } else {
        answer.classList.add("hidden");
        icon.textContent = "expand_more"; // Cambia a ícono de abrir
    }
}

 // Mostrar u ocultar el botón según el scroll
 const volverArribaBtn = document.getElementById("volverArriba");

 window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
         volverArribaBtn.classList.remove("hidden");
     } else {
         volverArribaBtn.classList.add("hidden");
     }
 });

 // Volver al inicio al hacer clic en el botón
 volverArribaBtn.addEventListener("click", () => {
     window.scrollTo({
         top: 0,
         behavior: "smooth",
     });
 });