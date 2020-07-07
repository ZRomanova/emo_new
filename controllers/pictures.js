const errorHandler = require('../utils/errorHandler')
const Picture = require('../models/Picture')

module.exports.create = async function(req, res) {
    try {
        const picture = await new Picture({
          folderName: req.body.folderName,
          many: req.body.many
        }).save()
        res.status(201).json(picture)
      } catch (e) {
        errorHandler(res, e)
      }
}

module.exports.update = function(req, res) {
    
}

module.exports.getByPath = function(req, res) {
    
}

module.exports.getByPictureID = function(req, res) {
    
}

module.exports.remove = function(req, res) {
    
}