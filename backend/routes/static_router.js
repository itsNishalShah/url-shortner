const express = require('express')
const router = express.Router()
const URL = require('../models/url')
const { restrictTo } = require('../middleware/auth')

router.get('/admin/urls',restrictTo(["Admin"]),async(req,res) => {
    const allUrls =  await URL.find({})
    return res.render('home',{ urls: allUrls })
})



router.get('/',restrictTo(["Normal","Admin"]),async(req,res) => { 
    const allUrls =  await URL.find({createdBy: req.user._id})
    return res.render('home',{ urls: allUrls })
})

router.get('/register',(req,res) => {
    return res.render('signup')
})

router.get('/login',(req,res) => {
    return res.render('login')
})

module.exports = router