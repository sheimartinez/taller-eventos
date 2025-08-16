const contenedor = document.getElementById('contenedor');
contenedor.addEventListener('click', () => {
    alert('Hola! Soy el div');
});
const boton = document.getElementById('btn-saludar');
boton.addEventListener('click', function(event) {
    event.stopPropagation();
});
