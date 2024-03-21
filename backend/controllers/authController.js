import User from "../models/userModel.js";
import generateCookieAndToken from "../utils/generateToken.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs"

export const signup = async (req,res) =>{
    try {
        const {fullname , username , password , confirmpassword , gender} = req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error : "Passwords don't match"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({message : "User already exists"})
        }

        // Password Hashing
        const hashedPassword = await bcrypt.hash(password,10);

        // Setting Profile pic according to Gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === "Male" || gender === "male"?boyProfilePic:girlProfilePic,

        })
        if(newUser){
            await newUser.save();

            // Generate cookie and set token 
            generateCookieAndToken(newUser._id,res);

            res.status(201).json({
            _id : newUser._id,
            fullname: newUser.fullname,
            username : newUser.username,
            profilePic : newUser.profilePic
            });
        }
        else {
			return res.status(400).json({ error: "Invalid user data" });
		}


    } catch (err) {
        console.log("Error in signup ->",err.message)
        return res.status(500).json({ error: `Internal server error: ${err.message}` });

    }
};

export const login = async (req,res) =>{
    try {
        const {username , password} = req.body;
        const user = await User.findOne({username});
        const checkPassword = await bcrypt.compare(password , user?.password || "");

        if(!user || !checkPassword){
            return res.status(403).json({message:"Invalid Username or Password"})
        }

        generateCookieAndToken(user._id,res);

        res.status(201).json({
            _id : user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic,
        });

    } catch (err) {
        console.log("error in login ->",err)
        return res.status(500).json({err:"Internal server error"})
    }
}

export const logout =(req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (err) {
        console.log("Error while logging out ->",err);
        res.status(500).json({message :" Internal server error"})
    }
}