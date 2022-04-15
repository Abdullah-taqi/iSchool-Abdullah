const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{
    name : {type:String},
    address : {type:String},
    quantity : {type:String},
    process : {type:String},
    
    
})

module.exports = Employee;