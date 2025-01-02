import React from 'react'
import { Entrepreneur, Forbes, Fortune, Inc, Wjs } from '../../utils/icons'

const Featured = () => {
  return (
    <div className=' overflow-hidden'>
    <p className='text-customsm font-normal text-black text-center uppercase leading-[15px] font-maisonRegular'>Featured in</p>
<div className='flex items-center mt-12 mb-[90px] max-lg:my-10 max-w-[1025px] mx-auto justify-evenly max-md:gap-9 slide-scroll-left'>
        <Wjs />
       <Entrepreneur/>
       <Fortune/>
        <Forbes/>
        <Inc/>
  <div className='md:hidden flex items-center gap-9 slide-scroll-left'>
    <Wjs />
    <Entrepreneur />
    <Fortune />
    <Forbes />
    <Inc />
    <Wjs />
    <Entrepreneur />
    <Fortune />
    <Forbes />
    <Inc />
    <Wjs />
    <Entrepreneur />
    <Fortune />
    <Forbes />
    <Inc />
    <Wjs />
    <Entrepreneur />
    <Fortune />
    <Forbes />
    <Inc />
  </div>
    </div>
<img className='w-full max-h-[31px]' src="./assets/images/webp/featured-line.webp" alt="images" />


</div>
  )
}

export default Featured
