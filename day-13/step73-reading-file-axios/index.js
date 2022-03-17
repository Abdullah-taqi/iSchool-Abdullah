const axios = require("axios");
const fs = require("fs");

axios("http://www.arcstellar.com")
.then(function(res){
    fs.writeFileSync("tempdata/arcstellar.html",res.data,"utf-8");
}).catch(function(error){
    console.log(error)
})