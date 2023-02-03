const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    date: { 
        type: Date, 
        default: Date.now 
    },
    sets: [],
	lastUpdated: { 
        type: Date, 
        default: Date.now 
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Session', sessionSchema);