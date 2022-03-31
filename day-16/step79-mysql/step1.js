let mysql = require("mysql");

// ----------------------------------------

let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : ""
});

connection.connect(function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("MySQL Connected")
    }
});