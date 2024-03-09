import axios from 'axios';
import { useState } from "react";
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';
import { userAuthContext } from '../../contextAndHooks/AuthContext';


const Signup = ()=>{

    const [fullname,setFullname] = useState("");
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword , setConfirmPassword] = useState("");
    const [gender,setGender] = useState("");
    const { setAuthUser} = userAuthContext();

const handleSignup = async(e) =>{
    e.preventDefault();

    if(password!=confirmpassword){
      toast.error("Passwords do not match");
    }

    else if(!gender){
      toast.error("Please choose valid Gender")
    }
    else{
      try {
        const response = await axios.post("http://localhost:3000/api/auth/signup", {
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 201) {
                    
          console.log("Signup successful:", response.data);
          toast.success("Sign up successfully");
        }
        else {
          throw new Error("Signup failed with status: " + response.status);
        }
          localStorage.setItem("user",JSON.stringify(response.data));        
          setAuthUser(response.data);

      } catch (error) {
        console.error("Signup error:", error.message);


        toast.error("Invalid Credentials");
      }    
    }
}

    return <div className="flex items-center justify-center flex-col mx-auto min-w-96">
        <h1 className="text-4xl text-gray-800 font-bold">Sign Up</h1>
        <div className="w-full p-6 flex-col flex">
            <input type="text" placeholder="Full name" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setFullname(e.target.value)}} />
            <input type="text" placeholder="Username" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setUsername(e.target.value)}}/>
            <input type="password" placeholder="Password" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setPassword(e.target.value)}}/>
            <input type="password" placeholder="Confirm Password" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setConfirmPassword(e.target.value)}}/>

            
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="bg-white input input-bordered w-full max-w-xs my-1 text-gray-800">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <button type="button" onClick={handleSignup}  className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 bg-gray-700 hover:bg-gray-900 ">Signup</button>
            <Link to='/login' className="text-gray-800 text-sm text-center">Already have an account.</Link>
        </div>
    </div>
}
export default Signup;
