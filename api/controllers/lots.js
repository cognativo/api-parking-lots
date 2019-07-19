'use strict'

const Lot = require('../models/lots')
const mongoose = require('mongoose')

module.exports = {

    create: async (req, res, next) => {

        var lot = new Lot({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            number:req.body.number,
            identification: req.body.identification
        })

        try{
            var response;
            response = await lot.save()
            console.log(response)
            res.status(200).json({type: 'SUCCESS', message: response})
        }catch( error ) {
            res.status(401).json({type: 'ERROR', message: error})
        }

    },

    delete: async (req, res, next) => {

        const rid = req.params.id;
        
        try{
            var lotRef = await Lot.findById(rid).exec()
            var response = await lotRef.remove()
            
            res.status(200).json({type: 'SUCCESS', message: response, deleted: true})

        }catch ( err ){
            res.status(200).json({type: 'ERROR', message: response, deleted: false})
        }
    },

    getAll: async(req, res, next) => {
        
        try{
            var response = await Lot.find({}).exec()
            res.status(200).json({type: 'SUCCESS', message: response})

        }catch ( err ) {
            res.status(200).json({type: 'ERROR', message: response})
        }         
    },

    getById: async (req, res, next) => {
        const rId = req.params.id;
        
        try{
            var response = await Lot.findById(rId).exec()
            res.status(200).json({type: 'SUCCESS', message: response})

        }catch ( err ) {
            res.status(200).json({type: 'ERROR', message: response})
        }   
    },

    update: async(req, res, next) => {
        var rId = req.params.id
        var reqUpdate = req.body

        try {
            var response = await Lot.findByIdAndUpdate(rId, reqUpdate)
            res.status(200).json({type: 'SUCCESS', message: response, updated: true})
        } catch ( err ) {
            res.status(200).json({type: 'ERROR', message: response, updated: false})
        }
    }

}