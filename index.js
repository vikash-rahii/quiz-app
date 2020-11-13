const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/key");
const app = express();

// db config
const db = require("./config/key").mongoURI;
//connect to mongodb
connectDB();


app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));