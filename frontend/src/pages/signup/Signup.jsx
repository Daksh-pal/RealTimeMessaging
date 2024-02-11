import GenderCheckbox from "./GenderCheckbox";

const Signup = ()=>{

function handleSignup(){
    // fetch('http://localhost:3000/api/auth/signup',)
}
    

    return <div className="flex items-center justify-center flex-col mx-auto min-w-96">
        <h1 className="text-4xl text-lime-800 font-bold">Register now</h1>
        <div className="w-full p-6 flex-col flex">
            <input type="text" placeholder="Full name" className=" bg-white input input-bordered w-full max-w-xs my-1" />
            <input type="text" placeholder="Username" className=" bg-white input input-bordered w-full max-w-xs my-1" />
            <input type="password" placeholder="Password" className=" bg-white input input-bordered w-full max-w-xs my-1" />
            <input type="password" placeholder="Confirm Password" className=" bg-white input input-bordered w-full max-w-xs my-1" />

            <GenderCheckbox/>
            
            <div className="text-black flex justify-center text-sm mb-1">Already have an account.
                <a href="#" className="font-bold">Login </a>
            </div>

            <button type="button" onClick={handleSignup()} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 bg-green-800 hover:bg-green-900 ">Signup</button>
        </div>
    </div>
}
export default Signup;
