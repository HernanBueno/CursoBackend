const isAdmin = (req, res, next) => {
    if (req.body.id_admin) next();
    res.json({
        error: "Esta operacion necesita permisos de administrados"
    });
};

module.exports = {
    isAdmin,
};