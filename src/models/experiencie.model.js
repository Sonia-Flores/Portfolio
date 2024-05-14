const { model, Schema} = require('mongoose');

const experienceSchema = new Schema({
    company: String,
    position: String,
    description: String,
    time: String
},{
    versionKey: false,
    timestamps: true
});

module.exports = model('experience', experienceSchema);
