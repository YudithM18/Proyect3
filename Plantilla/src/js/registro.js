//Llamados a servidor
import { postUsers } from "../services/postUsers";
import { getUsers } from "../services/getUsers";


//Llamados HTML
const usuario = document.getElementById("usuario")
const correo = document.getElementById("correo")
const pass = document.getElementById("pass")
const btnCrear = document.getElementById("crear")
const texto = document.getElementById("texto")
const codigo = document.getElementById("codigo")


btnCrear.addEventListener("click", function () {
   
  

    let valor = correo.value
    let valor2 = usuario.value
    let valor3 = pass.value
    let valor4 = codigo.value

    let resultado1 = valor.trim()
    let resultado2 = valor2.trim()
    let resultado3= valor3.trim()
    let resultado4= valor4.trim()

    validar()
    async function validar() {
      const infoUsers = await getUsers()


      
      const correoExistente = infoUsers.filter(element => element.correo === resultado1);

   
      

      if (correoExistente.length > 0) {

         texto.innerHTML = "ESTA CUENTA YA SE ENCUENTRA REGISTRADA"

         setTimeout(() => {
            location.reload()
           }, 3500);

         
      }else{


         if (resultado1 === "" || resultado2 === "" || resultado3 === "" || resultado4 === "") {


            texto.innerHTML= "INGRESAR DATOS SOLICITADOS"
     
            setTimeout(() => {
              location.reload()
             }, 3500);
     
     
     
     }  else{
     
           
           if (correo.value.length > 0  && usuario.value.length > 0 && pass.value.length > 0 && codigo.value.length > 0) {
    
     
              texto.innerHTML= "USTED HA SIDO REGISTRADO CON EXÍTO"
     
              postUsers(usuario.value, correo.value, pass.value, codigo.value)
     
     
              setTimeout(() => {
                 window.location.href ="./inicioSesion.html"
              }, 2500);
        }
     }

      }
    }



 





})