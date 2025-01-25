const { nanoid } = require('nanoid');
const URL = require('../models/url');
const handleGenerateNewShortUrl = async(req,res) => {
    const body = req.body
    if (!body.url){
        return res.status(400).json({error: "Url is required"}) 
    }
    const shortId = nanoid(8)
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })
    return res.redirect("/") 
}

const handleIdRedirection = async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            },
        }
    );
    res.redirect(entry.redirectUrl)
}
const handleGetAnalytics = async(req,res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOne({shortId})
    return res.status(200).json({totalClicks: entry.visitHistory.length, analytics: entry.visitHistory})

}

const handleApiGenerateNewShortUrl = async(req,res) => {
    const body  = req.body
    if (!body.url){
        return res.status(400).json({error: "Url is required"}) 
    }
    const shortId = nanoid(8)
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user
    })
    return res.json({shortId}) 
}

const handleApiIdRedirection = async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            },
        }
    );
    res.redirect(entry.redirectUrl)
}

module.exports = {
    handleGenerateNewShortUrl,
    handleIdRedirection,
    handleGetAnalytics,
    handleApiGenerateNewShortUrl,
    handleApiIdRedirection
}