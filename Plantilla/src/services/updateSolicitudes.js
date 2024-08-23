async function updateSolicitudes(id, estado) {
    try {
//Realiza una solicitud PUT 
        const response = await fetch(`http://localhost:3001/solicitudes/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'//Indica que los datos se envian en el formato correcto
            },
            body: JSON.stringify(estado) //Convierte el objeto del estado en JSON para enviarlo
        });
//Verificación de exito en la solicitud
        if (!response.ok) {
            throw new Error(`Error en la actualización: ${response.statusText}`);
        }
     
//Espera en la respuesta JSON
        const data = await response.json();

//Return de los datos obtenidos de la respuesta del servidor          
return data;     
//Captura y muestra de cualquier error
} catch (error) {
    console.error('Error update solicitudes:', error);
    throw error;
}
}

export{updateSolicitudes}
