import React from 'react'
import Logo from '../assets/logo.png'
import Button from './Button'

const NavBar = () => {
  return (
    <div>
    <div className='bg-[#000000] w-vw h-18 flex justify-between items-center px-10'>
        <img src={Logo} alt='DcodeBlock Logo' className='w-[12%] h-12'/>
        <Button textContent='Sign in'/>
    </div>
    <div className='bg-slate-800'>
        <svg xmlns='http://www.w3.org/2000/svg' width="100%" height="auto" viewBox='0 0 1440 6' fill='none'>
            <path d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z"
            fill='#B026FF' fillOpacity="0.5"/>
        </svg>
    </div>
    </div>
  )
}

export default NavBar