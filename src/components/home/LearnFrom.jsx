import React from 'react'

const LearnFrom = () => {
  return (
    <div className='pb-[60px] pt-[109px] max-lg:pt-24 max-md:py-16 max-sm:py-12 '>
        <h1 className='text-[80px] text-center uppercase font-bold font-sohne leading-86 '>Learn from us.</h1>
        <p className='leading-[133%] text-[15px] text-center font-maisonRegular mt-[13px] '>Digital marketing resources from Venveo to help you grow.</p>
        <button className='flex mx-auto gap-2.5 items-center mt-9'>
        <p className='font-semibold font-maisonMedium text-[15px] leading-[133%] '>See All</p>
        <img src="./assets/images/svg/learn-more.svg" alt="see more" />
        </button>
        <div className="relative max-w-[1322px] mx-auto mt-[81px] max-xl:mt-20 max-lg:mt-16 max-md:mt-12 max-sm:mt-8 ">
          <img className='max-md:min-h-[565px] object-cover' src="./assets/images/webp/learn-from.webp" alt="learn from" />
          <img src="./assets/images/webp/made-for-brands.webp" alt="made for brands" className='absolute right-[5%] top-[-4%] max-w-[107px]' />
          <div className='absolute bottom-[31px] max-sm:max-w-[339px] max-sm:left-[17px] left-[29px]'>
              <div className="bg-white  p-[35px_28px_31px_29px] rounded-[25px]">
                <p className='uppercase text-[15px] font-semibold font-maisonMedium text-ball-blue leading-[133%] '>guides</p>
                <h2 className='max-w-[325px] text-3xl leading-[100%] text-black font-light font-maisonLight mt-[15px] max-md:text-[28px] max-sm:text-2xl'>Marketing to Contractors and <span className='block'>Installers:</span>The Ultimate Guide</h2>
                <p className='max-w-[315px] font-normal font-maisonRegular mt-[15px] text-[15px] leading-[133%] '>Understanding the process and maximize the opportunities</p>
                <button className='flex items-center gap-2.5 mt-[15px] text-[15px] font-semibold font-maisonMedium leading-[133%]'>
                  Read more <img src="./assets/images/svg/learn-more.svg" alt="learn-more" />
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LearnFrom
