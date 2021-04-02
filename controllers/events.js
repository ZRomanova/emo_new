const mongoose = require('mongoose')
const errorHandler = require('../utils/errorHandler')
const User = require('../models/User');
const Event = require('../models/Event');
const Bot = require('../models/Bot');
const GroupMessage = require('../models/GroupMessage');

module.exports.create = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const bot = await Bot.findOne({type: req.body.type}).lean()

        var wait = []
        for (let instit of req.body.wait) {
            const users = await User.find({institution: instit}, {_id: 1}).lean()
            for (let user of users) {
                console.log(wait) 
                wait.push(user._id)
            }
        }
        wait.push(req.user.id)
        
        const event = await new Event({
            autor: req.user.id,
            wait,
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
            const autorName = await User.findOne({_id: event.autor}, {name: 1, surname: 1, login: 1})
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
        if (req.body.status == 1) updated.mailingTime = now
        if (req.body.status == 2) updated.closingTime = now
        if (req.file) updated.chatImage = req.file.location
        if (req.body.wait && req.body.wait != "") updated.wait = req.body.wait.split(',')
        else delete updated.wait

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

module.exports.getForBot = async function (req, res) {
    try {
        function compareFunction(a, b) {
            if (a.Tpoint < b.Tpoint) return -1;
            return 1;
        }

        const now = new Date();
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true})
        
        const events = await Event
        .find({$or: [
            {autor: req.user.id}, 
            {participants: req.user.id, status: 1},
            {wait: req.user.id, status: 1}
        ]}).lean()

        for (let event of events) {
            if (event.status > 0) event.Tpoint = event.mailingTime
            else event.Tpoint = event.createTime
        }

        events.sort(compareFunction)

        res.status(200).json(events)

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getForEvents = async function (req, res) {
    try {
        const now = new Date();
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now, onlineStatus: '0'}},
            {new: true})

        const events = await Event.find({participants: req.user.id, status: 1}).sort({date: 1}).lean()

        for (let event of events) {
            const message = await GroupMessage.findOne({group: event._id, wait: req.user.id})
            if (message) event.letter = true
            else event.letter = false
        }

        res.status(200).json(events)

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.changeUserStatus = async function (req, res) {
    try {
        const now = new Date();
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true})

        const id = mongoose.Types.ObjectId(req.user.id);

        await Event.findOneAndUpdate(
            {_id: req.params.eventID},
            {$pull: {wait: id}},
            {new: true}
        )

        let new_event

        if (req.body.change == 1 ) {
            new_event = await Event.findOneAndUpdate(
                {_id: req.params.eventID},
                {$addToSet: {participants: id}},
                {new: true}
            )
        }
        else {
            new_event = await Event.findOneAndUpdate(
                {_id: req.params.eventID},
                {$addToSet: {hide: id}},
                {new: true}
            )
        }

        res.status(200).json(new_event)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.emoLetters = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const event = await Event.findOne({wait: req.user.id, status: 1})

        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.addPhoto = async function(req, res) {  
    try {
        const now = new Date()
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true}
        )

        const event = await Event.findOneAndUpdate(
            {_id: req.rarams.eventID},
            {$addToSet: { photolikes: { $each: req.files.location } }},
            {new: true}
        )
            
        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.deletePhoto = async function(req, res) {  
    try {
        const now = new Date()
        await User.updateOne(
            {_id: req.user.id}, 
            {$set: {last_active_at: now}},
            {new: true}
        )

        const event = await Event.findOneAndUpdate(
            {_id: req.rarams.eventID},
            {$pullAll: { photolikes: req.body.deletePhoto }},
            {new: true}
        )
            
        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }
}