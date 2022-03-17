const express = require("express");
const mongoose = require("mongoose");
let app = express();

// schema
let Schema = mongoose.Schema;
// objectid
let ObjectId = Schema.ObjectId;

let Hero = mongoose.model("Hero", Schema({
    id : ObjectId,
    list : Array
}) );

mongoose.connect("mongodb+srv://admin:password$123@mycluster.6cccx.mongodb.net/onlineDB?retryWrites=true&w=majority");

app.get("/",function(req, res){
    let herolist = [];
    Hero.find().then((dbres)=>{
        herolist = dbres[0].list;
        // console.log(dbres[0].list);
        res.render("home.pug",{
            templist : herolist
        })
    }).catch((error)=>{
        console.log("Error ", error);
    }).finally(()=>{
        console.log("promise completed")
    });
    
})

app.listen(1010);
console.log("server is now running on localhost:1010");