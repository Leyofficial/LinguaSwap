const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000
const helmet = require("helmet");
const http = require('http')
const ErrorHandler = require("./APIFeatures/ErrorHandler.cjs");

const server = http.createServer(app);


app.use(cors());

app.options("*", cors());
app.use(helmet());
app.use(express.json())

mongoose.connect("mongodb+srv://temcenkovova8:brFMAZAjzkX4ighR@cluster0.4dgfzzn.mongodb.net/LinguaSwap?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('DB connection successful'));


/// routers

const languageRouter = require('./Routers/LanguageRouter.cjs')
const authRouter = require('./Routers/AuthorizationRouter.cjs')

app.use('/languages', languageRouter)
app.use('/authorization', authRouter)

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  next(new ErrorHandler(`Url with this path ${req.originalUrl} doesnt exist`), 404);
})


server.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})