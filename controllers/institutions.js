const errorHandler = require('../utils/errorHandler')
const Institution = require('../models/Institution')
const User = require('../models/User')


module.exports.create = async function(req, res) {
    try {
        const institution = await new Institution({
          name: req.body.name
        }).save()
        res.status(201).json(institution)
      } catch (e) {
        errorHandler(res, e)
      }
}

module.exports.update = async function(req, res) {
    try {
      const institution = await Institution.findOneAndUpdate(
        {_id: req.params.institutionID},
        {$set: req.body},
        {new: true}
      )
      res.status(200).json(institution)
    } catch (e) {
      errorHandler(res, e)
    }
  }
  
module.exports.getAll = async function(req, res) {
    try {
      const institutions = await Institution.find({}).sort({name: 1})
      res.status(200).json(institutions)
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.getByInstitutionID = async function(req, res) {
    try {
      const institution = await Institution.findOne({_id: req.params.institutionID})
      res.status(200).json(institution)
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.remove = async function(req, res) {
    try {
      const users = await User.find({institution: req.params.institutionID})
      users.updateMany({}, {$set: {institution: req.params.newID}})
      await Institution.remove({_id: req.params.institutionID})
      res.status(200).json({
        message: 'Учреждение удалено.'
      })
    } catch (e) {
      errorHandler(res, e)
    }
  }