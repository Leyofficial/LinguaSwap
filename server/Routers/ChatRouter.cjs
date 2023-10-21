const express = require('express');
const chatRouter = express.Router();
const chatFunctions = require('./../Functions/ChatFunctions.cjs');

chatRouter.route('/chatroom')
.post(chatFunctions.createChat);

chatRouter.route('/chatroom/:idCourse')
   .get(chatFunctions.getChat)
   .patch(chatFunctions.addMessage)

module.exports = chatRouter