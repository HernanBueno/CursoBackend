const express = require('express')
const app = express();
const routes = require("./routes");
const isAdmin = require("./middlewares/usertype")




//habilitar routing
app.use("/", routes());

//server corriendo
app.listen(4000, () => {
    console.log("servidor corriendo");
});