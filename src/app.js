const express = require('express'); // use express.js module 
const http = require('http'); // use http module


const app = express(); // create an express app

app.use((req, res, next) => { // request, response, and next functions
    const minute = new Date().getMinutes(); // Create a const that holds the current time minutes.
    if(minutes % 2 === 0) { // If the current minutes remainder of 2 equals 0
        next() // Continue to the next function
    }else {
        res.statusCode = 403 // Provide the error code
        res.end('Not authorized') // End the response with the message
    }

});

app.use((req, res) => {
    res.writeHead(200,{"Content-Type" : "text/plain"}); // Create a call back handler request, statusCode 200 and the content type plain text
    res.end("Hello World!") // End the response with the message

})

http.createServer(app).listen(3000); // Create a server with the app and listen on port 3000 local host http server