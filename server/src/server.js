const http = require('http');


const app = express("./app.js");
const express = require("express");
const PORT = process.env.ENV || 3001;
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log("listening on port at " + PORT);
});
