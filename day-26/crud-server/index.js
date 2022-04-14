const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("./config.json");
const routes = require("./routes/user.routes");
const errorHandler = require("./helpers/errorhandler.helper");
const cors = require('cors');

// middleware
// ------------------------------------------
// app.use(express.static(__dirname+"/public"))
// .use(express.json())
app.use(express.json())
.use(cors())
.use(routes);

// application configuration
// ------------------------------------------

// let errorHandler = function(error){ console.log("Error is ", error)};


// DB configuration
// ------------------------------------------

// const url = "mongodb+srv://Ineffable:Zxcvb99@mycluster.f2jpd.mongodb.net/onlinedb?retryWrites=true&w=majority"
// ORM - Object Relational Database
// let Schema = mongoose.Schema;
// let ObjectId = Schema.ObjectId;  // every record needs to be unique in mongoDB
// let User = mongoose.model("User", new Schema({
//     id : ObjectId,
//     username : String,
//     usermail : String,
//     usercity : String
// }));

const url = config.cloudDB;

mongoose
.connect(url)
.then((res)=> console.log("DB connected"))
.catch(error => errorHandler(error));



// CRUD Routes
// ------------------------------------------
// app.get("/data",function(req, res){
//     console.log("get request for data received");
//     User.find(function(error, users){
//         if(error){ errorHandler(error)}
//         else{ res.json(users)}
//     })
//     // res.send({
//     //     "data" : [
//     //        { 
//     //            name : "Ironman",
//     //            email : "tony@stark.com",
//     //            city : "Gotham"
//     //         }
//     //     ]
//     // })
// });

// app.post("/add",function(req,res){
//     //console.log("add user post request received",req.body);
//     let user = new User(req.body);
//     user
//     .save()
//     .then(function(dbres){
//         res.json({'message' : 'user added'})
//     })
//     .catch(function(error){
//         errorhandler(error);
//     })
// })

// app.delete("/delete/:id",function(req,res){
//     User.findByIdAndDelete({_id : req.params.id}, function(error,deleteduser){
//         if(error){errorhandler(error)}
//         else{
//             res.json({'message':'user deleted'})
//         }
//     })
// });

app.listen(config.port,config.host,function(error){
    if(error){errorHandler(error)}
    else{ console.log(`Server is now live on ${config.host}:${config.port}`) }
});

