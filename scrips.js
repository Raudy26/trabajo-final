const carruselLaptops = document.getElementById('carrusel-laptops');
const imagenesLaptops = carruselLaptops.querySelectorAll('img');
let indiceActual = 0;

function mostrarImagenSiguiente() {
    imagenesLaptops[indiceActual].style.transform = 'translateX(-100%)';
    indiceActual = (indiceActual + 1) % imagenesLaptops.length;
    imagenesLaptops[indiceActual].style.transform = 'translateX(0)';
  
}

setInterval(mostrarImagenSiguiente, 5000); // Cambiar imagen cada 5 segundos (5000 ms