 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    let dateVal = today.getDate();
    if (dateVal.getHours() >= 12 && dateVal.getHours() < 18){
        res.end(`Good afternoon! The date today is ${today.getDate()}`);
    } else if (dateVal.getHours() >= 17 && dateVal.getHours() < 24){
        res.end(`Good night! The date today is ${today.getDate()}`);
    } else{
        res.end(`Good morning! The date today is ${today.getDate()}`);
    }

    res.end(`Hello, World! The date today is ${today.getDate()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
