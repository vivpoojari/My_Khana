import React from 'react'
import IMAGES from '../images';
import '../styles/App.css'; 


export default function Downloads() {
  return (
    <section className='px-8 sm:px-16 lg:px-32 max-md:py-10'>

    {/* GRID DEFINITION */}
    <div className='grid grid-rows-2 
                    md:grid-rows-1 md:grid-cols-2'>
        
        {/* ABOUT DETAILS SECTION */}
        <div className='px-2 order-2
                        md:order-1
                        md:py-16
                        xl:py-20'>
            {/* Details wrapper */}
            <div className='sm:max-md:px-10 max-md:text-center'>
                <div className=''>
                    <h2 className='my-4 md:my-2 font-semibold text-2xl sm:text-3xl xl:text-4xl'>
                        Restaurants in <br />your pocket
                    </h2>
                </div>
                <div className=''>
                    <h4 className='mb-4 md:mb-6 text-xs sm:text-sm xl:text-base 2xl:text-lg'>
                        Order from your favorite restaurants and track on-the-go, with the all-new app
                    </h4>
                </div>
                <div className=''>
                    <img src={IMAGES.downloads} className='max-h-10 w-auto md:h-16 2xl:h-20 max-md:mx-auto' />
                </div>      
            </div>
        </div>

        <div className='phones-img bg-contain bg-no-repeat bg-center md:bg-right order-1 md:order-2'>
        </div>
    </div>

    </section>
  )
}
