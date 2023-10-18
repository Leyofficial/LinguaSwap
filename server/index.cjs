const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');
const app = express()
const PORT = 3000
const helmet = require("helmet");
const http = require('http')
const ErrorHandler = require("./APIFeatures/ErrorHandler.cjs");
const server = http.createServer(app);
const path = require('path')

const authUsers = require('./Modules/AuthorizationModules.cjs')

const {Server} = require('socket.io')

const io = new Server(server, {
   cors: {
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PATCH"]
   }
});

// working with socket
io.on("connection", (socket) => {

   //  users
   authUsers.find({online: true}).then(users => {
      socket.emit("onlineUsers", users)
   });
   io.emit("connectedSocket", socket.id)

   // messages
   // socket.on("message", (data) => {
   //    io.emit("response", data)
   // })
   socket.on("privateMessage", (data) => {
      io.emit("privateResponse", data)
   })

// users
   socket.on('newUser', (userId) => {
      socket.userId = userId
      authUsers.findByIdAndUpdate(userId, {online: true}, {new: true}).then(user => {
         io.emit("userConnected", user);
      })
   })

   //typing
   socket.on("typing",(user) => {
      io.emit("userTyping",user)
   })

   // disconnect  / set online false for  user who was log out
   socket.on("disconnect", () => {

      if (socket.userId) {
         authUsers.findByIdAndUpdate(socket.userId, {
            online: false
         }, {new: true}).then(user => {

            io.emit("userDisconnected",socket.userId)
         })
      }
   })
})


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
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

const languageRouter = require('./Routers/LanguageRouter.cjs');
const authRouter = require('./Routers/AuthorizationRouter.cjs');
const coursesRouter = require('./Routers/CoursesRouter.cjs');
const chatRouter = require('./Routers/ChatRouter.cjs');
const teacherChatRouter = require('./Routers/ChatWithTeachersRouter.cjs')
const onlineUsersRouter = require('./Routers/onlineUsersRouters.cjs')
const mainChatRouter = require('./Routers/MainChat/MainChatRouter.cjs')

app.use('/chat', chatRouter);
app.use('/languages', languageRouter);
app.use('/authorization', authRouter);
app.use('/courses', coursesRouter);
app.use('/teacherChats', teacherChatRouter);
app.use('/onlineUsers', onlineUsersRouter);
app.use('/mainChat', mainChatRouter);



app.all('*', (req, res, next) => {
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
   next(new ErrorHandler(`Url with this path ${req.originalUrl} doesnt exist`), 404);
})


server.listen(PORT, () => {
   console.log(`App running on ${PORT}`)
})