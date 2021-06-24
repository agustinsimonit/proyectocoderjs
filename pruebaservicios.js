// Defino el objeto PRODUCTO

class Producto {
    constructor(id, nombre, destino, precio, tipo, stock) {
        this.id = id;
        this.nombre = nombre;
        this.destino = destino;
        this.precio = precio;
        this.tipo = tipo;
        this.stock = stock;
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
    constructor (destino, idServicio, nombreServicio, precio, tipoServicio, cantidad){
    this.destino = destino;
    this.idServicio = idServicio;
    this.nombreServicio = nombreServicio;
    this.precio = precio;
    this.tipoServicio = tipoServicio;
    this.cantidad = cantidad;
    this.obtenerTotal = function(){
        return this.cantidad * this.precio;
    }
    }
}

// Creacion de la Lista de Productos (Array)


let inventario = [];

inventario.push(new Producto (001, "Bus", "Bariloche", 2000, "transporte", 30));
inventario.push(new Producto (002, "Avion", "Bariloche", 4000, "transporte", 30));
inventario.push(new Producto (003, "Hotel 3", "Bariloche", 2500, "alojamiento", 30));
inventario.push(new Producto (004, "Hotel 4", "Bariloche", 3500, "alojamiento", 30));
inventario.push(new Producto (005, "Hotel 5", "Bariloche", 5000, "alojamiento", 30));
inventario.push(new Producto (006, "MP", "Bariloche", 1100, "regimen", 30));
inventario.push(new Producto (007, "PC", "Bariloche", 2100, "regimen", 30));
inventario.push(new Producto (010, "con Exc", "Bariloche", 1300, "actividades", 30));
inventario.push(new Producto (011, "sin Exc", "Bariloche", 0, "actividades", 30));
inventario.push(new Producto (012, "Bus", "Mendoza", 1100, "transporte", 30));
inventario.push(new Producto (013, "Avion","Mendoza",  2500, "transporte", 30));
inventario.push(new Producto (014, "Hotel 3","Mendoza",  2500, "alojamiento", 30));
inventario.push(new Producto (015, "Hotel 4","Mendoza",  3300, "alojamiento", 30));
inventario.push(new Producto (016, "Hotel 5","Mendoza",  4200, "alojamiento", 30));
inventario.push(new Producto (017, "MP","Mendoza",  800, "regimen", 30));
inventario.push(new Producto (020, "PC","Mendoza",  1200, "regimen", 30));
inventario.push(new Producto (021, "con Exc","Mendoza",  600, "actividades", 30));
inventario.push(new Producto (022, "sin Exc","Mendoza",  0, "actividades", 30));
inventario.push(new Producto (023, "Bus", "Sur Argentino", 2800, "transporte", 30));
inventario.push(new Producto (024, "Avion", "Sur Argentino",  4300, "transporte", 30));
inventario.push(new Producto (025, "Hotel 3", "Sur Argentino",  6000, "alojamiento", 30));
inventario.push(new Producto (026, "Hotel 4", "Sur Argentino",  8200, "alojamiento", 30));
inventario.push(new Producto (027, "Hotel 5", "Sur Argentino",  10100, "alojamiento", 30));
inventario.push(new Producto (030, "MP", "Sur Argentino",  2100, "regimen", 30));
inventario.push(new Producto (031, "PC", "Sur Argentino",  4000, "regimen", 30));
inventario.push(new Producto (032, "con Exc", "Sur Argentino",  2800, "actividades", 30));
inventario.push(new Producto (033, "sin Exc", "Sur Argentino",  0, "actividades", 30));
inventario.push(new Producto (034, "Bus", "Norte Argentino",  1400, "transporte", 30));
inventario.push(new Producto (035, "Avion", "Norte Argentino",  2140, "transporte", 30));
inventario.push(new Producto (036, "Hotel 3", "Norte Argentino",  3000, "alojamiento", 30));
inventario.push(new Producto (037, "Hotel 4", "Norte Argentino",  4100, "alojamiento", 30));
inventario.push(new Producto (040, "Hotel 5", "Norte Argentino",  5050, "alojamiento", 30));
inventario.push(new Producto (041, "MP", "Norte Argentino",  600, "regimen", 30));
inventario.push(new Producto (042, "PC", "Norte Argentino",  1000, "regimen", 30));
inventario.push(new Producto (043, "con Exc", "Norte Argentino",  1200, "actividades", 30));
inventario.push(new Producto (044, "sin Exc", "Norte Argentino",  0, "actividades", 30));
inventario.push(new Producto (045, "Bus", "Cataratas", 1600, "transporte", 30));
inventario.push(new Producto (046, "Avion", "Cataratas", 2340, "transporte", 30));
inventario.push(new Producto (047, "Hotel 3", "Cataratas", 3200, "alojamiento", 30));
inventario.push(new Producto (050, "Hotel 4", "Cataratas", 4300, "alojamiento", 30));
inventario.push(new Producto (051, "Hotel 5", "Cataratas", 5350, "alojamiento", 30));
inventario.push(new Producto (052, "MP", "Cataratas", 650, "regimen", 30));
inventario.push(new Producto (053, "PC", "Cataratas", 1100, "regimen", 30));
inventario.push(new Producto (054, "con Exc", "Cataratas", 1500, "actividades", 30));
inventario.push(new Producto (055, "sin Exc", "Cataratas", 0, "actividades", 30));


// Botones de cada destino, para agregar al carrito luego los productos necesarios.

let botonesDestinos = document.getElementById("botonDestinos")
let contenedorBotonesServicios = document.createElement("div")
contenedorBotonesServicios.classList.add("btnDestinos")
contenedorBotonesServicios.innerHTML += `
    <button id="btnBariloche" type="button" class="btn btn-primary" value="Bariloche">Bariloche</button>
    <button id="btnMendoza" type="button" class="btn btn-primary" value="Mendoza">Mendoza</button>
    <button id="btnSurArgentino" type="button" class="btn btn-primary" value="Sur Argentino">Sur Argentino</button>
    <button id="btnNorteArgentino" type="button" class="btn btn-primary" value="Norte Argentino">Norte Argentino</button>
    <button id="btnCataratas" type="button" class="btn btn-primary" value="Cataratas">Cataratas</button>
`
botonesDestinos.appendChild(contenedorBotonesServicios);

let botonBariloche = document.getElementById("btnBariloche").value;
let botonMendoza = document.getElementById("btnMendoza").value;
let botonSurArgentino = document.getElementById("btnSurArgentino").value;
let botonNorteArgentino = document.getElementById("btnNorteArgentino").value;
let botonCataratas = document.getElementById("btnCataratas").value;

$("#btnBariloche").click(() => {
    inventario.forEach((elemento) =>{
        if (botonBariloche == elemento.destino){
            console.log(Producto, "Bariloche")
            let filtrado = inventario.filter(elemento => elemento.destino == botonBariloche)
            let inventarioFiltrado = [];
            inventarioFiltrado.push(filtrado)
            console.log(inventarioFiltrado)
            let article = document.createElement("article")
            article.innerHTML = ""
                let section = document.getElementById("paquetesPrincipales")
                article.classList.add("tipoDestino", elemento.tipo)
                article.setAttribute("destino", elemento.destino)
                article.innerHTML = `
                    <span class="contenedorServicios">
                    <h3>${elemento.destino}</h3>
                    <h3>${elemento.tipo}</h3>
                    <h5>${elemento.nombre}</h5>
                    <p class="precioProducto">Precio: $${elemento.precio}</p>
                    <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito(${elemento.id})">SELECCIONAR</button> 
                    </span>
                `
                section.appendChild(article)
        }else{
            console.log("NOOOO Funciona!")
        }
    })
});

$("#btnMendoza").click(() => {
    inventario.forEach((elemento) =>{
        if (botonMendoza == elemento.destino){
            console.log(Producto, "Mendoza")
            let filtrado = inventario.filter(elemento => elemento.destino == botonMendoza)
            let inventarioFiltrado = [];
            inventarioFiltrado.push(filtrado)
            console.log(inventarioFiltrado)
            let article = document.createElement("article")
            article.innerHTML = ""
            let section = document.getElementById("paquetesPrincipales")
            article.classList.add("tipoDestino", elemento.tipo)
            article.setAttribute("destino", elemento.destino)
            article.innerHTML = `
                <span class="contenedorServicios">
                <h3>${elemento.destino}</h3>
                <h3>${elemento.tipo}</h3>
                <h5>${elemento.nombre}</h5>
                <p class="precioProducto">Precio: $${elemento.precio}</p>
                <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito(${elemento.id})">SELECCIONAR</button> 
                </span>
            `
            section.appendChild(article)
        }else{
            console.log("NOOOO Funciona!")
        }
    })
});

$("#btnSurArgentino").click(() => {
    inventario.forEach((elemento) =>{
        if (botonSurArgentino == elemento.destino){
            console.log(Producto, "Sur Argentino")
            let filtrado = inventario.filter(elemento => elemento.destino == botonSurArgentino)
            console.log(filtrado)
            let article = document.createElement("article")
            article.innerHTML = ""
            let section = document.getElementById("paquetesPrincipales")
            article.classList.add("tipoDestino", elemento.tipo)
            article.setAttribute("destino", elemento.destino)
            article.innerHTML = `
                <span class="contenedorServicios">
                <h3>${elemento.destino}</h3>
                <h3>${elemento.tipo}</h3>
                <h5>${elemento.nombre}</h5>
                <p class="precioProducto">Precio: $${elemento.precio}</p>
                <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito(${elemento.id})">SELECCIONAR</button> 
                </span>
                `
            section.appendChild(article)
        }else{
            console.log("NOOOO Funciona!")
        }
    })
});

$("#btnNorteArgentino").click(() => {
    inventario.forEach((elemento) =>{
        if (botonNorteArgentino == elemento.destino){
            console.log(Producto, "Norte Argentino")
            let filtrado = inventario.filter(elemento => elemento.destino == botonNorteArgentino)
            console.log(filtrado)
            let article = document.createElement("article")
            article.innerHTML = ""
            let section = document.getElementById("paquetesPrincipales")
            article.classList.add("tipoDestino", elemento.tipo)
            article.setAttribute("destino", elemento.destino)
            article.innerHTML = `
                <span class="contenedorServicios">
                <h3>${elemento.destino}</h3>
                <h3>${elemento.tipo}</h3>
                <h5>${elemento.nombre}</h5>
                <p class="precioProducto">Precio: $${elemento.precio}</p>
                <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito(${elemento.id})">SELECCIONAR</button> 
                </span>
            `
            section.appendChild(article)
        }else{
            console.log("NOOOO Funciona!")
        }
    })
});

$("#btnCataratas").click(() => {
    inventario.forEach((elemento) =>{
        if (botonCataratas == elemento.destino){
            console.log(Producto, "Cataratas")
            let filtrado = inventario.filter(elemento => elemento.destino == botonCataratas)
            console.log(filtrado)
            let article = document.createElement("article")
            article.innerHTML = ""
            let section = document.getElementById("paquetesPrincipales")
            article.classList.add("tipoDestino", elemento.tipo)
            article.setAttribute("destino", elemento.destino)
            article.innerHTML = `
                <span class="contenedorServicios">
                <h3>${elemento.destino}</h3>
                <h3>${elemento.tipo}</h3>
                <h5>${elemento.nombre}</h5>
                <p class="precioProducto">Precio: $${elemento.precio}</p>
                <button id="boton${elemento.id}" class="boton-agregar" onclick="agregarAlCarrito(${elemento.id})">SELECCIONAR</button> 
                </span>
            `
            section.appendChild(article)
        }else{
            console.log("NOOOO Funciona!")
        }
    })
});

let carrito = [];
let contadorCarrito = document.getElementById("contadorCarrito")
let precioTotal = document.getElementById("precioTotal")

// Funcion del BOTON "Seleccionar" (Agregar al carrito)

function agregarAlCarrito(id, cantidad) {
    let agregarServicio = inventario.filter(elemento => elemento.id == id)[0]
    let servicioDisponible = carrito.find(elemento => elemento.idServicio == agregarServicio.id)
    
    if (servicioDisponible) {
        let id = servicioDisponible.idServicio
        servicioDisponible.cantidad = parseInt(servicioDisponible.cantidad) + 1
        $("#cantidad-" + id).val(servicioDisponible.cantidad)
        $("#subtotal-" + id).val(servicioDisponible.obtenerTotal())  
    } else {
        let cant = cantidad ? cantidad:1;
        let servicioMarcado = new ServicioMarcado(agregarServicio.destino, agregarServicio.id, agregarServicio.nombre, agregarServicio.precio, agregarServicio.tipo, cant)
        carrito.push(servicioMarcado)
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))

