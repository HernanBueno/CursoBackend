const express = require('express')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const routerProductos = require('./routes/productos.js')
const routerCarrito = require('./routes/carrito.js')



const MENSAJES = [{
    author: "Admin",
    message: "Te damos la bienvenida",
}, ];

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));


io.on("connection", function(socket) {
    console.log("nuevo cliente conectado", socket.id);
    //Agrego nuevo mensaje enviado
    socket.on("new_message", data => {
        MENSAJES.push(data)
        io.sockets.emit('messages_received', MENSAJES)
    })
    io.sockets.emit('messages_received', MENSAJES)
});


const validarRuta = (req, res, next) => {
    res.json({
        error: -2,
        descripción: `La ruta '${req.url}' método '${ req.method}' no existe`
    });
}


//habilitar routing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(validarRuta);

app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);


//server corriendo
httpServer.listen(3000, () => {
    console.log("servidor corriendo");
});