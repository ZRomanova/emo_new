const errorHandler = require('../utils/errorHandler')
const Picture = require('../models/Picture')

module.exports.create = async function(req, res) {
    try {
      if (req.user.levelStatus == 1) {
        const lastPicture = await Picture
        .findOne({parent: req.params.parentID})
        .sort({p_sort: -1})

        const maxSort = lastPicture ? lastPicture.p_sort : 0

        const picture = await new Picture({
          folder: req.body.folder,
          answers: req.body.answers != '' ? req.body.answers.split(',') : [],
          exceptions: req.body.exceptions != '' ? req.body.exceptions.split(',') : [],
          text: req.body.text,
          textForGirls: req.body.textForGirls,
          parent: req.params.parentID,
          p_sort: maxSort + 1,
          boysGreyPicture: req.files ? (req.files['boysGreyPicture'] ? req.files['boysGreyPicture'][0].location : '') : '',
          girlsGreyPicture: req.files ? (req.files['girlsGreyPicture'] ? req.files['girlsGreyPicture'][0].location : '') : '',
          boysColorPicture: req.files ? (req.files['boysColorPicture'] ? req.files['boysColorPicture'][0].location : '') : '',
          girlsColorPicture: req.files ? (req.files['girlsColorPicture'] ? req.files['girlsColorPicture'][0].location : '') : '',
          invisible: req.body.invisible,
          system: req.body.system,
          user: req.user.id,
          many: req.body.many
        }).save()
        res.status(201).json(picture)
      } else {
        res.status(403).json({message: "У вас недостаточно прав для выполнения операции."})
      }
      } catch (e) {
        errorHandler(res, e)
      }
}

module.exports.update = async function(req, res) {
  try {
    const updated = req.body
    updated.answers = req.body.answers != '' ? req.body.answers.split(',') : []
    updated.exceptions = req.body.exceptions != '' ? req.body.exceptions.split(',') : []
    if (req.files) {
      if (req.files['boysGreyPicture']) {
        updated.boysGreyPicture = req.files['boysGreyPicture'][0].location
      }
      if (req.files['girlsGreyPicture']) {
        updated.girlsGreyPicture = req.files['girlsGreyPicture'][0].location
      }
      if (req.files['boysColorPicture']) {
        updated.boysColorPicture = req.files['boysColorPicture'][0].location
      }
      if (req.files['girlsColorPicture']) {
        updated.girlsColorPicture = req.files['girlsColorPicture'][0].location
      }
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
    const pictures = await Picture.find({parent: req.params.folderID}).sort({p_sort: 1})
    const folder = await Picture.findOne({_id: req.params.folderID}, {many: 1, parent:1, text: 1})
    const picturesAndFolder = {"pictures": pictures, "folder": folder}
    res.status(200).json(picturesAndFolder)
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
  try {
    const deletePicture = await Picture.findOne({_id: req.params.pictureID})
  
    const pictures = await Picture.find({
      parent: deletePicture.parent,
      p_sort: {$gt: deletePicture.p_sort}
    })
    
    if (deletePicture.system === true) {
      res.status(200).json({
        message: 'Этот объект нельзя удалить.'
      })  
    }
    else {
      for (let picture of pictures) {
        await Picture.updateOne({_id: picture._id}, {$set: {p_sort: picture.p_sort - 1}}, {new: true})
      }
      if (deletePicture.folder === true) {
        message = 'Папка удалена.'
      } 
      else {
        message = 'Картинка удалена.'
      }
        await Picture.deleteOne(deletePicture)
        res.status(200).json({message})
  }
  } catch (e) {
    errorHandler(res, e)
  }
}