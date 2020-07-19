//const cyrillicToTranslit = require('cyrillic-to-translit-js')
const errorHandler = require('../utils/errorHandler')
const Picture = require('../models/Picture')

module.exports.create = async function(req, res) {
    try {
         const lastPicture = await Picture
        .findOne({parent: req.params.parentID})
        .sort({p_sort: -1})

        const maxSort = lastPicture ? lastPicture.p_sort : 0

        const picture = await new Picture({
          folder: req.body.folder,
          answers: req.body.answers,
          text: req.body.text,
          parent: req.params.parentID,
          p_sort: maxSort + 1,
          boysGreyPicture: req.files ? (req.files['boysGreyPicture'] ? req.files['boysGreyPicture'][0].path : '') : '',
          girlsGreyPicture: req.files ? (req.files['girlsGreyPicture'] ? req.files['girlsGreyPicture'][0].path : '') : '',
          boysColorPicture: req.files ? (req.files['boysColorPicture'] ? req.files['boysColorPicture'][0].path : '') : '',
          girlsColorPicture: req.files ? (req.files['girlsColorPicture'] ? req.files['girlsColorPicture'][0].path : '') : '',
          invisible: req.body.invisible,
          system: req.body.system,
          user: req.user.id
        }).save()
        res.status(201).json(picture)
      } catch (e) {
        errorHandler(res, e)
      }
}

module.exports.update = async function(req, res) {
  try {
    const updated = req.body

    if (req.files['boysGreyPicture']) {
      updated.boysGreyPicture = req.files['boysGreyPicture'][0].path
    }

    if (req.files['girlsGreyPicture']) {
      updated.girlsGreyPicture = req.files['girlsGreyPicture'][0].path
    }

    if (req.files['boysColorPicture']) {
      updated.boysColorPicture = req.files['boysColorPicture'][0].path
    }

    if (req.files['girlsColorPicture']) {
      updated.girlsColorPicture = req.files['girlsColorPicture'][0].path
    }
    
    const picture = await Picture.findOneAndUpdate(
      {_id: req.params.pictureID},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(picture)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getAll = async function(req, res) {
  try {
    const pictures = await Picture.find({parent: req.query.parent})
    res.status(200).json(pictures)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByPictureID = async function(req, res) {
  try {
    const picture = await Picture.findOne({_id: req.params.pictureID})
    res.status(200).json(picture)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  deletePicture = await Picture.findOne({_id: req.params.pictureID})
  
  try {
    /*
    pictures = await Picture.find({
      parent: deletePicture.parent,
      p_sort: {$gt: deletePicture.p_sort}
    })
    console.log(pictures)

    await Picture.updateMany(pictures, {$set: {p_sort: p_sort - 1}})
    */
    if (deletePicture.system === true) {
      res.status(200).json({
        message: 'Этот объект нельзя удалить.'
      })  
    }
    else {
      if (deletePicture.folder === true) {
        message = 'Папка удалена.'
      } 
      else {
        message = 'Картинка удалена.'
      }
        await Picture.deleteOne(deletePicture)
        res.status(200).json({
          message: message
    })
  }
  } catch (e) {
    errorHandler(res, e)
  }
}