let openVentana = document.querySelectorAll("#adminmiventanaAbrir")
let ventana = document.querySelectorAll("#adminMiventana")
let cerrarVentana = document.querySelectorAll("#adminMiventanaCerrar")


for (let i = 0; i < openVentana.length; i++) {
    openVentana[i].addEventListener("click", () => {
        ventana[i].style.display = "block";
    });
    for (let i = 0; i < cerrarVentana.length; i++) {
        cerrarVentana[i].addEventListener("click", () => {
            ventana[i].style.display = "none";
        });
    }
}