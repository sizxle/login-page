import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from "../../firebase" ;
import loginImp from '../../assets/login4.jpeg'



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        // console.log(userCredential)
      }).catch(error=>{
        console.log(error)
      })
    }
  return (
    <div className="relative w-full h-screen bg-zinc-900/90 ">
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImp} alt="BACKGROUND" />

        <div className='flex justify-center items-center h-full relative'>
          <form onSubmit={signIn} className='max-w-xs w-full mx-auto bg-white p-8 max'>
              <h1 className='text-4xl font-bold text-center'>YGF</h1>
              <div className='flex flex-col mb-4'>
                <label>E-MAIL</label>
                <input
                  className='border relative bg-gray-100 p-2'
                  type="email"
                  placeholder='Enter your Email'
                  value={email}
                  onChange={(e=>setEmail(e.target.value))}
                />
              </div>
              <div className='flex flex-col mb-1'>
                <label>Password</label>
                <input
                  className='border relative bg-gray-100 p-2'
                  type="password"
                  placeholder='Enter your Password'
                  value={password}
                  onChange={(e=>setPassword(e.target.value))}
                />
              </div>
              <button className='w-full py-3 mt-8 bg-red-500 relative hover:bg-red-900 text-white' type="submit">Sign in</button>
              <p className='flex items-center mt-8 relative'><input className='mr-2' type="checkbox" />Remember Me</p>
              <p className='mt-8 text-center relative'>Not a Member? Sign Up now</p>
          </form>
        </div>
    </div>
  )
}

export default SignIn