        actualizarCarrito()

        let section = document.getElementById("divVerCompra")
        let span= document.createElement("span")
        span.classList.add("productoEnCarrito")
        span.setAttribute("id", "productoEnCarrito")
        span.innerHTML += `
            <div id="divCompra">
            <p style="font-size: 2em">Servicio: ${servicioMarcado.tipoServicio} ${servicioMarcado.nombreServicio}</p>
            <p>Precio: <input id="precio-${servicioMarcado.idServicio}" class="precio" value="${servicioMarcado.precio}" disabled></p>
            <p>Numero de pasajeros: <input type="number" min=1 id="cantidad-${servicioMarcado.idServicio}" class="cantidad" value=${servicioMarcado.cantidad}></p>
            <p id="error-${servicioMarcado.idServicio}"></p>
            <p>Subtotal Producto: <input id="subtotal-${servicioMarcado.idServicio}" class="subtotal" value=${servicioMarcado.obtenerTotal()} disabled></input>
            <button id="elminar${servicioMarcado.idServicio}" class="btn btn-dark botonEliminar" onclick="remover()">Remover servicio</button>
            </div>
        `  
        section.appendChild(span)

        // if (servicioMarcado.nombreServicio == "Bus"){
        //     (servicioMarcado.nombreServicio, "Avion").style.visibility = "hidden";
        // } 
    }       
};

