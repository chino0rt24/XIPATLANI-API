const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const logger = require('morgan');
var cors = require('cors');


const app = express();
app.use(logger('dev'));

const port = process.env.PORT || 2000;
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("Welcome to Xipatlani api")
});
//midelware
app.use(express.json());
app.use(require("./routes"));

//moingo db connection

//HTTP HEADERS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
  
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  
    next();
  });

mongoose
    .connect(process.env.MONGO_DATABASE)
    .then(() => console.log("Xipatlani connected to MongoDb"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server Xipatlani conectado a port', port));