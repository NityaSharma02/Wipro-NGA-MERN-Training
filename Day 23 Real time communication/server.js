// this file is server.js where we will set up a basic Express server 
//Following steps canbe implemented to set up a basic Express server with socket.io integration
//Step1: Import necessary modules
//Step2: Initialize Express app
//Step3: Set up socket.io server
        //Creating a new instance of the socket.io server with CORS settings
        //Connection event listener to handle new client connections
        //Message event listener to handle incoming messages and broadcast them to all connected clients
        //Basic route to test the server
//Step4: Define middleware and routes
//Step5: Start the server


// Step 1: Import modules
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3000;

// Step 2: Create HTTP server
const server = http.createServer(app);

// Step 3: Attach Socket.IO to server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(express.json());
app.use(express.static('public'));   // Serve index.html

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Step 4: Handle socket connections
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (data) => {
    io.emit('message', data);  
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Step 5: Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
