const mongoose = require('mongoose')

const mainChatSchema = new mongoose.Schema({

   members:{
      first:String,
      second:String,
   },
   createDate:{
      type:Date,
      default:Date.now
   },
   messages:[{
      message:String,
      date:{
         type:Date,
         default: Date.now
      },
      author:String,
      idMessage:Number
   }]
})

const MainChat = mongoose.model('mainChat',mainChatSchema)
module.exports = MainChat