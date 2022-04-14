const express = require("express");
const User = require("../model/user.model");
const errorHandler = require("../helpers/errorhandler.helper");

let routes = express.Router();
// CRUD Routes
//----------------------------------------
routes.get("/data",function(req, res){
    console.log("get request for data recieved");
    User.find(function(error, users){
        if(error){ errorHandler(error) }
        else{ res.json(users) }
    })
});

routes.post("/add", function(req, res){
    // console.log("add user post request recieved", req.body);
    let user = new User(req.body);
    user
    .save()
    .then(function(dbres){
        res.json({ 'message': 'user added'})
    })
    .catch(function(error){
        errorHandler(error)
    })
})

routes.delete("/delete/:id",function(req, res){
    // console.log("delete request recieved for user with id "+req.params.id);
    User.findByIdAndDelete({_id : req.params.id}, function(error, deleteduser){
        if(error){errorHandler(error)}
        else{
            res.json({"message": "user deleted"})
        }
    })
});

routes.get("/edit/:id",function(req, res){
    User.findById(req.params.id, function(error, user2update){
        if(error){errorHandler(error)}
        else{
            res.json(user2update)
        }
    })
});
routes.post("/edit/:id",function(req, res){
    User.findById(req.params.id, function(error, updateUser){
        if(error){errorHandler(error)}
        else{
            updateUser.username = req.body.username;
            updateUser.usermail = req.body.usermail;
            updateUser.usercity = req.body.usercity;
            updateUser.save()
            .then((userupdated)=>{
                res.json({"updatedmessage":userupdated})
            })
            .catch((error)=>errorHandler(error));
        }
    })
});

module.exports = routes;