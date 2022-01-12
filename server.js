const express = require("express");
const { Contenedor } = require("./contenedor");
const Producto = require("./producto.js");

const app = express();
const contenedor = new Contenedor("productos.txt");
let prod1 = new Producto(
    "guaymallen",
    "150",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSk9ec2r_jLAjbkz8bkjBP7F4cheQmcL_weLxqO3u5a3fqiv3W89ylbN0uc5Ekhb5utilzQezjSgw&usqp=CAc"
);
let prod2 = new Producto(
    "terrabusi",
    "120",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6czZDCLjcESCLMsbAO3uG6bd131qFyldmMs088xTrKnV-vxtrM0pYbT4vq9BSDedK75EMP5T_28jlTg&usqp=CAc"
);
let prod3 = new Producto(
    "aguila",
    "100",
    "https://http2.mlstatic.com/D_NQ_NP_897823-MLA44651065774_012021-O.webp"
);
let prod4 = new Producto(
    "Milka",
    "200",
    "https://http2.mlstatic.com/D_NQ_NP_684927-MLA47778216543_102021-O.webp"
);
contenedor.save(prod1);
contenedor.save(prod2);
contenedor.save(prod3);
contenedor.save(prod4);

app.get("/productos", (req, res) => {
    const listaProductos = contenedor.getAll();
    res.send(listaProductos);
});
app.get("/productosRandom", (req, res) => {
    const numeroRandom = Math.random() * (5 - 1) + 1;
    const productoAMostrar = contenedor.getById(numeroRandom);
    res.send(console.log(productoAMostrar));
});
const server = app.listen(8080, () => {
    console.log(`started server: http://localhost:${server.address().port}`);
});