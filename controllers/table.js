const errorHandler = require('../utils/errorHandler')
const User = require('../models/User');
const Table = require('../models/Table')

module.exports.create = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const item = await new Table({
            item: req.body.item,
            parent: req.body.parent,
            src: req.file ? req.file.location : '/images/clean.png'
        })
        res.status(200).json(item)
    } catch (e) {
        errorHandler(e)
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
        if (req.file) updated.src = req.file.location

        const item = await Table.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(item)
    } catch (e) {
        errorHandler(e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        await Table.deleteMany({$or: [{parent: req.params.id}, {_id: req.params.id}]})
        res.status(200).json({message: 'Удалено.'})
    } catch (e) {
        errorHandler(e)
    }
}

module.exports.getAll = async function(req, res) {
    try {
        const now = new Date();
        await User.updateOne(
          {_id: req.user.id}, 
          {$set: {last_active_at: now}},
          {new: true})

        const items = await Table.find({})
        res.status(200).json(items)
    } catch (e) {
        errorHandler(e)
    }
}