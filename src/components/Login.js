import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm,setIsSignInForm] =useState(true);
  const toggleSingUp=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div  >
      <Header/>
     <div className='absolute'>
     <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/80a8277e-14eb-4192-83f7-45c27cd0652b/US-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_99b9a7c9-7791-4a48-b335-09e8ee246500_medium.jpg'
      alt='logo'
    />
     </div>
     <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' > 
      <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
      <input type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-700' />
      <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700' />
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg '>{isSignInForm ? "Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSingUp }>{isSignInForm ? "New to Netflix? Sign Up Now":"Already a registered? Sign In Now"} </p>
     </form>
    </div>
  )
}

export default Login