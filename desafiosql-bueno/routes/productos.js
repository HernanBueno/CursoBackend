const express = require("express");
const router = express.Router();
//const productoClase = require('../modules/producto.js');
const productoBD = require("../modules/ProductosBD.js");
const productos = new productoBD({
        client: "mysql",
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'hernan1234',
            database: 'productosbd',
            port: 3301,
        },
        pool: { min: 0, max: 7 },
    },

);




const isAdmin = (req, res, next) => {
    if (req.body.id_admin) { next() } else {
        res.json({
            error: "Esta operacion necesita permisos de administrador"
        });
    }
};

router.use(isAdmin);
/* GET users listing. */
router.get("/", function(req, res, next) {
    res.status(200).json(productos.getProductos());
});

router.get("/:idP", async(req, res) => {
    let idProducto = parseInt(req.params.idP);
    if (!isNaN(idProducto)) {
        let objProductoId = await productos.getProductoById(idProducto);
        objProductoId != null ?
            res.status(200).json(objProductoId) :
            res
            .status(406)
            .json({ error: `No se encontró el producto con id: ${idProducto}` });
    } else {
        res.status(404).json({ error: "El id ingresado no es numerico" });
    }
});

router.post("/", async(req, res) => {
    let objProducto = {...req.body };
    let objProductoNuevo = await producto.setProducto(objProducto);
    objProductoNuevo != null ?
        res.status(200).json(objProductoNuevo) :
        res
        .status(406)
        .json({ error: "Error al querer agregar el nuevo producto" });
});

router.put("/idP", async(req, res) => {
    let idProducto = parseInt(req.params.idP);
    let objProducto = {...req.body };

    const resultado = await productos.updateProducto(idProducto, objProducto)
    if (resultado) {
        res.status(200).json({
            status: `El producto con Id ${idProducto} fue actualizado correctamente.`,
        })
    } else {
        res
            .status(406)
            .json({ error: `No se encontró el producto con id: ${idProducto}` });
    }

});

router.delete("/:idP", async(req, res) => {
    let idProducto = parseInt(req.params.idP);
    const respuesta = await productos.deleteProducto(idProducto)
    if (respuesta) {
        res.status(200).json({
            status: `El producto con Id ${idProducto} fue eliminado correctamente.`,
        })
    } else {
        res
            .status(406)
            .json({ error: `No se encontró el producto con id: ${idProducto}` });
    }


});
module.exports = router;