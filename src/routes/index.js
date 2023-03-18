const express = require('express');
const app = express();

app.use(express.json());
// app.use('/user', require("./user"));
app.use('/paquete',require("./paquete"));
app.use('/cobros',require("./cobro"));
app.use('/customers',require("./customer"));
app.use('/login',require("./login"))



module.exports = app;