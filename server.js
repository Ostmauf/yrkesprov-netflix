const express = require("express");
const server = express();

server.use(express.static(__dirname + '/public'));
server.use(express.json());

server.listen("3000", () => {
    console.log("Server is up!")
});

server.post("/email", (req, res) => {
    console.log(req.body);
});


