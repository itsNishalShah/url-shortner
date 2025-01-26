const express =require('express')
const router = express.Router()
const { handleShortUrlCreation, handleShortUrlRedirection } = require('../controllers/url_controller')

router.post('/',handleShortUrlCreation)
router.get('/:shortId',handleShortUrlRedirection)

module.exports = router