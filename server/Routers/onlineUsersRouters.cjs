const express = require("express");


const onlineUsersRouter = express.Router({mergeParams: true});

const onlineUsersFunctions = require('../Functions/onlineUsersFunctions.cjs')

onlineUsersRouter.route('/')
   .post(onlineUsersFunctions.addOnlineUsers)
   .patch(onlineUsersFunctions.removeOnlineUser)

onlineUsersRouter.route('/:online')
   .get(onlineUsersFunctions.getOnlineUsers)


module.exports = onlineUsersRouter