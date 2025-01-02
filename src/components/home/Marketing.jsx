import React from 'react'
import { MARKETING_LIST } from '../../utils/helper'

const Marketing = () => {
  return (
    <div className="pt-[132px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-12 relative md:px-0 px-3">
            <p className='md:text-[30px] text-2xl font-maisonLight text-center pb-1'>Problems we solve.</p>
            <h3 className='lg:text-[80px] md:text-7xl text-6xl font-sohne uppercase leading-[87%] text-center max-w-[500px] mx-auto'>Digital Marketing for today’s Business</h3>
            <p className="font-normal font-maisonRegular text-[15px] text-center max-w-[645px] leading-[20px] pt-6 text-black mx-auto tracking-[1px] max-sm:max-w-[307px]">
                We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.
            </p>
            <img src="./assets/images/webp/dual-line.webp" alt="yellow-line"
                className="w-full -z-10 absolute left-0 top-[32%]"/>
             <div className="flex flex-wrap gap-x-[66px] gap-y-[57px] max-md:gap-6 justify-center pt-[88px] max-lg:pt-12 max-md:pt-10 max-sm:mx-4 max-w-[1440px] mx-auto">
                    {MARKETING_LIST.map((obj, i) => (
                        <div
                            key={i}
                            className={`border-2 hover:scale-105 transition-all duration-300 relative z-40 max-w-[503px] h-[506px] max-lg:h-full bg-white border-pacific-blue rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] pr-[59px] max-xl:w-full `}>
                            <div className="flex items-start gap-6 max-sm:flex-col">
                                <div>{obj.logo}</div>
                                <div>
                                    <p className='pb-3.5 text-3xl max-w-[325px] font-maisonLight'>{obj.heading}</p>
                                    <p className='font-maisonRegular text-[15px] max-w-[315px] leading-[133%]'>{obj.description}</p>
                                    <ul className="list-disc   mt-7 max-w-[285px] pl-5">
                                        <li className='font-semibold text-black leading-[133%] text-[15px] font-maisonBold'>{obj.liOne}</li>
                                        <li className='font-semibold text-black leading-[133%] text-[15px] font-maisonBold'>{obj.liTwo}</li>
                                        <li className='font-semibold text-black leading-[133%] text-[15px] font-maisonBold'>{obj.liThree}</li>
                                    </ul>
                                    <button className={`font-maisonMedium ease-linear duration-300 flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-[15px] font-semibold leading-[133%] ${i === 2 ? 'mt-[29px]' : 'mt-[33px]'}`}>
                                        {obj.button} 
                                        <img src="./assets/images/svg/learn-more.svg" alt="learnmore" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
  )
}

export default Marketing
