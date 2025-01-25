const express = require('express')
const { handleUserSignup, handleUserLogin, handleApiLogin } = require('../controllers/user')
const router = express.Router()

router.post('/',handleUserSignup) 
router.post('/login', handleUserLogin)
router.post('/api/login', handleApiLogin)



module.exports = router