import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"

import {useSelector,useDispatch} from "react-redux"
import { addUser } from '../utils/userSlice';
import { USER_AVTARL } from '../utils/constants';

const Login = () => {

  const [isSignInForm,setIsSignInForm] =useState(true);
  const [errorMessage,seterrorMessage]=useState(null)
  const dispatch = useDispatch();
  

  const user = useSelector(store=>store.user)
  const name = useRef(null);
  const email = useRef(null);
  const password=useRef(null);
  const toggleSingUp=()=>{
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick =()=>{
    // validate the form data 
    const message =  checkValidData(email.current.value,password.current.value);
    seterrorMessage(message);

    if(message) return;

    //Sign In Sign Up Logic

    if(!isSignInForm){
      
      // Sign UP logic
      createUserWithEmailAndPassword(
        auth, email.current.value,
         password.current.value)

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user,{
            displayName:name.current.value,
            photoURL:{USER_AVTARL}
          }).then(()=>{

            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        
         
           
          }).catch((error)=>{
            //An error occured
            seterrorMessage(error.message)
          })
          // console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode +" - "+ errorMessage)
      // ..
  });

    }
    else{

      // Sign in logic

      signInWithEmailAndPassword(
        auth, email.current.value,
         password.current.value)

        .then((userCredential) => {
          // Signed In 
          const user = userCredential.user;
         
          // console.log(user)
          
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode +" - "+ errorMessage)
          alert(errorMessage)
         
      // ..
  });

    }


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




     <form 
     onSubmit={(e)=>e.preventDefault()}
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' > 


      <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}

      <input
      ref={email}
       type="text"
        placeholder='Email address' 
        className='p-4 my-4 w-full bg-gray-700' />

      <input
      ref={password}
       type='password' 
       placeholder='password'
        className='p-4 my-4 w-full bg-gray-700' />
      
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

      <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>

      <p className='py-4 cursor-pointer' onClick={toggleSingUp }>{isSignInForm ? "New to Netflix? Sign Up Now":"Already a registered? Sign In Now"} </p>
     </form>
    </div>
  )
}

export default Login