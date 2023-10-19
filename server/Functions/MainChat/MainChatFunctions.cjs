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
  const query = !req.params.idChat ? {
      $or: [
        {"members.first": firstMember, "members.second": secondMember},
        {"members.first": secondMember, "members.second": firstMember},
      ],
    }
    : {_id: req.params.idChat};

  const foundChat = await MainChat.findOne(query)
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

  const foundChats = await MainChat.find({
    $or: [
      {"members.first": idUser},
      {"members.second": idUser}
    ]
  })

  if (!foundChats) {
    res.status(404).json({
      status: "Not found",
      message: "Chats were not found"
    })
  } else {
    res.status(200).json({
      status: "Succeed",
      foundChats
    })
  }
}

exports.addMessageToMainChat = async (req,res) => {

  const {idChat} = req.params
  const addedMessage = await MainChat.findByIdAndUpdate(idChat,{$addToSet:{"messages":{$each:[req.body]}}})

  if(!addedMessage) {
    res.status(400).json({
      status:"Error",
      message:"Message was not added"
    })
  }else{
    res.status(200).json({
      status:"Succeed",
      addedMessage
    })
  }
}