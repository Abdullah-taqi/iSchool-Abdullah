const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Employee = require('./employee');

//GET Single employee
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in GET Employee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//GET API
router.get('/', (req, res) => {
    Employee.find((err, doc) => {
        if(err){
            console.log('Error in GET Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//POST API
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        address: req.body.address,
        quantity: req.body.quantity,
        process: req.body.process,
        
    })

    emp.save((err, doc) => {
        if(err){
            console.log('Error in Post Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//PUT API
router.put('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name: req.body.name,
            address: req.body.address,
            quantity: req.body.quantity,
            process: req.body.process,
            
        }

        Employee.findByIdAndUpdate(req.params.id, {$set :emp}, {new: true}, (err, doc) => {
            if(err){
                console.log('Error in Update Order by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//DELETE Single employee
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in DELETE Employee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;