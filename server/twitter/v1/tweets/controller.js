"use strict";

const logger = require("winston");

const Model = require('./model');

exports.find = (req, res, next, id) => {
    logger.info(id);
    Model.findById(id)
        .then( doc => {
            if(doc){
                req.doc = doc;
                next();
            }else{
                res.json({message:"Id does not exist"});
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.all = (req, res, next) => {
    logger.info(req.query.limit);
    logger.info(req.query.skip);
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    
    Model
        .find()
        .skip(skip)
        .limit(limit)
        .populate('author')
        .then( docs => {
            res.json({
                twests: docs,
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.create = (req, res, next) => {
    logger.info(req.body);
    const body = req.body;
    
    let document = new Model(body);
    document.save()
        .then( doc => {
            res.json({
                message:"Successfully created tweet",
                content: doc})
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
             res.json({
                message:"Successfully modified tweet",
                content: doc});
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
            res.json({
                message:"Successfully deleted tweet",
                content: deleted}
                );
        })
        .catch( err => {
            next(new Error(err));
        });
};