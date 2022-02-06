const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const MENSAJES = [{
        author: "Admin",
        message: "Te damos la bienvenida",
    },

];
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("nuevo cliente conectado", socket.id);
    //Agrego nuevo mensaje enviado
    socket.on("new_message", data => {
        MENSAJES.push(data)
        io.sockets.emit('messages_received', MENSAJES)
    })
    io.sockets.emit('messages_received', MENSAJES)
});

httpServer.listen(3000, () => {
    console.log("server Http con socketio");
});