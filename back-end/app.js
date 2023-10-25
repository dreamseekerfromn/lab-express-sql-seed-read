const express = require("express");
const cors = require("cors");
const app = express();
const songController = require('./controllers/songController.js');

app.use(cors());
app.use(express.json());

// root
app.get("/", (request, response) => {
    response.send("Welcome to Tuner");
});

app.use("/songs", songController);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;