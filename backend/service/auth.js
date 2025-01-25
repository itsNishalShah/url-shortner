const jwt = require('jsonwebtoken')
const JWT_SECRET = "Nal319$23md$#@Q"
function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    },JWT_SECRET)
}

function getUser(token){
    if(!token) return null
    return jwt.verify(token,JWT_SECRET)
}

module.exports = {
    setUser,
    getUser
}