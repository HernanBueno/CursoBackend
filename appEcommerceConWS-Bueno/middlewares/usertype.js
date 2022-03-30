const e = require("express");

const isAdmin = (req, res, next) => {
    if (req.body.id_admin) { next() } else {
        res.json({
            error: "Esta operacion necesita permisos de administrador"
        });
    }
};
module.exports = {
    isAdmin
};