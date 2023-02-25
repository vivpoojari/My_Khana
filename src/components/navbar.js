import React from 'react'
import { useState } from 'react';

import IMAGES from '../images'; 


export default function Navbar() {
  let [navState, setNavState] = useState({toggle: false})

  function clicked(){
    setNavState(prev => {
      return {
        toggle: !(prev.toggle)
      }
    })
  }

  return (
    <div className='relative container min-w-full py-4 px-8 shadow-md shadow-gray-300 lg:px-20 xl:px-36 2xl:text-lg'>
      {/* Flexbox container */}
      <div className='flex items-center justify-between font-bold'>
        {/* Logo */}
        {/* <span className='text-3xl'>LOGO</span> */}
        <img src={IMAGES.logo} className='max-h-6 md:hidden' />
        <div className='hidden md:flex items-center h-8 space-x-3'>
          <div><img src={IMAGES.location} className='h-5' /></div>
          <div className='hover:text-red-600'>Mumbai East</div>
          <div><img src={IMAGES.down} className='h-3' /></div>
        </div>

        <div>
        {/* Nav buttons */}
        <div className='hidden space-x-6 sm:flex items-center justify-center md:space-x-8'>
          <div className='hover:text-red-600'>Menu</div>
          <div className='flex items-center h-8 space-x-2'>
            <div><img src={IMAGES.mycart} className='h-4' /></div>
            <div className='hover:text-red-600'>My Cart</div>
          </div>
          <div className='flex justify-center items-center py-1 px-6 
              bg-transparent text-red-600 border-2 border-red-600 rounded-md shadow-md shadow-gray-200
              hover:bg-red-600 hover:text-white'>
            Login
          </div>
          <div className='flex justify-center items-center py-1 px-4
              bg-transparent text-red-600 border-2 border-red-600 rounded-md shadow-md shadow-gray-200
              hover:bg-red-600 hover:text-white'>
            Sign up
          </div>
        </div>

        {/* Hamburger Button */}
        <div>
        <div className='sm:hidden focus:outline-none' onClick={clicked}>
          <img src={IMAGES.menu} className='max-h-6 md:hidden' />
        </div>

        {/* Mobile menu */}
        {navState.toggle && <div className='sm:hidden'>
          <div className='absolute flex flex-col items-center self-end
            pt-2 my-10 w-3/5 space-y-3 bg-white sm:w-auto
            sm-self-center right-4 drop-shadow-md'>
              <div className='border-b-2 w-full text-center pb-2'><a href='' className='hover:text-red-600'>Menu</a></div>
              <div className='border-b-2 w-full text-center pb-2'><a href='' className='hover:text-red-600'>My Cart</a></div>
              <div className='border-b-2 w-full text-center pb-2'><a href='' className='hover:text-red-600'>Login</a></div>
              <div className='border-b-2 w-full text-center pb-2'><a href='' className='hover:text-red-600'>Signup</a></div>
          </div>
        </div>}
        </div>
      </div>
      </div>
    </div>
  )
}
