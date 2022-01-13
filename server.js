const express = require("express");
const { Contenedor } = require("./contenedor");
const app = express();

const contenedor1 = new Contenedor("./productos.txt");

function randomID(min, max) {
    return Math.floor(Math.random() * max) + min;
}
app.get("/", (req, res) => {
    res.send("Desafio servidor express");
});

app.get("/productos", (req, res) => {
    contenedor1
        .getAll()
        .then((listadoProductos) => res.send(listadoProductos))
        .catch((error) => res.send(error.message));
});
app.get("/productosRandom", (req, res) => {
    contenedor1
        .getAll()
        .then(async(listadoProductos) => {
            let idRandom = randomID(1, listadoProductos.length);
            res.send(await contenedor1.getById(idRandom));
        })
        .catch((error) => res.send(error.message));
});
const server = app.listen(8080, () => {
    console.log(`started server: http://localhost:${server.address().port}`);
});
