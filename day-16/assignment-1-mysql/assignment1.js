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

    // 1. query all records above 5
    //------------------------------------------    

    let sql_1 = 'SELECT name FROM participant1 WHERE id > 5';

    connection.query(sql_1,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Records above 5 ", result);
        }
    });


    // 2. query all records below 5
    //------------------------------------------    

    let sql_2 = 'SELECT name FROM participant1 WHERE id < 5';

    connection.query(sql_2,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Records below 5 ", result);
        }
    });


    // 3. query aleternate records
    //------------------------------------------    
    //even
    //--------------
    /* let sql_3 = 'SELECT * FROM participant1 WHERE id % 2 = 0';

    connection.query(sql_3,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Alternate even records ", result);
        }
    }); */

    //odd
    //--------------
    let sql_3 = 'SELECT * FROM participant1 WHERE id % 2 = 1';

    connection.query(sql_3,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Alternate odd records ", result);
        }
    });


    // 4. join
    //------------------------------------------    
    //Cross Join
    //--------------
    let sql_4 = `SELECT * FROM participant1, participant2`;

    connection.query(sql_4,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Cross Join ", result);
        }
    });
    

    //Inner Join
    //--------------
    /*
    let sql_4 = `SELECT * FROM participant as p1 INNER JOIN participant2 as p2 ON p1.name=p2.name`;

    connection.query(sql_4,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Cross Join ", result);
        }
    });
    */


    //Outer Join
    //--------------
    /* 
    let sql_4 = `SELECT * FROM participant as p1 LEFT OUTER JOIN participant2 as p2 ON p1.name=p2.name`;

    connection.query(sql_4,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Cross Join ", result);
        }
    });
    */



    // 5. merge
    //------------------------------------------ 
    
    let sql_5 = 'MERGE participant1 AS p1 USING participant2 AS p2 ON p1.name = p2.name WHEN NOT MATCHED BY Target THEN INSERT (name, email) VALUES (p1.name, p1.email)';

    connection.query(sql_5,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Records below 5 ", result);
        }
    });



    // 6. views
    //------------------------------------------ 
    
    let sql_6 = 'CREATE VIEW [Batman] AS SELECT name, ContactName FROM participant1 WHERE name = Batman';

    connection.query(sql_6,function(error,result){
        if(error){console.log("Error ", error) }
        else{ 
             console.log("Records below 5 ", result);
        }
    });

    }
});
