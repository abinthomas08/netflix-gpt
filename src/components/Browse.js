import React from 'react'
import Header from './Header'
import { auth } from '../utils/firebase'


import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  
  return (
    <div><Header/></div>
  )
}

export default Browse