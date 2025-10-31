// Import Express and user routes, create an instance of Express
const express = require('express');
const routes = require('./routes/users.js');
const app = express();
const PORT = 5000;

// Use JSON parsing middleware and user routes
app.use(express.json());
//the express app uses routes to handle the endpoints which start with /user. 
//This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.
app.use("/user", routes);

// Start the server and log a message when it's running
app.listen(PORT, () => console.log("Server is running at port " + PORT));

/*
This lab requires some packages to be installed. 
The express and nodemon package for starting and running the Express server 
and jsonwebtoken and express-session for session based authentication.
All the endpoints have skeletal, but working implementation in users.js.
express - This is for creating a server to serve the API endpoints.
nodemon - This will help to restart the server when you make any changes to the code.
jsonwebtoken - This package helps in generating a JSON web token which we will use for authentication. A JSON web token (JWT) is a JSON object used to communicate information securely over the internet (between two parties). It can be used for information exchange and is typically used for authentication systems.
express-session - This package will help us to maintain the authentication for the session.
*/ 