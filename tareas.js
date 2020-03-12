const fs = require("fs");


let tareasJson = {
    nombre : "tareas.json",
    leer : function() {
        let datosEnJson = fs.readFileSync(this.nombre,"utf-8");
        let datosEnJs = JSON.parse(datosEnJson);
        return datosEnJs;
    },
    escribirJson : function(tarea) {
        let datosEnJson = JSON.stringify(tarea);    

        fs.writeFileSync(this.nombre, datosEnJson)
    },
    guardarTarea : function(tarea) {
        let datosEnJs = this.leer();
        datosEnJs.push(tarea);
        this.escribirJson(datosEnJs)
    },
    filtrar : function(estado){
        let datosEnJs = this.leer();
        let resultado = datosEnJs.filter((tarea)=>tarea.estado === estado);
        console.log(resultado);},
    
}

module.exports = tareasJson;