import React, { useState } from "react";
import {Link} from 'react-router-dom'
import toast from "react-hot-toast";
import { useAuthContext } from "../../contextAndHooks/AuthContext.jsx";
const Login = () =>{

const [username , setUsername] = useState("");
const [password , setPassword] = useState("");
const {setAuthUser} = useAuthContext();


const handleLogin = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.status === 201) {
          console.log("Login successful:", data);
          toast.success("Logged in successfully");

          localStorage.setItem("user", JSON.stringify(data));
          setAuthUser(data);
      } else {
          throw new Error("Login failed with status: " + response.status);
      }
  } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Invalid credentials");
  }
};



    return <div className="flex items-center justify-center flex-col mx-auto min-w-96">
        <h1 className="text-4xl text-gray-800 font-bold">Login</h1>
        <div className="w-full p-6 flex-col flex">
            
            <input type="text" placeholder="Username" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setUsername(e.target.value)}} />
            <input type="password" placeholder="Password" className=" bg-white input input-bordered w-full max-w-xs my-1 text-gray-800" onChange={e=>{setPassword(e.target.value)}}/>

         

            <button type="button" onClick={handleLogin} className="text-white font-medium rounded-lg text-sm px-5 py-2.5  my-3 bg-gray-700 hover:bg-gray-900 ">Login</button>
            <Link to='/signup' className="text-gray-800 text-center text-sm">Don't have an account?</Link>
        </div>
    </div>
    }

export default Login



