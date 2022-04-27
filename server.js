const express = require("express");
const server = express();

server.use(express.static(__dirname + '/public/index'));

server.listen("3000", () => {
    console.log("Server is up!")
});