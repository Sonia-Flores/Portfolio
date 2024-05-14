const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
    name: String,
    description: String,
    image: String,
    link: String,

},{
    versionKey: false,
    timestamps: true
});

module.exports = model('project', projectSchema);