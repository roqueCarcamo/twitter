"use strict";

const router = require("express").Router();

const categoriesRoutes = require("./routes/categories");
const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");

const anuncioRoutes = require("./routes/anuncio");

router.use("/categories", categoriesRoutes);
router.use("/posts", postsRoutes);
router.use("/users", usersRoutes);

router.use("/anuncios", anuncioRoutes);

module.exports = router;