//Llamados
import { getSolicitudes } from "../services/getSolicitudes";
import { postSolicitudes } from "../services/postSolicitudes";
import { updateSolicitudes } from "../services/updateSolicitudes";
import { deleteSolicitudes } from "../services/deleteSolicitudes";

//Declaración de HTML
//const formulario = document.getElementById("formulario")
const nombreF = document.getElementById("nombreFormulario");
const apellidoF = document.getElementById("apellidoFormulario");
const codigoF = document.getElementById("codigoFormulario");
const salidaF = document.getElementById("salidaFormulario");
const regresoF = document.getElementById("regresoFormulario");
const btnS = document.getElementById("btnS");
const btnC = document.getElementById("btnC")
const listaSolicitud = document.getElementById("listaSolicitud");
const selector = document.getElementById("selector");
const anuncio = document.getElementById("anuncio")


btnS.addEventListener("click", function () {
console.log("Hoal")

//Objeto de la información de la solicitud
const solicitudObj = {
    nombre: nombreF.value,
    apellido: apellidoF.value,
    codigo: codigoF.value,
    sede:selector.value,
    registroSalida:salidaF.value,
    registroRegreso:regresoF.value
}

//Llamado fantasma de la solicitud
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const btnA = document.createElement("button");
    const btnR = document.createElement("button");
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(btnA);
    div.appendChild(btnR);

    p1.innerHTML = nombreF.textContent;
    p2.innerHTML = apellidoF.value;
    p3.innerHTML = codigoF.value;
    p4.innerHTML = selector.value;
    p5.innerHTML = salidaF.value;
    p6.innerHTML = regresoF.value;
    btnA.innerHTML = "Aceptar"
    btnR.innerHTML = "Rechazar"
    listaSolicitud.appendChild(div);



cargarSolicitudes()
async function cargarSolicitudes() {
    const solicitud = await getSolicitudes()
    renderSolicitud(solicitud)

}

    async function enviarS() {
        if (!nombreF.value || !codigoF.value || !sede.value || !salidaF.value || !regresoF.value) {
            anuncio.innerHTML = "Completar la información"
        }


        await postSolicitudes(solicitudObj);
        anuncio.innerHTML = "Su solicitud ha sido enviada"
        cargarSolicitudes()


    }

})


//Boton de cerrar sesión
btnC.addEventListener("click", function () {
    window.location.href = "./inicioSesion.html"
})

//




