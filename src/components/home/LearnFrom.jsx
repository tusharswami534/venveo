import React from 'react'

const LearnFrom = () => {
  return (
    <div className='pb-[60px] pt-[109px]'>
        <h1 className='text-[80px] text-center font-bold font-sohne leading-86 '>Learn from us.</h1>
        <p className='leading-[133%] text-[15px] text-center font-maisonRegular mt-[13px] '>Digital marketing resources from Venveo to help you grow.</p>
        <button className='flex mx-auto gap-2.5 items-center mt-9'>
        <p className='font-semibold font-maisonMedium text-[15px] leading-[133%] '>See All</p>
        <img src="./assets/images/svg/learn-more.svg" alt="see more" />
        </button>
        <div className="relative max-w-[1322px] mx-auto mt-[81px] ">
          <img src="./assets/images/webp/learn-from.webp" alt="learn from" />
          <img src="./assets/images/webp/made-for-brands.webp" alt="made for brands" className='absolute right-[5%] top-[-4%] max-w-[107px]' />
          <div className='absolute bottom-[31px] left-[29px]'>
              <div className="bg-white  p-[35px_28px_31px_29px] rounded-[25px]">
                <p className='uppercase text-[15px] font-semibold font-maisonMedium text-ball-blue leading-[133%] '>guides</p>
                <h2 className='max-w-[325px] text-3xl leading-[100%] text-black font-light font-maisonLight mt-[15px]'>Marketing to Contractors and <span className='block'>Installers:</span> The Ultimate Guide</h2>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LearnFrom
