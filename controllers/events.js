const errorHandler = require('../utils/errorHandler')
const User = require('../models/User');
const Event = require('../models/Event');
const Bot = require('../models/Bot');

module.exports.create = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const bot = await Bot.findOne({type: req.body.type}).lean()
        console.log(bot)
        
        const event = await new Event({
            autor: req.user.id,
            wait: req.body.wait,
            type: req.body.type,
            description: req.body.description,
            status: 0,
            chatImage: bot.img,
            institution: req.user.institution
        }).save()

        res.status(201).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getForModerators = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true})

        q = {}
        if (req.user.levelStatus != 1 || !req.query.institution) q.institution = req.user.institution
        else q.institution = req.query.institution 
        
        let events = await Event
            .find(q)
            .sort({createTime: -1})
            .skip(+req.query.offset)
            .limit(+req.query.limit)
            .lean()

        for (let event of events) {
            const text = await Bot.findOne({type: event.type})
            event.text = text.text
            const autorName = await User.findOne({_id: event.autor})
            event.autorName = autorName.name + ' ' + autorName.surname + ', ' + autorName.login
            if (event.moderator) {
                const moderatorName = await User.findOne({_id: event.moderator})
                event.moderatorName = moderatorName.name + ' ' + moderatorName.surname + ', ' + moderatorName.login
            }
        }
        res.status(200).json(events)
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
        if (req.file) updated.chatImage = req.file.location
        if (req.body.wait) updated.wait = req.body.wait.split(',')

        const event = await Event.findOneAndUpdate(
            {_id: req.params.eventID},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getByID = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true}
        )

        const event = await Event.findOne({_id: req.params.eventID})
        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}