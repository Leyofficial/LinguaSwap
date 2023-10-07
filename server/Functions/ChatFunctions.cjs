const Chats = require('./../Modules/Chat.cjs');

exports.createChat = async (req , res ) => {
    console.log(req.body.idCourse);
    const newChat = await Chats.create({
        idCourse : req.body.idCourse ,
    })
    if (!newChat) {
        res.status(404).json({
            status: 'Error',
            messages : 'Chat not found.'
        })
    } else {
        res.status(200).json({
            status : 'Success',
            newChat : newChat,
        })
    }
}