import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth } from "../../firebase.config";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up: ", user)
        }).catch((error) => {
            console.log(error.code, error.message)
        })

    }

    return(
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input 
                type="email" 
                placeholder="Enter your email" 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                ></input>
                <input 
                type="password" 
                placeholder="Enter your password" 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp