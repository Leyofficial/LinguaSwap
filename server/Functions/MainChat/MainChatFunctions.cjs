const MainChat = require('../../Modules/MainChat/MainChatModules.cjs')

exports.createChat = async (req, res) => {

   const chat = await MainChat.create({
      members: req.body.members,
      messages: [],
      createDate: new Date(),
   })

   if (!chat) {
      res.status(404).json({
         status: "Error",
         message: "Chat was not created"
      })
   } else {
      res.status(200).json({
         status: "Created",
         chat
      })
   }
}

exports.getChat = async (req, res) => {

   const {firstMember, secondMember} = req.params

   const foundChat = await MainChat.findOne({"members.first": firstMember, "members.second": secondMember})

   if (!foundChat) {
      res.status(301).json({
         status: "Not found",
         message: "Chat was not found"
      })
   } else {
      res.status(200).json({
         status: "Success",
         foundChat
      })
   }
}

exports.getChats = async (req, res) => {

   const {userId} = req.params
//                                     $or its || in JS
   const foundChats = await MainChat.find({$or :[
         {"members.first":userId},
         {"members.second":userId}
      ]})

   if(!foundChats){
      res.status(301).json({
         status:"Not found",
         message:"Chats were not found"
      })
   }else{
      res.status(200).json({
         status:"Succeed",
         foundChats
      })
   }
}