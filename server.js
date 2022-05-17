// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpCtVk0MmjWeUsO3JzQIAglrwhp5OVgpc",
  authDomain: "netflix-teoriprov.firebaseapp.com",
  databaseURL: "https://netflix-teoriprov-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-teoriprov",
  storageBucket: "netflix-teoriprov.appspot.com",
  messagingSenderId: "679779578591",
  appId: "1:679779578591:web:29a709bd0609dd47832f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const path = require("path");
const {db, auth} = require("./config/FBconfig.js");
const {getAuth, signInWithEmailAndPassword} = require("firebase/auth");
const cookieParser = require("cookie-parser");

const express = require("express");
const decodeIDToken = require("./config/auth");
const server = express();

server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser());
server.use((req, res, next) => {
    console.log(req.headers.cookie);
    next()
});
//server.use(decodeIDToken);

server.listen("3000", () => {
    console.log("Server is up!")
});

server.post("/email", (req, res, next) => {
    signInWithEmailAndPassword(getAuth(), req.body.email, req.body.password)
    .then((user) => {
        return user.user.getIdToken();
    }).then((token) => {
        res.cookie(" ", "Bearer " + token);
        
        res.redirect("/home")
        next()
    })
    
    
});

server.get("/home", decodeIDToken,(req, res) => {
    res.sendFile(__dirname + "/public/home/" + "home.html")
});

server.get("/login", (req, res) =>  {
    res.sendFile(__dirname + "/public/login/" + "login.html")
});

server.get("/browser", decodeIDToken,(req, res) =>  {
    res.sendFile(__dirname + "/public/browser/" + "browser.html")
});

server.get("/index", (req, res) =>  {
    res.sendFile(__dirname + "/public/" + "index.html")
});