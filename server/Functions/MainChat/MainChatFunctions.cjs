const MainChat = require('../../Modules/MainChat/MainChatModules.cjs')

exports.createMainChat = async (req, res) => {

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

exports.getMainChat = async (req, res) => {

   const {firstMember, secondMember} = req.params

   const foundChat = await MainChat.findOne({$or:[
         {"members.first":firstMember,"members.second":secondMember},
         {"members.first":secondMember,"members.second":firstMember}
      ]})


   if (!foundChat) {

      res.status(404).json({
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

exports.getMainChats = async (req, res) => {

   const {idUser} = req.params
//                                  $or its || in JS

   const foundChats = await MainChat.find({$or :[
         {"members.first":idUser},
         {"members.second":idUser}
      ]})

   if(!foundChats){
      res.status(404).json({
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