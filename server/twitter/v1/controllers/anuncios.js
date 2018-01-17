"use strict";

const logger = require("winston");

let moment = require("moment")

var anuncios = [{
        "id" : 1,
        "contenido" : "Primer anuncio",
        "autor" : "Luis Mesa",
        "ubicacion" : "Barranquilla",
        "fechaCreacion" : "2018-01-16T10:09:15-05:00",
        "fechaActualizacion":"2018-01-16T10:09:40-05:00"
    },{
        "id" : 2,
        "contenido" : "Segundo anuncio",
        "autor" : "Pedro Mesa",
        "ubicacion" : "Cartagena",
        "fechaCreacion" : "2018-02-16T10:09:20-05:00",
        "fechaActualizacion":"2018-03-16T10:09:40-05:00"
    }];

exports.all = (req, res, next) => {
    res.status(200);
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
        res.status(406);
        res.json({"mensaje":"Los siguientes campos son requeridos",
                 "datos" : requeridos});
    }
    
    var tamano = [];
    if(anuncio.contenido.length > 280){
        var contenido = "contenido, Máximo 280 caracteres";
        tamano.push(contenido);
    }
    
    if(anuncio.autor.length > 32){
        var autor = "autor, Máximo 32 caracteres";
        tamano.push(autor);
    }
    
    if(anuncio.ubicacion.length > 64){
        var ubicacion = "ubicacion, Máximo 64 caracteres";
        tamano.push(ubicacion);
    }
    
    if(tamano.length > 0){
        res.status(406);
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
    res.status(201);
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
        res.status(200);
   	    res.json(anun)
     } else {
        res.status(404);
   	    res.json({"mensaje": "El id del anuncio no fue encontrado"})
     }
};

exports.put = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let id = req.params.id;
       
    let update = req.body;
    
    var requeridos = [];
    if(update.contenido == null){
        var contenido = "contenido";
        requeridos.push(contenido);
    }
    
    if(update.autor == null){
        var autor = "autor";
        requeridos.push(autor);
    }
    
    if(update.ubicacion == null){
        var ubicacion = "ubicacion";
        requeridos.push(ubicacion);
    }
    
    if(requeridos.length > 0){
        res.status(406);
        res.json({"mensaje":"Los siguientes campos son requeridos",
                 "datos" : requeridos});
    }
    
    var tamano = [];
    if(update.contenido.length > 280){
        var contenido = "contenido, Máximo 280 caracteres";
        tamano.push(contenido);
    }
    
    if(update.autor.length > 32){
        var autor = "autor, Máximo 32 caracteres";
        tamano.push(autor);
    }
    
    if(update.ubicacion.length > 64){
        var ubicacion = "ubicacion, Máximo 64 caracteres";
        tamano.push(ubicacion);
    }
    
    if(tamano.length > 0){
        res.status(406);
        res.json({"mensaje":"Los siguientes campos exceden el tamaño permitido",
                 "datos" : tamano});
    }
    
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
        res.status(200);
   	    res.json({"mensaje": "Anuncio modificado con éxito.!"})
     } else {
        res.status(404);
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
     res.status(200);
   	 res.json({"mensaje":"Anuncio eliminado con éxito.!"})
   } else {
     res.status(404);
   	 res.json({"mensaje":"El id del anuncio no fue encontrado"})
   }
};