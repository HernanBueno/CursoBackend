const express = require("express");
const router = express.Router();
const Carrito = require("../modules/Carrito");
const Carrito1 = new Carrito();

//get de carritos
router.get('/', (req, res) => {
    res.status(200).json(Carrito1.getCarritos());
})