const express = require("express"); //added express
const app = express(); // express gives a server back when we call the app
const http = require("http").createServer(app); //added http with create server
const io = require("socket.io")(http);

// We are leveraging on the express's server with http by passing the server to this create server
// That way we have a server which has the advantage of using express but we also have the ability to work with the lower level APIs
// So we take the server and pass it to socket.io. Now the server is ready.
// So the idea here is we basically bring the context of the server to the socket

//By default all the browers support websockets

app.use(express.static(__dirname));
app.use(express.static(__dirname+"/public"));

// let clientlist = 0;
io.on("connection", function(socket){       //connection
    // clientlist++;
    console.log("socket connection success");
    // socket.emit("serverMessage","Client connected you are "+clientlist);
    socket.emit("serverMessage","Client connected");
    socket.on("disconnect",function(){      //disconnection
        console.log("client disconnected")
    })
});


http.listen(2020);
console.log("Server is now live on localhost:2020");