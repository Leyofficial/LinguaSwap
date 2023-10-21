
const mongoose = require('mongoose')


const OnlineUsersSchema = new mongoose.Schema({
      userId:String,
      socketId:String
})

const OnlineUsers = mongoose.model('onlineusers',OnlineUsersSchema)
module.exports = OnlineUsers