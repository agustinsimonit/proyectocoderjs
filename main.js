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

// Datos de producto y generacion de Inventario.

class Producto {
    constructor(nombre, destino, precio, IdPaquete, tipo) {
        this.nombre = nombre;
        this.destino = destino;
        this.precio = parseFloat(precio);
        this.IdPaquete = IdPaquete;
        this.tipo = tipo;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

let inventarioServicios = [];

inventarioServicios.push(new Producto("Bariloche Bus", "Bariloche", 2000, "001", "transporte"));
inventarioServicios.push(new Producto ("Bariloche Avion", "Bariloche", 4000, "002", "transporte"));
inventarioServicios.push(new Producto ("Bariloche Hotel 3", "Bariloche", 2500, "003", "alojamiento"));
inventarioServicios.push(new Producto ("Bariloche Hotel 4", "Bariloche", 3500, "004", "alojamiento"));
inventarioServicios.push(new Producto ("Bariloche Hotel 5", "Bariloche", 5000, "005", "alojamiento"));
inventarioServicios.push(new Producto ("Bariloche MP", "Bariloche", 1100, "006", "regimen"));
inventarioServicios.push(new Producto ("Bariloche PC", "Bariloche", 2100, "007", "regimen"));
inventarioServicios.push(new Producto ("Bariloche con Exc", "Bariloche", 1300, "008", "actividades"));
inventarioServicios.push(new Producto ("Bariloche sin Exc", "Bariloche", 0, "009", "actividades"));
inventarioServicios.push(new Producto ("Mendoza Bus", "Mendoza", 1100, "010", "transporte"));
inventarioServicios.push(new Producto ("Mendoza Avion","Mendoza",  2500, "011", "transporte"));
inventarioServicios.push(new Producto ("Mendoza Hotel 3","Mendoza",  2500, "012", "alojamiento"));
inventarioServicios.push(new Producto ("Mendoza Hotel 4","Mendoza",  3300, "013", "alojamiento"));
inventarioServicios.push(new Producto ("Mendoza Hotel 5","Mendoza",  4200, "014", "alojamiento"));
inventarioServicios.push(new Producto ("Mendoza MP","Mendoza",  800, "015", "regimen"));
inventarioServicios.push(new Producto ("Mendoza PC","Mendoza",  1200, "016", "regimen"));
inventarioServicios.push(new Producto ("Mendoza con Exc","Mendoza",  600, "017", "actividades"));
inventarioServicios.push(new Producto ("Mendoza sin Exc","Mendoza",  0, "018", "actividades"));
inventarioServicios.push(new Producto ("Sur Argentino Bus", "Sur Argentino", 2800, "019", "transporte"));
inventarioServicios.push(new Producto ("Sur Argentino Avion", "Sur Argentino",  4300, "020", "transporte"));
inventarioServicios.push(new Producto ("Sur Argentino Hotel 3", "Sur Argentino",  6000, "021", "alojamiento"));
inventarioServicios.push(new Producto ("Sur Argentino Hotel 4", "Sur Argentino",  8200, "022", "alojamiento"));
inventarioServicios.push(new Producto ("Sur Argentino Hotel 5", "Sur Argentino",  10100, "023", "alojamiento"));
inventarioServicios.push(new Producto ("Sur Argentino MP", "Sur Argentino",  2100, "024", "regimen"));
inventarioServicios.push(new Producto ("Sur Argentino PC", "Sur Argentino",  4000, "025", "regimen"));
inventarioServicios.push(new Producto ("Sur Argentino con Exc", "Sur Argentino",  2800, "026", "actividades"));
inventarioServicios.push(new Producto ("Sur Argentino sin Exc", "Sur Argentino",  0, "027", "actividades"));
inventarioServicios.push(new Producto ("Norte Argentino Bus", "Norte Argentino",  1400, "028", "transporte"));
inventarioServicios.push(new Producto ("Norte Argentino Avion", "Norte Argentino",  2140, "029", "transporte"));
inventarioServicios.push(new Producto ("Norte Argentino Hotel 3", "Norte Argentino",  3000, "030", "alojamiento"));
inventarioServicios.push(new Producto ("Norte Argentino Hotel 4", "Norte Argentino",  4100, "031", "alojamiento"));
inventarioServicios.push(new Producto ("Norte Argentino Hotel 5", "Norte Argentino",  5050, "032", "alojamiento"));
inventarioServicios.push(new Producto ("Norte Argentino MP", "Norte Argentino",  600, "033", "regimen"));
inventarioServicios.push(new Producto ("Norte Argentino PC", "Norte Argentino",  1000, "034", "regimen"));
inventarioServicios.push(new Producto ("Norte Argentino con Exc", "Norte Argentino",  1200, "035", "actividades"));
inventarioServicios.push(new Producto ("Norte Argentino sin Exc", "Norte Argentino",  0, "036", "actividades"));
inventarioServicios.push(new Producto ("Cataratas Bus", "Cataratas", 1600, "037", "transporte"));
inventarioServicios.push(new Producto ("Cataratas Avion", "Cataratas", 2340, "038", "transporte"));
inventarioServicios.push(new Producto ("Cataratas Hotel 3", "Cataratas", 3200, "039", "alojamiento"));
inventarioServicios.push(new Producto ("Cataratas Hotel 4", "Cataratas", 4300, "040", "alojamiento"));
inventarioServicios.push(new Producto ("Cataratas Hotel 5", "Cataratas", 5350, "041", "alojamiento"));
inventarioServicios.push(new Producto ("Cataratas MP", "Cataratas", 650, "042", "regimen"));
inventarioServicios.push(new Producto ("Cataratas PC", "Cataratas", 1100, "043", "regimen"));
inventarioServicios.push(new Producto ("Cataratas con Exc", "Cataratas", 1500, "044", "actividades"));
inventarioServicios.push(new Producto ("Cataratas sin Exc", "Cataratas", 0, "045", "actividades"));
console.log(inventarioServicios);

// Botones de cada servicio para agregar al carrito

botonesServ(inventarioServicios);
let miCarrito = [];

function botonesServ(inventarioServicios){
    inventarioServicios.forEach((elemento) =>{
        let section = document.getElementById("paquetesPrincipales")
        let article = document.createElement("article")
        article.classList.add("tipo", elemento.tipo)
        article.setAttribute("destino", elemento.destino)
        article.innerHTML += `
        <div class="contenedorServicios">
        <h3>${elemento.destino} - ${elemento.tipo}</h3>
        <h5>${elemento.nombre}</h5>
        <p class="precioProducto">Precio: $${elemento.precio}</p>
        <button id="boton${elemento.id}" class="boton-agregar">Agregar al carrito</button> 
        </div>
         `
        section.appendChild(article)
    })
}
        let boton = document.getElementById("boton${elemento.id}");
        boton.addEventListener("click", agregarAlCarrito(elemento.id))     
    //})
// }

// document.getElementById("paquetesPrincipales").appendChild(botonesServ);

function agregarAlCarrito(){
    let productoAgregar = inventario.filter((elemento) => elemento.id == id)[0]
    let itemCompra = new ItemCompra(productoAgregar.id, productoAgregar.nombre, productoAgregar.precio, productoAgregar.destino);
    miCarrito.push(itemCompra)        
}

// Creacion del boton "Ver Compra" desde JS y mostrar el saldo total en el HTML

let tuCompra = document.createElement("p")
tuCompra.style.fontSize = "30px"
document.getElementById("divVerCompra").appendChild(tuCompra);

let botonVerCompra = document.createElement("button");
botonVerCompra.innerText = "Ver mi compra";
botonVerCompra.style.borderRadius = "12px";
botonVerCompra.style.backgroundColor = "black";
botonVerCompra.style.color = "white";
botonVerCompra.style.width = "100%";
botonVerCompra.style.fontSize = "40px"
var saldoTotal = 0;
botonVerCompra.onclick = function(){
    for (elemento of miCarrito) {
        saldoTotal = saldoTotal + elemento.precio;
        tuCompra.textContent = "Total en ARS: " + saldoTotal;
    }
}
document.getElementById("divVerCompra").appendChild(botonVerCompra);