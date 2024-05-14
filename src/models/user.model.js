const { model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'regular'],
        default: 'regular'
    }
},{
    versionKey: false,
    timestamps: true
});

module.exports = model('user', userSchema);