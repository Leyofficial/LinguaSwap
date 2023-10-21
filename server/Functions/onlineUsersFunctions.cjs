
const OnlineUsers = require('../Modules/onlineUsersModules.cjs')

exports.getOnlineUsers = async (req,res) => {

   let filter = {}
console.log(req.params)
   if(req.params.online === true){
      filter = {
         online:true
      }
   }

   const users = await OnlineUsers.find({filter})

   if(!users){
      res.status(404).json({
         status:"Error",
         message:"Users were not found"
      })
   }else{
      res.status(200).json({
         status:"Succeed",
         users
      })
   }
}

exports.addOnlineUsers = async (req,res) => {

   console.log(req.body)

   const users = await OnlineUsers.create(req.body)

   if(!users) {
      res.status(404).json({
         status: "Error",
         message: "Users were not found"
      })
   }else{
         res.status(200).json({
            status:"Succeed",
            users
         })
      }
}

exports.removeOnlineUser = async (req,res) => {
   console.log(req.body.socketId)

   const users = await OnlineUsers.deleteOne({socketId:req.body.socketId})

   res.status(200).json({
      status:"user was removed",
      users
   })

}