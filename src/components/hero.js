import React from 'react'
import IMAGES from '../images'; 
import '../styles/App.css';


export default function Hero() {
  return (
    <section name="Hero">
    {/* <div className='flex flex-col min-w-full md:flex-row'> */}
    {/* GRID DEFINE */}
    <div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
        <div className='px-2 py-10 order-2 lg:py-16 lg:order-1 xl:py-28 sm:px-0'>
            {/* Container */}
            <div className='max-w-[22rem] sm:min-w-[30rem] mx-auto'>
                <div><img src={IMAGES.logo} className='mx-auto w-20 my-6 sm:w-24 sm:my-8' /></div>
                <div><h1 className='mb-2 font-bold text-3xl sm:text-4xl xl:text-5xl max-lg:text-center'>Time to order food</h1></div>
                <div><h2 className='mb-4 font-bold text-2xl sm:mb-6 xl:text-3xl max-lg:text-center'>taste for everyone</h2></div>
                <div>
                <input type='text' placeholder='Select your delivery area/location' 
                    className='w-full h-12 sm:h-16 mb-3 p-5 text-gray-400 border-2 border-gray-200 rounded-full shadow-md shadow-gray-200' />
                </div>
                <div className='font-semibold text-center'>Currently available at select locations in Mumbai</div>
            </div>
        
        {/* WALLPAPER */}
        </div>  
        <div className='banner bg-cover bg-center order-1 lg:order-2'>
        </div>
    </div>
    </section>
  )
}
