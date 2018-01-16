"use strict";

const router = require("express").Router();

const anuncioRoutes = require("./routes/anuncio");

router.use("/anuncios", anuncioRoutes);

module.exports = router;