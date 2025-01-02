import React from 'react'
import { CARDS_LIST } from '../../utils/helper'

const Cards = () => {
  return (
    <div className='max-w-[1440px] w-full mx-auto pb-[59px] max-xl:px-5'>
        <div className="w-full items-center flex flex-wrap justify-between max-xl:justify-center max-xl:gap-[60px] max-lg:gap-7">
          {CARDS_LIST.map((card, index) => (
              <div key={index} className={`max-w-[440px] group p-[29px] max-md:p-5 flex justify-center items-end w-full min-h-[551px] max-md:min-h-[420px] ${card.background}`}>
                <div className="bg-white group-hover:scale-105 transition-all duration-300 rounded-[25px] flex flex-col justify-between w-full min-h-[320px] p-[35px_28px_29px_29px] max-md:p-[30px_25px_25px_25px]">
                  <div className='flex flex-col'>
                    <p className='uppercase text-[15px] font-semibold font-maisonMedium leading-[133%] text-ball-blue'>{card.title}</p>
                    <h3 className='font-maisonLight font-light text-3xl leading-[100%] text-black mt-[15px] max-md:text-[28px] max-sm:text-2xl'>{card.heading}</h3>
                    <p className='font-maisonRegular font-normal text-[15px] leading-[133%] text-black mt-[15px] max-w-[315px]'>{card.description}</p>
                  </div>
                  <button className='flex items-center gap-2.5 text-[15px] font-semibold font-maisonMedium leading-[133%]'>Read More <img src="./assets/images/svg/learn-more.svg" alt="learn-more" /></button>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Cards
