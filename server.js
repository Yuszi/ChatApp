const io = require('socket.io')(5500)

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})

