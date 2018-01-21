"use strict";

const logger = require("winston");

let moment = require("moment")

const Model = require('./model');

exports.find = (req, res, next, id) => {
    Model.findById(id)
        .then( doc => {
            if(doc){
                req.doc = doc;
                next();
            }else{
                res.json({message:"Document not found"})
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.all = (req, res, next) => {
   Model.find()
        .then( doc => {
            res.status(200);
            res.json(doc)
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.post = (req, res, next) => {
    logger.info(req.body);
    const body = req.body;
    
    let document = new Model(body);
    document.save()
        .then( doc => {
            res.json(doc)
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.get = (req, res, next) => {
    logger.info(req.params.id);
    res.json(req.doc);
};

exports.update = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let document = Object.assign(req.doc, req.body);
     
    document.save()
        .then(doc => {
             res.json(doc);
         })
        .catch(err => {
           next(new Error(err));
         });
};

exports.delete = (req, res, next) => {
    logger.info(req.params.id);
    const doc = req.doc;
    
    doc.remove()
        .then( deleted => {
            res.json(deleted);
        })
        .catch( err => {
            next(new Error(err));
        });
};