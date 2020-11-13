const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/key");
const app = express();
const routes = require('./routing/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/routing/routes", require("./routing/routes"));


// db config
const db = require("./config/key").mongoURI;
//connect to mongodb
connectDB();


app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));