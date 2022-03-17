let http = require("http");

let server = http.createServer(function(request, response){
    response.writeHead(200,"Hello Guys",{
        'Content-Type': 'text/html'
    })

    /*
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('<meta charset="UTF-8">');
    response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    response.write('<title>Document</title>');
    response.write('</head>');
    response.write('<body>');
    // response.write('<h1>This is my first page</h1>');
    response.write('<h1>'+message+'</h1>');
    response.write('</body>');
    response.write('</html>');
    */

    response.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>${message}</h1>
                    </body>
                    </html>`);

    // response.write("Hello from HTTP server");
    //response.write("<h1>Hello from HTTP server</h1>");
    response.end();
    // response.write("<h1>Hello from HTTP server</h1>").response.end();

    // 3 type of streams: 1) read stream 2)write stream 3) read and write stream
});

server.listen(8080,"localhost",function(error){
    if(error){
        console.log("Error", error)
    }else{
        console.log("Server is now live on localhost:8080");
    }
});