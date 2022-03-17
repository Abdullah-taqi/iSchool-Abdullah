const express = require("express");
const app = express();

app.get("/",function(req,res){
    // res.send("hello from express");

    // res.send("<h1>hello from express</h1>");

    res.sendFile(__dirname + '/index.html');

    // res.write("hello there");
    // res.end();
})

app.listen(2020,"localhost");
// console.log("server is now live");
console.log('Server is running on http://localhost:5000');

