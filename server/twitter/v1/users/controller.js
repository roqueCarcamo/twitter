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
                res.json({message:"Id does not exist"})
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
        .find({status:true})
        .skip(skip)
        .limit(limit)
        .then( docs => {
            res.json({
                users: docs,
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
                message:"Successfully created user",
                content: doc})
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.get = (req, res, next) => {
    res.json(req.doc);
};

exports.update = (req, res, next) => {
    logger.info(req.doc);
    logger.info(req.body);
    let document = Object.assign(req.doc, req.body);
     
    document.save()
        .then(doc => {
             res.json({
                 message:"Successfully modified user",
                 content: doc});
         })
        .catch(err => {
           next(new Error(err));
         });
};

exports.delete = (req, res, next) => {
    logger.info(req.doc);
    let document = req.doc;
    
    document.status = false;
    document.save()
        .then(doc => {
             res.json({
                 message:"User successfully disabled",
                 content: doc});
         })
        .catch(err => {
           next(new Error(err));
         });
};

exports.validarUser = (req, res, next, id) => {
    Model.findById(id)
        .then( doc => {
            if(doc){
                req.doc = doc;
                if(!doc.status){
                    res.json({message:"User disabled"});
                }
            }else{
                res.json({message:"User not exist"});
            }
           next();
        })
        .catch( err => {
            next(new Error(err));
        });
};