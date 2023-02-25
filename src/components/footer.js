import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-fuchsia-900 text-fuchsia-200 min-w-full px-8 py-6 border-t-4 border-white
                        sm:px-16 sm:py-12 max-sm:text-xs
                        lg:px-32 lg:py-16'>
      <div className='grid grid-cols-2 gap-6
                      sm:grid-cols-3 sm:gap-6
                      xl:grid-cols-5
                      2xl:gap-10
                      '>
        <div>
          <div className='text-white mb-2 sm:mb-4 lg:mb-6 2xl:mb-8 font-semibold text-lg sm:text-xl 2xl:text-2xl'>
            COMPANY</div>
          About us<br />
          Blogs
        </div>
        <div>
          <div className='text-white mb-2 sm:mb-4 lg:mb-6 2xl:mb-8 font-semibold text-lg sm:text-xl 2xl:text-2xl'>
            CUSTOMER</div>
          Terms of use<br />
          Privacy Policy<br />
          Cancellation & refund<br />
          FAQs<br />
          Refer & Earn
        </div>
        <div>
          <div className='text-white mb-2 sm:mb-4 lg:mb-6 2xl:mb-8 font-semibold text-lg sm:text-xl 2xl:text-2xl'>
            KNOW US</div>
          Menu<br />
          My Cart<br />
          Login<br />
          Signup
        </div>
        <div>
          <div className='text-white mb-2 sm:mb-4 lg:mb-6 2xl:mb-8 font-semibold text-lg sm:text-xl 2xl:text-2xl'>
            REACH US</div>
          +(91) 1234567891<br />
          +(91) 1234567891<br />
          info@digiklug.com
        </div>

        <div className='hidden sm:block'>
          <div className='text-white mb-2 sm:mb-4 lg:mb-6 2xl:mb-8 font-semibold text-lg sm:text-xl 2xl:text-2xl'>
            SUBSCRIBE</div>
          <input type='text' placeholder="Enter Email Address"
            className='bg-fuchsia-700 text-white p-3 mb-6 w-full max-w-[12rem] h-8 border-2 border-white rounded-sm placeholder:text-white
                      sm:h-10 lg:h-12 2xl:w-4/5' />
          <button type='submit'
            className='w-full max-w-[12rem] h-8 border-2 border-white rounded-full hover:bg-white hover:text-fuchsia-700
                      sm:h-10 lg:h-12 2xl:w-4/5'>Subscribe</button> <br />
        </div>
      </div>

      <div className='mt-6 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20'>
      <span>
        Homemade food AndheriHomemade food BKC Homemade food KurlaHomemade food Mumbai Homemade food AndheriHomemade food BKC Homemade food KurlaHomemade food Mumbai  
      </span>
      <span className='hidden sm:inline'>
        Homemade food AndheriHomemade food BKC Homemade food KurlaHomemade food Mumbai Homemade food AndheriHomemade food BKC Homemade food KurlaHomemade food Mumbai  
      </span>
      <span className='hidden md:inline'>
        Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri 
      </span>
      <span className='hidden lg:inline'>
        Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri 
      </span>
      <span className='hidden xl:inline'>
        Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri 
      </span>
      <span className='hidden 2xl:inline'>
        Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri Homemade food Andheri 
      </span>
      </div>
      
    </footer>
  )
}
