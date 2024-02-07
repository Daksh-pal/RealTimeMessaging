import User from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const signup =async (req,res) =>{
    try {
        const {fullname , username , password , confirmpassword , gender} = req.body;
        if(password!=confirmpassword)
        {
            return res.status(400).json({error : "Passwords don't match"})
        }
        const user = await User.findOne({username})
        if(user)
        {
            res.status(400).json({message : "User already exists"})
        }

        // Password Hashing
        
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Setting Profile pic according to Gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password : hashedPassword,
            confirmpassword,
            gender,
            profilePic: gender==="male"?boyProfilePic:girlProfilePic,

        })

        await newUser.save();
        res.status(201).json({
            _id : newUser._id,
            fullname: newUser.fullname,
            username : newUser.username,
            profilePic : newUser.profilePic
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({err:"Internal server error"})
    }
}


export const login = (req,res) =>{
    console.log("Logged in")
}

export const logout = (req,res) =>{
    console.log("Logged out")
}


