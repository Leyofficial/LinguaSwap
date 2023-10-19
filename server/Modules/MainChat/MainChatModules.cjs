const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainChatSchema = new Schema({

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
   }]
})

const MainChat = mongoose.model('mainChat',mainChatSchema)
module.exports = MainChat