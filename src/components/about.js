import React from 'react'
import IMAGES from '../images';
import '../styles/App.css'; 

export default function About() {
  return (
    <section className='px-8 sm:px-16 lg:px-32 pt-3 sm:pt-5 lg:pt-7'>

    {/* GRID DEFINITION */}
    <div className='grid grid-rows-3 
                    md:grid-rows-1 md:grid-cols-3 md:max-lg:gap-20 
                    lg:grid-cols-4'>
        
        {/* ABOUT DETAILS SECTION */}
        <div className='px-2 order-2 row-span-2
                        md:order-1 md:row-span-1 md:col-span-2
                        lg:py-6 
                        xl:py-10'>
            {/* Details wrapper */}
            <div className='sm:max-md:px-10 max-md:text-center'>
                <div className=''>
                    <h2 className='my-4 md:my-2 font-semibold text-2xl sm:text-3xl xl:text-4xl'>
                        About
                    </h2>
                </div>
                <div className=''>
                    <h4 className='mb-4 md:mb-6 text-xs sm:text-sm xl:text-base 2xl:text-lg'>
                        Do you miss your home food, the taste that you have grown up on? Your search ends here.
                    </h4>
                </div>
                <div className=''>
                    <h4 className='mb-4 md:mb-6 text-xs sm:text-sm xl:text-base 2xl:text-lg'>
                    At name, you choose your favorite delicacies from your native cuisine and we will get it delivered right at your doorstep.
                    These dishes are prepared by our home chefs who specialize in regional cuisines. Enjoy sumptuous homemade food with name, a taste of home.
                    </h4>
                </div>      
            </div>
        </div>

        {/* Empty space */}
        <div className='hidden lg:order-2 lg:block'></div>

        <div className='about-img bg-contain bg-no-repeat bg-center order-1 md:order-2 lg:order-3'>
        </div>
    </div>

    </section>
  )
}
