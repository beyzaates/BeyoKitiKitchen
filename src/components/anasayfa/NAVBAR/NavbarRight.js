import React from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'



const NavbarRight = () => {
  return (
    <div className='flex items-center gap-10'>
      <Link to="https://www.instagram.com/"><img  className='w-[40px] h-[40px]  '  src='ins.png'  /> </Link>
      <Link to="https://www.facebook.com/"><img  className='w-[40px] h-[40px]  ' src='face.webp'  /> </Link> 
      <Link to="https://www.google.com/intl/tr/gmail/about/"><img  className='w-[40px] h-[40px]  ' src='mail.webp'  /> </Link>  
         <BsFillSuitHeartFill size={40}  className='relative'/>  
         
       
       
   
    </div>
  )
}

export default NavbarRight