import React, { useState } from 'react'
import { FOOTER_ICON_LIST, FOOTER_LIST } from '../utils/helper'
import { Link } from 'react-router'

const Footer = () => {
    const [droupDwon, setDroupDown] = useState(null) ;
     const toggleDroupDown = (index) => {
       setDroupDown(droupDwon === index ? null : index);
     }

     const currentYear = new Date().getFullYear();
  return (
    <div className='bg-ocean pt-[90px] pb-[100px] max-xl:py-24 px-[60px] max-lg:py-20 max-md:py-16 max-sm:py-12 max-xl:px-5'>
        <div className="max-w-[1440px] mx-auto">
            <div className='max-lg:flex-wrap max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center gap-y-10 flex'>
                <div className='w-8/12 max-md:w-full flex gap-[82px] max-sm:hidden max-md:gap-5 '>
                  {FOOTER_LIST.map((list, index) => (
                      <div key={index} className='w-3/12'>
                          <h3 className='mb-[25px] font-medium uppercase font-maisonMedium text-[12px] leading-[13px] text-white'>{list.heading}</h3>
                          <ul>
                            {list.footerList.map((item, index) => (
                              <li key={index} className='leading-[30px] text-[15px] font-light text-white font-maisonLight'><Link to={'#'}>{item}</Link></li>
                            ))}
                          </ul>
                      </div>
                  ))}
                </div>
                <div className='w-full flex gap-[82px] max-sm:flex-wrap sm:hidden max-md:gap-5 '>
                  {FOOTER_LIST.map((list, index) => (
                      <div key={index} className='w-3/12 max-sm:w-full'>
                          <h3 onClick={() => toggleDroupDown(index)} className='mb-2.5 font-medium uppercase font-maisonMedium text-[12px] leading-[13px] text-green-yellow flex gap-1 items-center'>{list.heading}<span className={`rotate-180 transition-all duration-300 ease-linear ${droupDwon === index ? 'rotate-0' : 'rotate-180'}`}>▼</span></h3>
                          <ul className={`overflow-hidden duration-300 ease-linear flex flex-col gap-6 ${droupDwon === index ? 'max-h-[300px]' : 'max-h-0'}`}>
                            {list.footerList.map((item, index) => (
                              <li key={index} className='leading-[30px] text-[15px] font-light text-white font-maisonLight'><Link to={'#'}>{item}</Link></li>
                            ))}
                          </ul>
                      </div>
                  ))}
                </div>
                <div className='w-4/12 max-lg:w-full max-lg:justify-center max-lg:flex max-lg:items-center max-lg:flex-col'>
                  <h2 className='font-light font-maisonLight text-[30px] leading-[100%] text-white'>Get weekly data — and insights.</h2>
                <form className='w-[449px] max-xl:max-w-[449px] max-xl:w-full mt-[35px] max-lg:mt-[20px] rounded-full border-2 flex items-center justify-between bg-transparent border-solid border-white px-7 max-md:px-5'>
                          <input type="email" required placeholder='Enter Your Email' className='placeholder:text-white placeholder:font-normal outline-none w-full  text-white placeholder:text-customsm bg-transparent py-[18px] placeholder:font-maisonRegular font-maisonRegular max-sm:py-5 text-[15px]' />
                          <button className='bg-transparent text-green-yellow font-semibold text-[15px] leading-[133%] w-28 font-maisonMedium'>Get Started</button>
                      </form>
                </div>
            </div>
        </div>
        <div className='max-w-[1440px] mx-auto'>
        <div className='pt-20 max-lg:pt-14 max-md:pt-12 max-sm:pt-8 w-full flex justify-between max-xl:gap-7 items-end  max-xl:items-start max-[769px]:flex-col max-[769px]:justify-center '>
                  <div className='max-[769px]:w-full max-[769px]:flex max-[769px]:justify-center max-[769px]:flex-col'>
                      <Link to="/" className='pb-0.5 w-full flex justify-center'> <img src="./assets/images/webp/logo.webp" alt="footer-logo" /> </Link>
                      <p className='max-w-[415px] text-white text-[13px] max-[769px]:text-center font-normal font-maisonLight leading-[153%] pt-5'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                          ©{currentYear} Venveo</p>
                  </div>
                  <div className='flex gap-14 max-sm:gap-7 max-[769px]:mx-auto'>
                      <div>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5 max-[769px]:text-center'>Visit</p>
                          <p className='pt-7'><Link to="/" className='text-white font-light font-maisonLight text-customXsm leading-[153%] max-[769px]:text-center'>100 N Main Street <span className='block'>#201 </span>
                              Blacksburg, VA 24060</Link></p>
                      </div>
                      <div>
                          <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5 max-[769px]:text-center'>contact</p>
                          <p className='pt-7'><Link to="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-green-yellow duration-300 ease-linear border-b border-green-yellow max-[769px]:text-center'>info@venveo.com</Link></p>
                          <p className='pt-5'><Link to="tel:+4733378901" className='text-white font-light font-maisonLight text-customXsm leading-[153%px] hover:text-green-yellow duration-300 ease-linear border-b border-green-yellow max-[769px]:text-center'>1 · 800 · 123 · 4567</Link></p>
                      </div>
                  </div>
                  <div className='flex flex-col gap-8 max-[769px]:mx-auto items-center'>
                      <div className='flex gap-8'>
                          <Link to="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-green-yellow duration-300 ease-linear'>All Rights Reserved</Link>
                          <Link to="/" className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:text-green-yellow duration-300 ease-linear'>Privacy Policy</Link>
                      </div>
                      <div className='flex gap-[34px] items-center max-[769px]:mx-auto'>
                          {FOOTER_ICON_LIST.map((obj, i) => (
                              <Link key={i} to={obj.link} target='_blank' className='text-white text-customXsm font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear'> <img src={obj.icon} alt="icons" /> </Link>
                          ))}
                      </div>
                  </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
