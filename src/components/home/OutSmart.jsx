import React from 'react'

const OutSmart = () => {
  return (
    <div style={{backgroundImage: 'url(./assets/images/png/Outsmart-bg-image.png)'}} className='bg-cover max-xl:px-3 relative bg-center py-[100px]'>
        <div className='max-w-[1096px] mx-auto flex justify-between items-center max-lg:flex-col max-lg:gap-20 max-lg:justify-center w-full'>
          <img className='absolute right-[45%] top-[69%] translate-y-[-50%]' src="./assets/images/svg/our-arrow.svg" alt="" />
          <div>
            <h3 className='font-normal text-[15px] leading-[20px] font-maisonMedium'>Get a free competitive analysis on your market</h3>
            <h2 className='font-light font-lights text-[40px] leading-[100%]'>Outsmart your competition</h2>
            </div>
            <form className="max-w-[446px] w-full relative z-10 py-[19px] border border-white px-8 rounded-[50px] border-solid bg-white flex">
          <input required placeholder="Enter Your Website" className="placeholder:text-black text-black items-center font-maisonMedium outline-none w-full bg-transparent" type="text" />
          <button className="text-black font-semibold font-maisonBook" type="submit">
          Analyze
          </button>
        </form>
        </div>
    </div>
  )
}

export default OutSmart
