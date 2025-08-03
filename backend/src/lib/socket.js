import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: true, // Reflect the request origin
        credentials: true
    },
});

// use to store online users
const userSocketMap = {};

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('online-users', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit('online-users', Object.keys(userSocketMap));
    });
});

export {io, app, server};