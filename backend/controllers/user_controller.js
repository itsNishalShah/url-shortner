const User = require('../models/user_model')

const handleUserSignup = async(req,res,next) => {
    const { username, email , password , role } = req.body
    const user = await User.create({username,email,password,role})
    if(!user) return res.status(400).json("Error creating user!")
    return res.status(200).json(user)
}

const handleUserLogin = async(req,res,next) => {
    const { email, password } = req.body
    const user = await User.findOne({email,password})
    if(!user) return res.status(400).json("Wrong email or password!")
    return res.status(200).json("Logged in as " + user.username)
}

module.exports = {
    handleUserLogin,
    handleUserSignup
}