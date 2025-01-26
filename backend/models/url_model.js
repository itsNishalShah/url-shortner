const mongoose = require('mongoose')

const premiumUrlSchema = new mongoose.Schema({
    shortUrl:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistory:[{timestamps: {type: Number}}],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{timestamps: true}
)

const freeUrlSchema = new mongoose.Schema({
    shortUrl:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true,
    }
}
)


const FREE_URL = mongoose.model('Furl',freeUrlSchema)
const PREMIUM_URL = mongoose.model('Purl',premiumUrlSchema)

module.exports = {
    FREE_URL,
    PREMIUM_URL
}