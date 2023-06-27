import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from "../../firebase" ;
import loginImp from '../../assets/login4.jpeg'



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const signUp=(e)=>{
      e.preventDefault();
      if(password!==password_confirm){
        return setError('Passwords do not match!');
      }
      createUserWithEmailAndPassword(auth,email,password);
    }
  return (
    <div className="relative w-full h-screen bg-zinc-900/90 ">
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImp} alt="BACKGROUND" />

    <div className='flex justify-center items-center h-full relative'>
      <form onSubmit={signUp} className='max-w-xs w-full mx-auto bg-white p-8 max'>
          <h3 className='text-4xl font-bold text-center'>Create Membership Account</h3>
          <div className='flex flex-col mb-4'>
            <label>E-MAIL</label>
            <input
              className='border relative bg-gray-100 p-2'
              type="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e=>setEmail(e.target.value))}
              required
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
          <div className='flex flex-col mb-1'>
            <label>Password Confirmation</label>
            <input
              className='border relative bg-gray-100 p-2'
              type="password"
              placeholder='Re-Enter your Password'
              value={password_confirm}
              onChange={(e=>setPasswordConfirm(e.target.value))}
            />
          </div>
          <button className='w-full py-3 mt-8 bg-red-500 relative hover:bg-red-900 text-white' type="submit" disabled={loading}>Join</button>
          <p className='mt-8 text-center relative'>Already a Member? Log In</p>
      </form>
    </div>
</div>
  )
}

export default SignUp