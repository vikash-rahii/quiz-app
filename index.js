const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/key");
const app = express();
const routes = require('./routing/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(require('./routing/routes'));


// db config
const db = require("./config/key").mongoURI;
//connect to mongodb
connectDB();


app.get("/", (req, res) => res.send("api' are running you can use postman for checking purpose"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));