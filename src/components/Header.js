import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';





import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const user = useSelector(store =>store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showGptSearch =useSelector(store=>store.gpt.showGptSearch)

  
  
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      
    })
    .catch((error)=>{
      
    })
    }



    useEffect(()=>{

    const unsubscribe=  onAuthStateChanged(auth,(user)=>{
        if(user){
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
          );
  
          navigate("/browse")
          
  
  
        }else {
  
          //User is signed out
          dispatch(removeUser())
          navigate("/")
          
        }
      })
      // Unsubscribe when component unmounts
      return ()=>unsubscribe();
    },[])
   
   const  handleGptSearchClick =()=>{
    // Toggle GPT Search button
    dispatch(toggleGptSearchView())
   }
  

   const hangleLanguageChange=(e)=>{

    dispatch(changeLanguage(e.target.value))
    
   }
  return (
  <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10  flex justify-between '>
    <img
      className='w-44'
      src={LOGO}
      alt='logo'
    />
   { (user && <div className='flex p-2'>   
      {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={hangleLanguageChange}>
        {
          SUPPORTED_LANGUAGES.map(lang=> <option key={lang.indentifier} value={lang.indentifier}>{lang.name}</option>)
        }
        


      </select> )}
      <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
      onClick={handleGptSearchClick}

      
      >{showGptSearch ? "Home Page" :"GPT Search"} </button>
      <img
      className='w-12 h-12'
      alt='usericon'
      src={user?.photoURL}
      />
      <button 
      className='font-bold text-white' 
      onClick={handleSignOut}
      >(Sign Out)</button>
    </div>)}
  </div>
  )
}

export default Header