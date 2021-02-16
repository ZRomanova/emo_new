const errorHandler = require('../utils/errorHandler')
const User = require('../models/User');
const Bot = require('../models/Bot')

module.exports.create = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const lastButton = await Bot
        .findOne({})
        .sort({type: -1})

        const maxSort = lastButton ? lastButton.type : 0
          
        if (req.user.levelStatus == 1) {
        const button = await new Bot({
            img: req.file.location,
            text: req.body.text,
            type: maxSort + 1
        }).save()

        res.status(201).json(button)
        } else {
            res.status(403).json({message: "У вас недостаточно прав для выполнения операции."})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const updated = req.body

        if (req.file) {
            updated.img = req.file.location
          }
        
        const button = await Bot.findOneAndUpdate(
            {_id: req.params.buttonID},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(button)
    } catch (e) {
      errorHandler(res, e)
    }
}

module.exports.getAll = async function(req, res) {
try {
    const now = new Date();
    await User.updateOne(
        {_id: req.user.id}, 
        {$set: {last_active_at: now}},
        {new: true})

    const buttons = await Bot.find({}).sort({type: 1})
    res.status(200).json(buttons)
} catch (e) {
    errorHandler(res, e)
}
}

module.exports.getByButtonID = async function(req, res) {
try {
    const button = await Bot.findOne({_id: req.params.buttonID})
    res.status(200).json(button)
} catch (e) {
    errorHandler(res, e)
}
}