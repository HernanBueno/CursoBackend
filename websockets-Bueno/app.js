const express = require('express')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const indexRouter = require("./routes/index");
const productosRouter = require("./routes/productos");
const body_parser = require('body-parser');
const cors = require("cors");
const path = require('path')



//instanciamos server
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));


// '*' significa que esta abierto para todos
app.options("*", cors());



io.on("connection", (socket) => {
        console.log("nuevo cliente conectado", socket.id);

    })
    //para poder manejar el sockets desde un archivo ruta 
app.io = io;

//instanciar y crear estaticos
app.use(express.static("public"));

//rutas
app.use("/", indexRouter);
app.use("/productos", productosRouter);



httpServer.listen(3000, () => {
    console.log("server http con socketIO");
});