import React from 'react'

const ReadyGoals = () => {
  return (
    <div style={{backgroundImage: 'url(/assets/images/webp/ready-goals.webp)'}} className="bg-cover bg-center bg-no-repeat box-border">
        <div className='max-w-[1140px] mx-auto text-center flex py-[66px] gap-9 justify-center items-center max-lg:flex-col'>
            <h2 className='font-light text-white text-[40px] leading-[100%] font-maisonLight'>Ready to hit your goals?</h2>
            <button className='p-[31px] flex items-center gap-2.5 bg-green-yellow text-[15px] font-semibold font-maisonMedium transition-all duration-300 ease-linear hover:shadow-[inset_300px_0_0_0px_#fff]'>Book a Strategy Call 
            <img src="./assets/images/svg/button-arrow.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default ReadyGoals
