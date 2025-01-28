const { nanoid } = require('nanoid')
const { FREE_URL , PREMIUM_URL } = require('../models/url_model')
const handleShortUrlCreation = async(req,res,next) => {
    const { url } = req.body
    const shortId = nanoid(5)
    const shortUrl = `http://localhost:4005/url/${shortId}`
    const result = await FREE_URL.create({
        shortUrl: shortUrl,
        redirectUrl: url
    })
    if(!result) return res.status(400).json("Error creating url!")
    return res.status(200).json(shortUrl)
}

const handleShortUrlRedirection = async(req,res,next) => {
    const shortId = req.params.shortId
    const shortUrl = `http://localhost:4005/url/${shortId}`
    const result = await FREE_URL.findOne({
        shortUrl: shortUrl
    })
    if(!result) return res.status(400).json("Error redirecting url!")
    return res.status(200).redirect(result.redirectUrl)
}
module.exports = {
    handleShortUrlCreation,
    handleShortUrlRedirection
}