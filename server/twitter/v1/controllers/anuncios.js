"use strict";

const logger = require("winston");

var anuncios = [];


exports.all = (req, res, next) => {
    res.json(anuncios);
};

exports.post = (req, res, next) => {
    logger.info(req.body);
    let anuncio = req.body;
    var requeridos = [];
    if(anuncio.contenido == null){
        var contenido = "contenido";
        requeridos.push(contenido);
    }
    
    if(anuncio.autor == null){
        var autor = "autor";
        requeridos.push(autor);
    }
    
    if(anuncio.ubicacion == null){
        var ubicacion = "ubicacion";
        requeridos.push(ubicacion);
    }
    
    if(requeridos.length > 0){
        res.json({"Mensaje":"Los siguientes campos son requeridos",
                 "Datos" : requeridos});
    }
    
    var tamano = [];
    if(anuncio.contenido.length > 280){
        var contenido = "contenido";
        tamano.push(contenido);
    }
    
    if(anuncio.autor.length > 32){
        var autor = "autor";
        tamano.push(autor);
    }
    
    if(anuncio.ubicacion.length > 64){
        var ubicacion = "ubicacion";
        tamano.push(ubicacion);
    }
    
    if(tamano.length > 0){
        res.json({"Mensaje":"Los siguientes campos exceden el tamaño permitido",
                 "Datos" : tamano});
    }
    
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1; //hoy es 0!
    var yyyy = hoy.getFullYear();

    if(dd<10) {
     dd='0'+dd
    } 

    if(mm<10) {
     mm='0'+mm
    } 

    hoy = mm+'/'+dd+'/'+yyyy;
    var anun = {
        "id" : anuncios.length+1,
        "contenido" : anuncio.contenido,
        "autor" : anuncio.autor,
        "ubicacion" : anuncio.ubicacion,
        "fechaCreacion" : hoy,
        "fechaActualizacion":""
    }
    anuncios.push(anun);
    res.json({"Mensaje":"Anuncio creado con éxito.!"});
};

exports.get = (req, res, next) => {
    logger.info(req.params.id);
    let id = req.params.id;

    res.json({ "_id": id });
};

exports.put = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let id = req.params.id;
    let update = req.body;

    res.json(update);
};

exports.delete = (req, res, next) => {
    logger.info(req.params.id);
    let id = req.params.id;

    res.json({ "_id": id });
};