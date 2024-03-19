const express = require('express');
const app = express();
const http = require('http'); // Import the http module
const server = http.createServer(app); // Create the server instance
const cors = require('cors');
const connectDb = require('./DataBase/db');
const contactRoute = require('./ContactMe/router');
const socketIo = require('socket.io');
require('dotenv').config();

const port = process.env.PORT ;

let likeCount = 0;

// Socket.IO setup
const io = socketIo(server);

io.on('connection', (socket) => {
    // Send initial like count to the newly connected client
    socket.emit('likeCountUpdate', likeCount);

    // Handle like count updates from clients
    socket.on('likeCountChange', (newLikeCount) => {
        likeCount = newLikeCount;
        // Broadcast the updated like count to all connected clients
        io.emit('likeCountUpdate', likeCount);
    });
});

// Database connection
connectDb();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes setup
app.use("/contact", contactRoute);
app.use('/api', require('./heart/controller'));

// Start the server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
