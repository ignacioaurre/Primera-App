
let archivoTareas = require('./tareas');
let orden = process.argv[2];
switch (orden) {
    case 'listar':
        console.log('Listando de tareas:');
        let tareas = archivoTareas.leer();
        tareas.forEach((unaTarea,index) => console.log((index+1) + ": " + unaTarea.titulo + " - " + (unaTarea.estado)));
        break;
    case 'crear':
        let tarea = {
            titulo:process.argv[3],
            estado: "pendiente",
        }
        archivoTareas.guardarTarea(tarea);
        console.log("Su tarea ha sido guardada exitosamente");
        break;
    case 'filtrar':
        archivoTareas.filtrar(process.argv[3]);
        break;
    case undefined:
        console.log('Tenés que pasar una accion!');
        break;
    default:
        console.log('mmmmmm NO ENTIENDO');
        console.log('Las acciones disponibles son: - Listar');
        break;
        
        break;
}



