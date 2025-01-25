const  { getUser } = require('../service/auth')

const checkAuthentication = (req,res,next) => {
    const tokenCookie = req.cookies?.token
    req.user = null
    if(!tokenCookie) return next()
        
    const user = getUser(tokenCookie )
    req.user = user
    next()
}

const restrictTo = (roles) => {
    return (req,res,next) => {
        console.log(roles);
        
        console.log(req.user.role);
        
        if(!req.user) return res.redirect('/login')

        if(!roles.includes(req.user.role)) return res.end("You are unauthorised")

        next()
    }
}

module.exports = { checkAuthentication, restrictTo }


