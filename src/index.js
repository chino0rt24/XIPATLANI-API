const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const logger = require('morgan');


const app = express();
const port = process.env.PORT || 7000;
//routes
app.get("/", (req, res) => {
    res.send("Welcome to Xipatlani api")
});
//midelware
app.use(express.json());
app.use(require("./routes"));
app.use(logger('dev'));

//moingo db connection

mongoose
    .connect(process.env.MONGO_DATABASE)
    .then(() => console.log("Xipatlani connected to MongoDb"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server Xipatlani conectado a port', port));