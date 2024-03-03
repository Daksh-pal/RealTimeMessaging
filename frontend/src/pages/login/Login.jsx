import React from "react";
const Login = () =>{

    function handleLogin(){

    }

    return <div className="flex items-center justify-center flex-col mx-auto min-w-96">
        <h1 className="text-4xl text-gray-800 font-bold">Login</h1>
        <div className="w-full p-6 flex-col flex">
            
            <input type="text" placeholder="Username" className=" bg-white input input-bordered w-full max-w-xs my-1" />
            <input type="text" placeholder="Password" className=" bg-white input input-bordered w-full max-w-xs my-1" />

            <div className="text-gray-800 flex justify-center text-sm mb-1">Don't have an account.
                <a href="#" className="font-bold">Signup </a>
            </div>

            <button type="button" onClick={handleLogin()} className="text-white font-medium rounded-lg text-sm px-5 py-2.5  my-3 bg-gray-700 hover:bg-gray-900 ">Login</button>
        </div>
    </div>
}
export default Login;