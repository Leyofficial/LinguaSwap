const Chats = require('./../Modules/Chat.cjs');

exports.createChat = async (req, res) => {

   const newChat = await Chats.create({
      idCourse: req.body.idCourse,
   })
   if (!newChat) {
      res.status(404).json({
         status: 'Error',
         messages: 'Chat not found.'
      })
   } else {
      res.status(200).json({
         status: 'Success',
         newChat: newChat,
      })
   }
}

exports.getChat = async (req, res) => {

   const {idCourse} = req.params

   const chatRoom = await Chats.findOne({"idCourse": idCourse})

   if (!chatRoom) {
      res.status(404).json({
         status: "Error",
         message: "Chat was not found"
      })
   } else {
      res.status(200).json({
         status: "Succeed",
         chatRoom
      })
   }
}

exports.addMessage = async (req, res) => {

   const {idCourse} = req.params


   const message = await Chats.findByIdAndUpdate(idCourse,
      {$addToSet: {"messages": {$each: [req.body]}}}
   )

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