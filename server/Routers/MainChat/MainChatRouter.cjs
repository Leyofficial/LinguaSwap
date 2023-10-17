const express = require("express")

const mainChatRouter = express.Router()

const mainChatFunctions = require("../../Functions/MainChat/MainChatFunctions.cjs")

mainChatRouter.route('/create')
   .post(mainChatFunctions.createChat)

mainChatRouter.route('/:idChat')
   .get(mainChatFunctions.getChat)
mainChatRouter.route('/:firstMember/:secondMember')
   .get(mainChatFunctions.getChat)
mainChatRouter.route('/chats/:idUser')
   .get(mainChatFunctions.getChats)

module.exports = mainChatRouter