const mongoose = require("mongoose");
const chat = new mongoose.Schema({
    idCourse : String ,
    messages : [{
        author : String,
        message : String,
        data : String
    }] ,
})

const Chats = mongoose.model('Chats', chat);

module.exports = Chats