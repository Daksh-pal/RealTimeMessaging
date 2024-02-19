import User from "../models/userModel.js";

export const getUsersforSidebar = async (req,res) => {
    try {
        // console.log("Till user controller")
        const loggedInUserId = req.user._id;  // our id
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); //this will filter the user and avoid our id from all users
        res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getUsersforSidebar ->",error);
        res.status(500).json({error: "Internal server error"});
    }
}