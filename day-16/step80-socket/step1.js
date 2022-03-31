const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
// const ioServer = new io.Server();

io.on("connection", function(socket){
    console.log("a client socket is connected");
    socket.emit("message","Hello from Socket.io");
})

// io.on("disconnect", function(){
//     console.log("a client socket is disconnected");
// })

app.use(express.static(__dirname));

server.listen(6060,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("Server is now live on localhost:6060")
    }
})