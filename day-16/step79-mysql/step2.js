let mysql = require("mysql");
//------------------------------------------
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "ischooldb",
    password : ""
});

connection.connect(function(error){
    if(error){
        console.log("Error ", error)
    }else{
    // step1 connect to MySQL
    // console.log("MySQL connected to ischooldb");
    
    // step2 create a database
    /*   connection.query("CREATE DATABASE ischooldb", function(error, result){
        if(error){ console.log("Error : ", error)}
        else{ console.log("Result ", result)}
    })
    */
   
     // step3 create a table on database
     /* let sql = "CREATE TABLE participants (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300))";
     
     connection.query(sql, function(error, result){
         if(error){ console.log("Error : ", error)}
         else{ console.log("Result ", result)}
        })  */
        
    // step4 insert values in to table on database
    /*     
    let sql = "INSERT INTO participants (name, email) VALUES ('Harshita', 'harshitav11@gmail.com')";

    connection.query(sql, function(error, result){
        if(error){ console.log("Error : ", error)}
        else{ console.log("Result ", result)}
    })  
    */

   // step5 insert multiple values in to table 
   // let sql = "INSERT INTO participants (name, email) VALUES ('Kit', 'kit@walker.com'), ('Bruce', 'bruce@benner.com'), ('Natasha', 'nash@blackwidow.com')";
   
   // step6 insert multiple values in to table 
    /*     
    let hereos = [
        ["Clark", "clark@kent.com"],
        ["Bruce", "bruce@wayne.com"],
        ["Peter", "peter@parker.com"]
    ];

    let sql = "INSERT INTO participants (name, email) VALUES ?"; 
    */

    // step7 query all data in database 
    // let sql = "SELECT * FROM participants";
    // step8 query name of id 1 
    // let sql = "SELECT name from participants WHERE id = 1";

    let sql = "SELECT name from participants WHERE id = 1";

    connection.query(sql,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Response ", result);
            /* result.forEach(recordSet => {
                console.log(recordSet.name)
            }); */
        }
    });

    }
});


    // step x to remove a database
    //   connection.query("DROP DATABASE ischooldb", function(error, result){
    //        if(error){ console.log("Error : ", error)}
    //       else{ console.log("Result ", result)}
    //   });

/*
query all records above 5
query all records below 5
query aleternate records
join
merge
views

create a crud application with MySQL express
*/