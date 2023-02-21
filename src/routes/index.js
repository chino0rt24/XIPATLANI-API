const express = require('express');
const app = express();

app.use(express.json());
app.use('/user', require("./user"));
app.use('/paquete',require("./paquete"));



module.exports = app;