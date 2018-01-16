"use strict";

const router = require("express").Router();

const controller = require("./../controllers/anuncios");

/*
 * /twitter/anuncios/     GET    - READ ALL
 * /twitter/anuncios/     POST   - CREATE
 * /twitter/anuncios/:id  GET    - READ ONE
 * /twitter/anuncios/:id  PUT    - UPDATE
 * /twitter/anuncios/:id  DELETE - DELETE
 */

router.route("/")
    .get(controller.all)
    .post(controller.post);

router.route("/:id")
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;