// Funcion del BOTON "Remover" (Quitar producto del carrito)

function remover(){
    let eliminarProducto = document.getElementById("productoEnCarrito")
    eliminarProducto.parentElement.remove()
    carrito= carrito.filter((elemento)=> elemento.idServicio != servicioMarcado.idServicio)
    localStorage.setItem("carrito", JSON.stringify(carrito))   
    
actualizarCarrito()
}

function subtotalCarrito(e){
    let id= e.target.id.split("-")[1];
    let cantidad= $("#cantidad-" +id).val();

carrito.find(el => el.idServicio == id).cantidad=cantidad;
localStorage.setItem("carrito", JSON.stringify(carrito));

if(cantidad > 0) {
    let precio = $("#precio-" + id).val()
    console.log(precio)
    let subtotal = precio*parseInt(cantidad)
    $("#subtotal-" + id).val(subtotal)
    actualizarCarrito();
    console.log(subtotal)
} else {
    $("#error-" + id).html("Seleccione una cantidad superior a 0")
}
}


// Lo que deberias hacer es tomar el evento change y ahi tomar el valor del campo y multiplicarlo por el precio!! 
// Y tambien especificar que servicio es (ahi te traes el titulo y listo)

$("#cantidad").change(function (e) {
     subtotalCarrito(e)
     let id= e.target.id.split('-')[1];
     let cantidad = $("#cantidad-" + id).val();

     if(cantidad>0) {
        $("#error-" + id).html(" ")
     } else {
        $("#subtotal-" + id).val(0)
     }
 })

let subtotal = $("#subtotal").val()

function actualizarCarrito() {
    contadorCarrito.innerText= carrito.length
    precioTotal.innerText= carrito.reduce((acc,el) => acc + el.obtenerTotal(), 0)
}