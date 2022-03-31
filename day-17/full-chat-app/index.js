const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 6060;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/avengers', (req, res) => {
    res.sendFile(__dirname + '/public/avengers.html');
});

app.get('/justicelegue', (req, res) => {
    res.sendFile(__dirname + '/public/justicelegue.html');
});


// heroes namespace
const heroes = io.of('/heroes');

heroes.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        heroes.in(data.room).emit('message', `New user joined ${data.room} room!`);
    })

    socket.on('message', (data) => {
        console.log(`message: ${data.msg}`);
        heroes.in(data.room).emit('message', data.msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        heroes.emit('message', 'user disconnected');
    })
})
