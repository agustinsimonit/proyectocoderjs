// Solicito nombre de Usuario, para personalizar mensaje de Bienvenida

let personalizarHtml = document.getElementById("interacturar");
let botonPersonalizarHtml = document.createElement("button")
botonPersonalizarHtml.innerText = "Ingrese su nombre para personalizar la experiencia";
botonPersonalizarHtml.style.borderRadius = "8px";
botonPersonalizarHtml.style.backgroundColor = "black";
botonPersonalizarHtml.style.color = "white";
botonPersonalizarHtml.style.width = "25%";
let mostrarPersonalizado = document.createElement("h2");
mostrarPersonalizado.style.fontSize = "25px"

botonPersonalizarHtml.onclick = function() {
    let nombreUsuario = prompt("Ingresa tu nombre");
        if (nombreUsuario != ""){
            mostrarPersonalizado.textContent = "Bienvenido " + nombreUsuario + " al cotizador online de productos turisticos";
            botonPersonalizarHtml.hidden = "true";
        } else {
            mostrarPersonalizado.itextContent = "Bienvenido al cotizador online de productos turisticos";
            botonPersonalizarHtml.hidden = "true"; 
        }   
}
document.getElementById("interacturar").appendChild(botonPersonalizarHtml);
document.getElementById("interacturar").appendChild(mostrarPersonalizado);

