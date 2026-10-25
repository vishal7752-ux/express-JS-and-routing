const express = require("express");

const app = express();
const PORT = 3000;


app.get("/home", (req, res) => {
    res.send("Welcome to Express.js");
});


app.get("/about", (req, res) => {
    res.send("This is About Page");
});


app.get("/user", (req, res) => {
    res.send("This is User Page");
});


app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});


app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});


app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});