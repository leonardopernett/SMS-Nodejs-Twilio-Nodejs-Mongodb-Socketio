const socketIO = require('socket.io');
let socket;

const connection = (server) =>{
    const io = socketIO.listen(server);

    io.on('connection', newsocket=>{
        socket = newsocket
        console.log(newsocket.id)
    })
}

const getSocket = ()=>socket;

module.exports = {connection, getSocket};
