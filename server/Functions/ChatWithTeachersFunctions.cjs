

const ChatWithTeacher = require('../Modules/ChatWithTeachersModels.cjs')

exports.createChatTeacher = async (req,res) => {
console.log(req.body)
   const newChat = await ChatWithTeacher.create({
      idTeacher:req.body.idTeacher,
      idStudent:req.body.idStudent,
      messages:[]
   })

   if(!newChat) {
      res.status(404).json({
         status:"Error",
         message:"Something went wrong"
      })
   }else {
      res.status(200).json({
         status:"Success",
         newChat
      })
   }
}

exports.getChatTeacher = async (req,res) => {

   const {idTeacher,idStudent} = req.params

   const findChatTeacher = await ChatWithTeacher.findOne({"idTeacher":idTeacher, "idStudent":idStudent})

   if(!findChatTeacher) {
      res.status(404).json({
         status:"Error",
         message:"Something went wrong"
      })
   }else{
      res.status(200).json({
         status:"Success",
         findChatTeacher
      })
   }
}

exports.getChatsTeacher = async (req,res) => {

   const {idStudent} = req.params

   const findChats = await ChatWithTeacher.find({"idStudent" : idStudent})

   if(!findChats) {
      res.status(404).json({
         status:"Error",
         message:"Something went wrong"
      })
   }else{
      res.status(200).json({
         status:"Success",
         results:findChats.length,
         findChats
      })
   }
}

exports.addMessageToChat = async (req,res) => {

   const {idTeacher,idStudent} = req.params
   const message = await ChatWithTeacher.findOneAndUpdate({"idTeacher":idTeacher, "idStudent":idStudent},
      {$addToSet: {"messages": {$each: [req.body]}}})

   if (!message) {
      res.status(404).json({
         status: "Error",
         message: "The message was not saved"
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         message
      })
   }
}

