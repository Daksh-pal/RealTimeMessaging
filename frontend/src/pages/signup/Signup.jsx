import GenderCheckbox from "./GenderCheckbox";
import axios from 'axios';
import { useState } from "react";
import {Link} from 'react-router-dom'

const Signup = ()=>{

    const [fullname,setFullname] = useState("");
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [gender,setGender] = useState("");



const handleSignup = async(e) =>{
    e.preventDefault();

    const currentGender = gender;

    try {
        const response = await axios.post("http://localhost:3000/api/auth/signup", {
          fullname,
          username,
          password,
          confirmPassword,
          gender: currentGender,
        });
        if (response.status === 201) {
          console.log("Signup successful:", response.data);
        } else {
          throw new Error("Signup failed with status: " + response.status);
        }
      } catch (error) {
        console.error("Signup error:", error.message);
      }
}
    

    return <div className="flex items-center justify-center flex-col mx-auto min-w-96">
        <h1 className="text-4xl text-gray-800 font-bold">Sign Up</h1>
        <div className="w-full p-6 flex-col flex">
            <input type="text" placeholder="Full name" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setFullname(e.target.value)}} />
            <input type="text" placeholder="Username" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setUsername(e.target.value)}}/>
            <input type="password" placeholder="Password" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setPassword(e.target.value)}}/>
            <input type="password" placeholder="Confirm Password" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setConfirmPassword(e.target.value)}}/>

            {/* GenderCheckbox is the checkbox  */}
            <GenderCheckbox onGenderChange={(checkedGender)=>{setGender(checkedGender)}}/>
            
            

            <button type="button" onClick={handleSignup} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 bg-gray-700 hover:bg-gray-900 ">Signup</button>
            <Link to='/login' className="text-gray-800 text-sm text-center">Already have an account.</Link>
        </div>
    </div>
}
export default Signup;
