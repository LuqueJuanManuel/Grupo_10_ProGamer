let openVentana = document.querySelector("#userMiventanaAbrir")
let ventana = document.querySelector("#userMiventana")
let cerrarVentana = document.querySelector("#userVentanaCerrar")
let destroyUser = document.querySelector("#userVentanaDestroy")

openVentana.addEventListener('click', () => {
    ventana.style.display = 'block';
});

destroyUser.addEventListener('click', () => {
    console.log('Cuenta eliminada');
    ventana.style.display = 'none';
    alert("¡La cuenta a sido eliminada!")
});

cerrarVentana.addEventListener('click', () => {
    
    ventana.style.display = 'none';
});