const express = require('express')
const mongoose = require("mongoose");
const corss = require('cors');
const app = express()
const helmet = require('helmet');
const PORT = process.env.PORT || 3000

const http = require('http')
const ErrorHandler = require("./APIFeatures/ErrorHandler.js");

const server = http.createServer(app)


app.user(corss());

app.options("*",corss());

mongoose.connect("mongodb+srv://temcenkovova8:brFMAZAjzkX4ighR@cluster0.4dgfzzn.mongodb.net/LinguaSwap?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('DB connection successful'));

app.use(helmet());

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  next(new ErrorHandler(`Url with this path ${req.originalUrl} doesnt exist`), 404);
})

server.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})