import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUp = (e) =>{
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up: ", user);
            navigate("/");
        }).catch((error) => {
            console.log(error.code, error.message)
        })

    }

    return(
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1 className="mt-10 text-2xl font-bold">Create Account</h1>
                <div className=" flex flex-col items-center">
                <input 
                type="email" 
                placeholder="Enter your email" 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    className="block w-80 p-2 border rounded-md text-black"
                ></input>
                <input 
                type="password" 
                placeholder="Enter your password" 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    className="block w-80 p-2 border rounded-md text-black "
                ></input>
                </div>
                <button 
                type="submit"
                className="py-2 px-4 rounded-md hover:bg-blue-400
                 hover:text-white"
                >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp