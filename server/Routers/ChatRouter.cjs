const express = require('express');
const chatRouter = express.Router();
const chatFunctions = require('./../Functions/ChatFunctions.cjs');

chatRouter.route('/chatroom')
.post(chatFunctions.createChat);

module.exports = chatRouter