const express = require('express')
const router = express.Router()
const { validateUserLogin, validateUserSignup } = require('../middlewares/validateUser')
const { handleUserLogin, handleUserSignup } = require('../controllers/user_controller')


router.post('/login',validateUserLogin,handleUserLogin)
router.post('/signup',validateUserSignup,handleUserSignup)


module.exports = router