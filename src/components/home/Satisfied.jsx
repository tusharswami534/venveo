import React from 'react'
import { SATISFIED_LIST } from '../../utils/helper'

const Satisfied = () => {
  return (
    <div>
      <div className="mt-[101px]  max-xl:mt-24 max-lg:mt-20 max-md:mt-10">
          <p className='text-3xl leading-[100%] text-center font-light font-maisonLight'>Driving digital revenue for over</p>
            <h2 className='text-[80px] max-lg:text-7xl max-md:text-6xl font-bold text-center font-sohne leading-86 mb-[88px] max-lg:pb-14 max-md:mb-12 max-sm:mb-8' ><span className='relative'>1,400+ <img className='absolute left-0 bottom-0' src="./assets/images/webp/number-line-image.webp" alt="" /> </span> satisfied clients.</h2>
           
            <div className="flex flex-wrap justify-center max-xl:justify-center gap-[60px] max-lg:gap-10 mt-10 max-xl:m-4 max-w-[1440px] mx-auto">
                {SATISFIED_LIST.map((obj, i) => (
                    <div
                        key={i} className={`bg-no-repeat bg-center relative bg-cover max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col !w-[440px] max-sm:w-[320px] ${obj.Background}`}>
                        <div className='flex flex-col bg-white w-[382px] max-sm:w-[320px] rounded-[25px] shadow-lg px-7 pt-[38px] max-sm:m-4 pb-[31px] mx-7 mt-[31px]'>
                            <div className={i === 0 ? "absolute  bg-black text-white font-semibold text-[12px] border border-solid rounded-full w-[165px] py-2 top-3 ps-3 border-black" : i === 1 ? "absolute top-5 text-black font-semibold" : ""}>{obj.heading}</div>
                        <div className="mb-4">{obj.logo}</div>
                        <h3 className="font-maisonLight text-[30px] leading-[30px] max-sm:text-2xl max-w-[325px] text-black mt-6 max-sm:mt-4">
                            {obj.title}
                        </h3>
                        <p className="max-w-[315px] font-maisonRegular font-normal text-black  max-sm:pt-5 pt-[31px]">
                            {obj.description}
                        </p>
                        <button className="mt-[54px] max-md:mt-9 max-sm:mt-7 font-semibold font-maisonMedium flex items-center gap-2">
                            {obj.btn} 
                            <img src="./assets/images/svg/learn-more.svg" alt="learnmore" />
                        </button>
                        </div>
                        <div className="flex items-center justify-center gap-12 mt-[13px] mb-[33px]">
                            <div>
                                <p className="text-[50px] font-bold max-lg:text-4xl max-md:text-3xl font-sohneschmal text-black leading-[44px]">{obj.leads}</p>
                                <p className="font-medium text-black leading-[15px]">{obj.leadText}</p>
                            </div>
                            <div>
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohneschmal text-black leading-[44px]">{obj.adLeads}</p>
                                <p className="font-medium text-black leading-[15px]">{obj.adLeadsText}</p>
                            </div>
                            <div>
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohneschmal text-black leading-[44px]">
                                    {obj.webTraffic}
                                </p>
                                <p className="font-medium text-black leading-[15px]">{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Satisfied
