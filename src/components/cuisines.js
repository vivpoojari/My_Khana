import React from 'react'
import IMAGES from '../images'; 
import '../styles/App.css';

export default function Cuisines() {
  return (
    <div>
    <section className='bg-gray-100 px-8 sm:px-16 lg:px-32 py-4 sm:py-7 lg:py-9'>
        <div><h2 className='md:mb-2 font-semibold text-2xl sm:text-3xl xl:text-4xl'>Our Range of Cuisines</h2></div>
        <div><h4 className='mb-4 md:mb-6 text-xs sm:text-sm xl:text-base 2xl:text-lg'>
            Explore curated lists of restaurants, cafes, pubs and bars in Mumbai, based on trends
        </h4></div>
        <div className='grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-2 sm:gap-6 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8'>
            <div><img src={IMAGES.card1} className='cards rounded-lg' /></div>
            <div><img src={IMAGES.card2} className='cards rounded-lg' /></div>
            <div><img src={IMAGES.card3} className='cards rounded-lg' /></div>
            <div><img src={IMAGES.card4} className='cards rounded-lg' /></div>
        </div>
    </section>

    <section className='px-8 sm:px-16 lg:px-32 py-4 sm:py-7 lg:py-9'>
    <div><h2 className='mb-2 md:mb-4 2xl:mb-6 font-semibold text-2xl sm:text-3xl xl:text-4xl'>Offer for you</h2></div>
        <img src={IMAGES.ad} className='w-full' />
    </section>
    </div>
  )
}
