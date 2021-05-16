const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tableSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    parent: {
        ref: 'table',
        type: Schema.Types.ObjectId,
    },
    src: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('table', tableSchema)