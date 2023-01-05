const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {type: String, required: true},
    muscleGroup: {type: String, required: true},
    qrCode: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true,
})


module.exports = mongoose.model('Exercise', exerciseSchema);