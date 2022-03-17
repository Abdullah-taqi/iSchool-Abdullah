const axios = require("axios");
const fs = require("fs");
const zlib = require("zlib");

axios({
    method : "get",
    url : "http:rollic.in",
    responseType : "stream"
})
.then(res =>{
    // res.data.pipe( fs.createWriteStream("temp/rollic.html"));
    res.data.pipe(zlib.createGzip()).pipe(fs.createWriteStream("temp/rollic.zip"));
})
.catch(error => console.log(error))
