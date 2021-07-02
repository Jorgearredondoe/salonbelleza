document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    mostrarServicios();
}

async function mostrarServicios(){
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();

        const {servicios} = db;

        //Generar html
        servicios.forEach(servicio => {
            const {id, nombre, precio} = servicio;
            
        });
    } catch (error){
        console.log(error);
    }
}