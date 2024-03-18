import jwt from 'jsonwebtoken'

const generateCookieAndToken = (userId , res)=>{
    const token = jwt.sign({userId} , process.env.JWTKEY,{
        expiresIn:'1d'
    });
    res.cookie("jwt",token,{
        httpOnly:true,
        sameSite:"strict",
    });

};
export default generateCookieAndToken; 