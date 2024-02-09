import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protectRoute=async (req,res,next)=>{
try {
    const token = req.body.jwt;
    if(!token){
        return res.status(401).json({message: "Unauthorized, No token detected"});
    }

    const decoded = jwt.verify(token,process.env.JWTKEY);
    if(!decoded){
        return res.status(401).json({message: "Unauthorized, Invalid token detected"});
    }
    const user = await User.findById(decoded.userId).select("-password");
    if(!user)
    {
        return res.status(401).json({message: "No user found"});
    }
    req.user = user;
    next();

} catch (err) {
    console.log("Error in protectroute middleware", err.message);
    res.status(500).json({error :"Internal server error "});
}
}
export default protectRoute