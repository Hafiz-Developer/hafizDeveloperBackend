const express = require('express');
const app = express();
const http = require('http'); // Import the http module
const server = http.createServer(app); // Create the server instance
const cors = require('cors');
const connectDb = require('./DataBase/db');
const contactRoute = require('./ContactMe/router');
require('dotenv').config();

const port = 5000 ;

connectDb();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes setup
app.use("/contact", contactRoute);

// Start the server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
