"use strict";

const logger = require("winston");

let moment = require("moment")

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
        res.json({"mensaje":"Los siguientes campos son requeridos",
                 "datos" : requeridos});
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
        res.json({"mensaje":"Los siguientes campos exceden el tamaño permitido",
                 "datos" : tamano});
    }
    var anun = {
        "id" : anuncios.length+1,
        "contenido" : anuncio.contenido,
        "autor" : anuncio.autor,
        "ubicacion" : anuncio.ubicacion,
        "fechaCreacion" : moment().format(),
        "fechaActualizacion":""
    }
    anuncios.push(anun);
    res.json({"mensaje":"Anuncio creado con éxito.!"});
};

exports.get = (req, res, next) => {
    logger.info(req.params.id);
    let id = req.params.id;
    
    let bandera = false;
    
    var anun = {
        "id" : 0,
        "contenido" : "",
        "autor" : "",
        "ubicacion" : "",
        "fechaCreacion" : "",
        "fechaActualizacion":""
    }
	
	for (let i = 0; i < anuncios.length; i++){
		if (anuncios[i].id == id) {
	        anun.id = anuncios[i].id,
	        anun.contenido = anuncios[i].contenido,
	        anun.autor = anuncios[i].autor,
            anun.ubicacion = anuncios[i].ubicacion,
            anun.fechaCreacion = anuncios[i].fechaCreacion,
            anun.fechaActualizacion = anuncios[i].fechaActualizacion		
	   		bandera = true;
	   	}
     }
     if (bandera) {
   	    res.json(anun)
     } else {
   	    res.json({"mensaje": "El id del anuncio no fue encontrado"})
     }
};

exports.put = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let id = req.params.id;
    let update = req.body;
    
    let bandera = false;
	
	for (let i = 0; i < anuncios.length; i++){
		if (anuncios[i].id == id) {
	   		anuncios[i] = {
	   			id: anuncios[i].id,
	   			contenido: update.contenido || anuncios[i].contenido,
	    		autor: update.autor || anuncios[i].autor,
				ubicacion: update.ubicacion || anuncios[i].ubicacion,
				fechaCreacion: anuncios[i].fechaCreacion,
				fechaActualizacion: moment().format()
	   		}		
	   		bandera = true;
	   	}
     }
     if (bandera) {
   	    res.json({"mensaje": "Anuncio modificado con éxito.!"})
     } else {
   	    res.json({"mensaje": "El id del anuncio no fue encontrado"})
     }
};

exports.delete = (req, res, next) => {
    logger.info(req.params.id);
    let id = req.params.id;
    
    let bandera = false;
	
	for (let i = 0; i < anuncios.length; i++){
		if (anuncios[i].id == req.params.id) {
	   		anuncios.splice(i, 1)
	   		bandera = true;
	   	}
     }

   if (bandera) {
   	 res.json({"mensaje":"Anuncio eliminado con éxito.!"})
   } else {
   	 res.json({"mensaje":"El id del anuncio no fue encontrado"})
   }
};