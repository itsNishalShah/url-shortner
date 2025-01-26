const { validateUserSignupSchema, validateUserLoginSchema } = require('../zod/user_sccheck')
const User = require('../models/user_model')

const validateUserSignup = async(req,res,next) => {
    const { username ,email , password , role } = req.body
    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(400).json("User already exists!");
    const result = await validateUserSignupSchema.safeParse({
        username: username,
        email: email,
        password: password,
        role: role
    })
    if(!result.success){
        return res.status(400).json({ message: "Error validating signup user!" });
    }
    next()
}

const validateUserLogin = async(req,res,next) => {
    const { email , password } = req.body
    
    const result = await validateUserLoginSchema.safeParse({
        email: email,
        password: password
    })
    if(!result.success){
        return res.status(400).json({ message: "Error validating login user!" });
    }
    next()
}

module.exports = {
    validateUserSignup,
    validateUserLogin
}