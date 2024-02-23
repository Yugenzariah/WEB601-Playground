const express = require('express'); // use express.js module
const http = require('http'); // use http module

const app = express(); // create an express app

http.createServer(app).listen(3000); // Create a server with the app and listen on port 3000 local host http server