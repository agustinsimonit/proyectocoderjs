// Aqui desarrollamos el Formulario de Contacto

let section = document.getElementById("formContacto");
let div = document.createElement("div")
div.setAttribute("class", "formularioDeContacto")
div.innerHTML += `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="well well-sm">
                    <form class="form-horizontal" method="post">
                        <fieldset>
                            <legend class="text-center header">Contactanos</legend>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="fname" name="name" type="text" placeholder="Nombre*" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="lname" name="name" type="text" placeholder="Apellido*" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="email" name="email" type="text" placeholder="Email*" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="phone" name="phone" type="text" placeholder="Telefono" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <textarea class="form-control" id="message" name="message" placeholder="Dejanos tu mensaje" rows="7"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary btn-lg" onclick="enviarDatos()">ENVIAR</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `  

section.appendChild(div)

function enviarDatos() {
    let inputNombre = document.getElementById("fname").value;
    let inputApellido = document.getElementById("lname").value;
    let inputEmail = document.getElementById("email").value;
    let inputTelefono = document.getElementById("phone").value;
    
    if (inputNombre != "" && inputApellido != "" && inputEmail != ""){
        let formulario = document.getElementById("mostrarDatosIngresados")
        let datosContacto = document.createElement("div")
        datosContacto.setAttribute("id", "datosObtenidos")
        datosContacto.innerHTML = `
            <h2>Bienvenido ${inputNombre}, a continuacion detallamos los datos del 
            pasajero para que usted chequee que sean correctos: <br>
            Nombre pasajero: ${inputNombre} <br>
            Apellido pasajero: ${inputApellido} <br>
            Email: ${inputEmail} <br>
            Telefono: ${inputTelefono} <br>
            Agradecemos su tiempo y esperamos viajemos juntos pronto!
            </h2>
        `
        formulario.appendChild(datosContacto)
        $("#formContacto").fadeOut("3000");
        $("#datosObtenidos").fadeIn("3000");
    }else{
        console.log("Faltan datos obligatorios")
    }
}

