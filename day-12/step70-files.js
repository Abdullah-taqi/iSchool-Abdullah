var fs = require("fs");


/// the following can be sync or async
// write file
// read file
// watch file

// fs.writeFileSync("temp.txt","Welcome to your life");

// fs.writeFile("temp.txt","Welcome to your life",function(error){
//     if(error){ console.log("Error ", error)}
//     else{ console.log("file created")}
// });


// console.log( fs.readFileSync("temp.txt","utf-8"));
fs.readFile("temp.txt","utf-8",function(err, data){
    if(err){ console.log("Error ", err)}
    else{ console.log(data)};
});



fs.watchFile("temp.txt",function(){
    console.log("file changed");
});

setTimeout(function(){
    fs.appendFileSync("temp.txt","\nHello there","utf-8");
},4000);