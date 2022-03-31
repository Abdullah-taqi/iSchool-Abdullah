// create a crud application with MySQL express
// --------------------------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const config = require("./config.json");
const routes = require("./routes/user.routes");
const errorHandler = require("./helpers/errorhandler.helper");

// middleware
// ------------------------------------------
app.use(express.static(__dirname+"/public"))
// app.use(express.json());
.use(express.json())
.use(routes);


app.listen(config.port,config.host,function(error){
    if(error){errorHandler(error)}
    else{ console.log(`Server is now live on ${config.host}:${config.port}`) }
});

