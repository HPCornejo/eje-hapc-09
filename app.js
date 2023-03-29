const express = require("express");
const app = express(); //RESPONDER SOLICITUDES DE CLIEMTES (CHROME, OPERA, EDGE, ETC)
const port = process.env.port || 3000; //Para cuando realizemos en Deploy(despliegue)

//Para obtener un recurso del servidor
app.get("/", (req, res) => {
    res.send("Hola mundo de los servidores web");
});

app.get("/productos", (req, res) => {
    res.send("Esta seria en teoria la pagina de productos")
});

app.get("*", (req, res) => {
    res.send("404 | Página no encontrada");
})
//Proceso
app.listen(port, () =>{
    console.log(`El servidor está corriendo en el puerto http://localhost:3000`)
});

