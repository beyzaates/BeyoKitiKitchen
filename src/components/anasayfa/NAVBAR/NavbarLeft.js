import React from 'react'
import { Link } from 'react-router-dom'


const NavbarLeft = () => {
  return (
    <div className='flex items-center gap-4' >
       <Link to="/"><img  className='w-[400px] h-[150px]  ' src='logom.png'  /> </Link> 
       <div className='text-5xl' > Beyo Kiti Kitchen </div>
     
       
    </div>
  )
}

export default NavbarLeft