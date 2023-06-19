import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from "../../firebase" ;



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        console.log(userCredential)
      }).catch(error=>{
        console.log(error)
      })
    }
  return (
    <div className="sign-in-container">
        <form onSubmit={signIn}>
            <h1>Log in </h1>
            <input
            type="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e=>setEmail(e.target.value))}
            />
            <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e=>setPassword(e.target.value))}
            />
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}

export default SignIn