
import { getUsers } from "../services/getUsers"


const userOrGmail = document.getElementById("userOrGmail")

const password = document.getElementById("password")

const inicio = document.getElementById("inicio")

const texto = document.getElementById("texto")






inicio.addEventListener("click", async function () {
    
    let datos = await getUsers()




    
   
    for (let index = 0; index < datos.length; index++) {
        
        

    let valor = userOrGmail.value
    let valor2 = password.value
    let resultadopassword = valor2.trim()
    let resultadoGmail = valor.trim()

   
      
       if (resultadoGmail === ""  || resultadopassword === "" ) {

    

         texto.innerHTML = "NO SE HAN ENCONTRADO DATOS EN DONDE SE SOLICITA, POR FAVOR LLENAR CORRECTAMENTE LOS DATOS SOLICITADOS"
            
        
         
        


        }  else {

             console.log(datos[index].usuario === userOrGmail.value || datos[index].correo === userOrGmail.value) && (datos[index].pass === password.value);
             
    
                
                if ((datos[index].usuario === userOrGmail.value || datos[index].correo === userOrGmail.value) && (datos[index].pass === password.value)){

                    texto.innerHTML = "TUS DATOS SE ENCUENTRAN REGRISTRADO... HAS ENTRADO CON EXÍTO"

                    localStorage.setItem("codigo", datos[index].codigo)

                    setTimeout(() => {
                        window.location.href ="./formulario.html"
                     }, 3500);
                     break
                
                }else{
                    texto.innerHTML = "SE HAN INGRESADOS DATOS INCORRECTOS O INEXISTENTES POR FAVOR REVISAR DATOS O REGISTRASE NUEVAMENTE"

                }

            }

        }

            
            
        
    

                      

     
})