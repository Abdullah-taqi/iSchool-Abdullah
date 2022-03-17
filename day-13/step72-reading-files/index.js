const fetch = require("fetch");
const fs = require("fs");

fetch.fetchUrl("http://www.arcstellar.com",function(error,meta,data){
    if(error){
        console.log("Error", error)
    }else{
        // console.log(data.toString())
        fs.writeFileSync("tempfiles/arcstellar.html",data,"utf-8");
    }
})