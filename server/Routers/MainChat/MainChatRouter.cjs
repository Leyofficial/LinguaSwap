const express = require("express")

const mainChatRouter = express.Router()

const mainChatFunctions = require("../../Functions/MainChat/MainChatFunctions.cjs")

mainChatRouter.route('/create')

   .post(mainChatFunctions.createMainChat)

  .post(mainChatFunctions.createMainChat)


// mainChatRouter.route('/:idChat')
//    .get(mainChatFunctions.getChat)
mainChatRouter.route('/chat/:firstMember/:secondMember')

   .get(mainChatFunctions.getMainChat)


mainChatRouter.route('/chats/dialogs/:idUser')
   .get(mainChatFunctions.getMainChats)

module.exports = mainChatRouter



