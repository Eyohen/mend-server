const jwt=require('jsonwebtoken')
const User = require('./models/user')


const verifyToken = async(req,res,next)=>{
    // console.log(token)
    console.log(req.headers)
    const token = req.headers?.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
   jwt.verify(token,process.env.SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }
        const user = await User.findById(data._id)
        if(!user) {
            return res.status(403).json({message:"Not authorized"})
        }
        req.user = user

        req.userId=data._id
       
        // console.log("passed")
        
        next()
    })
}

module.exports=verifyToken