async function postSolicitudes(solicitudes) {
    try {
        const response = await fetch("http://localhost:3001/solicitudes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(solicitudes)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting solicitudes:', error);
        throw error;
    }
}

export{postSolicitudes}
