const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

const setUpServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/',express.static(__dirname + '/public'));

    io.on('connection', (socket) => { 
        console.log('a user connected');

        setInterval(()=>{
            socket.emit('from_server');
        },3000)

        socket.on('from_client',()=>{
            console.log('received from client');
        })
    });

    server.listen(3000, () => {
        console.log('server started on', 3000);
    })
}

setUpServer();