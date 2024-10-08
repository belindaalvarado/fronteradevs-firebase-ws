import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth } from "../../firebase.config";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in: ", user)
        }).catch((error) => {
            console.log(error.code, error.message)
        })

    }

    return(
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log In to you Account</h1>
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
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignIn