// Datos de producto y generacion de Inventario.

class Producto {
    constructor(id, nombre, destino, precio, tipo, stock) {
        this.id = id;
        this.nombre = nombre;
        this.destino = destino;
        this.precio = parseFloat(precio);
        this.tipo = tipo;
        this.stock = parseFloat(stock);
        this.descontarStock = function(cantidad){
            if (this.stock == 0){
                alert("Lamentablemente nos quedamos sin lugar")
            }
            else if (cantidad <= this.stock) {
                this.stock = this.stock - cantidad;
            }
            else {
                alert("Nos quedan: " + this.stock + " disponibles")
            }
        }
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

class ServicioMarcado {
    constructor (destinoServicio, idServicio, nombreServicio, tipoServicio, cantidad, precioServicio){
    this.destinoServicio = destinoServicio;
    this.idServicio = idServicio;
    this.nombreServicio = nombreServicio;
    this.tipoServicio = tipoServicio;
    this.cantidad = cantidad;
    this.precioServicio = parseFloat(precioServicio);
    this.obtenerTotal = function(){
        return this.cantidad*this.precio;
    }
    }
}

let inventario = [];

inventario.push(new Producto ("001", "Bariloche Bus", "Bariloche", 2000, "transporte", 30));
inventario.push(new Producto ("002", "Bariloche Avion", "Bariloche", 4000, "transporte", 30));
inventario.push(new Producto ("003", "Bariloche Hotel 3", "Bariloche", 2500, "alojamiento", 30));
inventario.push(new Producto ("004", "Bariloche Hotel 4", "Bariloche", 3500, "alojamiento", 30));
inventario.push(new Producto ("005", "Bariloche Hotel 5", "Bariloche", 5000, "alojamiento", 30));
inventario.push(new Producto ("006", "Bariloche MP", "Bariloche", 1100, "regimen", 30));
inventario.push(new Producto ("007", "Bariloche PC", "Bariloche", 2100, "regimen", 30));
inventario.push(new Producto ("008", "Bariloche con Exc", "Bariloche", 1300, "actividades", 30));
inventario.push(new Producto ("009", "Bariloche sin Exc", "Bariloche", 0, "actividades", 30));
inventario.push(new Producto ("010", "Mendoza Bus", "Mendoza", 1100, "transporte", 30));
inventario.push(new Producto ("011", "Mendoza Avion","Mendoza",  2500, "transporte", 30));
inventario.push(new Producto ("012", "Mendoza Hotel 3","Mendoza",  2500, "alojamiento", 30));
inventario.push(new Producto ("013", "Mendoza Hotel 4","Mendoza",  3300, "alojamiento", 30));
inventario.push(new Producto ("014", "Mendoza Hotel 5","Mendoza",  4200, "alojamiento", 30));
inventario.push(new Producto ("015", "Mendoza MP","Mendoza",  800, "regimen", 30));
inventario.push(new Producto ("016", "Mendoza PC","Mendoza",  1200, "regimen", 30));
inventario.push(new Producto ("017", "Mendoza con Exc","Mendoza",  600, "actividades", 30));
inventario.push(new Producto ("018", "Mendoza sin Exc","Mendoza",  0, "actividades", 30));
inventario.push(new Producto ("019", "Sur Argentino Bus", "Sur Argentino", 2800, "transporte", 30));
inventario.push(new Producto ("020", "Sur Argentino Avion", "Sur Argentino",  4300, "transporte", 30));
inventario.push(new Producto ("021", "Sur Argentino Hotel 3", "Sur Argentino",  6000, "alojamiento", 30));
inventario.push(new Producto ("022", "Sur Argentino Hotel 4", "Sur Argentino",  8200, "alojamiento", 30));
inventario.push(new Producto ("023", "Sur Argentino Hotel 5", "Sur Argentino",  10100, "alojamiento", 30));
inventario.push(new Producto ("024", "Sur Argentino MP", "Sur Argentino",  2100, "regimen", 30));
inventario.push(new Producto ("025", "Sur Argentino PC", "Sur Argentino",  4000, "regimen", 30));
inventario.push(new Producto ("026", "Sur Argentino con Exc", "Sur Argentino",  2800, "actividades", 30));
inventario.push(new Producto ("027", "Sur Argentino sin Exc", "Sur Argentino",  0, "actividades", 30));
inventario.push(new Producto ("028", "Norte Argentino Bus", "Norte Argentino",  1400, "transporte", 30));
inventario.push(new Producto ("029", "Norte Argentino Avion", "Norte Argentino",  2140, "transporte", 30));
inventario.push(new Producto ("030", "Norte Argentino Hotel 3", "Norte Argentino",  3000, "alojamiento", 30));
inventario.push(new Producto ("031", "Norte Argentino Hotel 4", "Norte Argentino",  4100, "alojamiento", 30));
inventario.push(new Producto ("032", "Norte Argentino Hotel 5", "Norte Argentino",  5050, "alojamiento", 30));
inventario.push(new Producto ("033", "Norte Argentino MP", "Norte Argentino",  600, "regimen", 30));
inventario.push(new Producto ("034", "Norte Argentino PC", "Norte Argentino",  1000, "regimen", 30));
inventario.push(new Producto ("035", "Norte Argentino con Exc", "Norte Argentino",  1200, "actividades", 30));
inventario.push(new Producto ("036", "Norte Argentino sin Exc", "Norte Argentino",  0, "actividades", 30));
inventario.push(new Producto ("037", "Cataratas Bus", "Cataratas", 1600, "transporte", 30));
inventario.push(new Producto ("038", "Cataratas Avion", "Cataratas", 2340, "transporte", 30));
inventario.push(new Producto ("039", "Cataratas Hotel 3", "Cataratas", 3200, "alojamiento", 30));
inventario.push(new Producto ("040", "Cataratas Hotel 4", "Cataratas", 4300, "alojamiento", 30));
inventario.push(new Producto ("041", "Cataratas Hotel 5", "Cataratas", 5350, "alojamiento", 30));
inventario.push(new Producto ("042", "Cataratas MP", "Cataratas", 650, "regimen", 30));
inventario.push(new Producto ("043", "Cataratas PC", "Cataratas", 1100, "regimen", 30));
inventario.push(new Producto ("044", "Cataratas con Exc", "Cataratas", 1500, "actividades", 30));
inventario.push(new Producto ("045", "Cataratas sin Exc", "Cataratas", 0, "actividades", 30));
console.log(inventario);

servicioInventario(inventario)

// Botones de cada servicio para agregar al carrito

function servicioInventario(inventario){
    inventario.forEach((elemento) =>{
        let section = document.getElementById("paquetesPrincipales")
        let article = document.createElement("article")
        article.classList.add("tipo", elemento.tipo)
        article.setAttribute("destino", elemento.destino)
        article.innerHTML += `
        <div class="contenedorServicios">
        <h3>${elemento.destino} - ${elemento.tipo}</h3>
        <h5>${elemento.nombre}</h5>
        <p class="precioProducto">Precio: $${elemento.precio}</p>
        <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito()">Agregar al carrito</button> 
        </div>
         `
        section.appendChild(article)
    })
}

let carrito = [];

function agregarAlCarrito(id) {
    let agregarServicio = inventario.filter((elemento) => elemento.id == id)[0]
    // let servicioDisponible = carrito.find(elemento => elemento.idServicio == agregarServicio.id)
    
    // let id = servicioDisponible.idServicio
    let servicioMarcado = new ServicioMarcado(agregarServicio.id, agregarServicio.nombre, agregarServicio.cant, agregarServicio.precio, agregarServicio.tipo, agregarServicio.destino)
    carrito.push(servicioMarcado)
    console.log(carrito)
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
    for (elemento of carrito) {
        saldoTotal = saldoTotal + elemento.precio;
        tuCompra.textContent = "Total en ARS: " + saldoTotal;
    }
}
document.getElementById("divVerCompra").appendChild(botonVerCompra);