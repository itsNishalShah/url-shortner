const express = require('express')
const router = express.Router()
const { handleGenerateNewShortUrl, handleIdRedirection, handleGetAnalytics, handleApiGenerateNewShortUrl, handleApiIdRedirection } = require('../controllers/url')

router.route('/').post(handleGenerateNewShortUrl)
router.get("/:shortId", handleIdRedirection)
router.get('/analytics/:shortId', handleGetAnalytics)
router.route('/url').post(handleApiGenerateNewShortUrl)
router.get("/url/:shortId", handleApiIdRedirection)

module.exports = router