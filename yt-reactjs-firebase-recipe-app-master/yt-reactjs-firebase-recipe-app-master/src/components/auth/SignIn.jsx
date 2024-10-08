import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in: ", user);
            navigate("/"); 
        }).catch((error) => {
            console.log(error.code, error.message)
        })

    }

    return(
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1 className="mt-10 text-2xl font-bold">Log In to your Account</h1>
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
                    className="block w-80 p-2 border rounded-md text-black"
                ></input>
                </div>
                <button 
                type="submit"
                className="py-2 px-4 rounded-md hover:bg-blue-400 hover:text-white"
                
                >Log In</button>
            </form>
        </div>
    )
}

export default SignIn