const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io');
const app = express()


const cors = require('cors')
app.use(cors())


const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
})

let leaderBoard = []
let users = []

io.on('connection', (socket) => {

    console.log("user masok nih brokkk");

    socket.on('removeUserFromRoom', (socketId) => {
        console.log(socketId, 'Socket Id ini loh njaay yang mau dihapus');

        console.log((users, 'ini sebelom di pilter yakkk'));

        users = users.filter(user => user.socketId !== socketId)
        console.log(users, 'ini setelah di pilter brokkk')
        io.emit('UsersRemaining', users)
    })

    socket.on('username', (username) => {
        users.push({ username, socketId: socket.id })

        io.emit('Greetings with username', {
            message: `Hellov ${username}, welkooommm to the jungle brok`,
            users
        })
    })

    socket.on('leaderBoard:broadcast', ({ username, score }) => {
        leaderBoard.push({ username, score });
        console.log(leaderBoard, '>>>>>>>>>>>>leaderBoard INIH WOI');

        io.emit('shwoLeaderBoard:broadcast', leaderBoard)
    })
    socket.on('GameStart', () => {
        io.emit('StartTheGame')
    })

})

module.exports = app

module.exports = httpServer



