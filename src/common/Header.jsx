import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../utils/helper";
import { Link } from "react-router";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ search, setSearch ] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setSearch(false);
  }; 

  const handleOpen = () => {
    setOpen(!open);
    setActiveIndex(null);
    
  };

  const handleSearch = () => {
    setSearch(!search);
    setActiveIndex(null);
    setOpen(false)
  }
  

  const handleDropDown = () => {
    setActiveIndex(null)
    setOpen(false)
  };

  useEffect(() => {
    search && document.body.classList.add('overflow-hidden')
    !search && document.body.classList.remove('overflow-hidden')
  }, [search]);

  useEffect(() => {
    open && document.body.classList.add('overflow-hidden')
    !open && document.body.classList.remove('overflow-hidden')
  }, [open]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <nav className="flex justify-between items-center pl-14 max-lg:px-5 max-lg:py-4 text-white">
        {/* Logo */}
        <Link className="relative z-30" to={''}><img src="./assets/images/webp/logo.webp" alt="pageLogo" className="translate-y-4 min-h-[60px] max-sm:min-h-[40px]" /></Link>
        <button
          onClick={handleOpen}
          className={`hidden size-6 justify-center relative z-[60] max-lg:flex flex-col overflow-hidden`}
        >
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10 bg-black' : ''}`}
          ></span>
          <span 
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90 !bg-black after:!bg-black' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10 bg-black' : ''}`}
          ></span>
        </button>
        <div
          className={`flex gap-[42px] max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full items-center lg:pl-10 max-lg:flex-col bg-white max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:left-full'}`}
        >
          {HEADER_LIST.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleClick(index)}
                className="text-black hover:scale-110 text-[15px] font-medium font-maisonMedium gap-1 flex items-center relative z-[51] duration-200 focus:outline-none"
              >
                {item.name}
                <span className={` transition-all duration-200 !text-[6px] ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
                </span>
              </button>
              {item.subMenu && activeIndex === index && (
                <div className="absolute left-0 mt-2 w-24 z-[52] bg-white text-gray-800 rounded shadow-lg">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link to={''} onClick={handleDropDown} key={subIndex} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"> {subItem}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <img onClick={handleSearch } className="cursor-pointer max-lg:hidden hover:scale-125 transition-all duration-500" src="./assets/images/svg/search.svg" alt="search svg" />
          <form className={`flex lg:fixed lg:left-1/2 lg:translate-x-[-50%] bg-mercury max-w-[360px] px-3 rounded-lg transition-all duration-300 lg:!z-[52] ${search ? 'top-[5%]' : 'top-[-10%]'}`}>
              <input required className="bg-transparent text-black outline-none py-3 " type="text" />
              <button type="submit">
                <img className="cursor-pointer hover:scale-125 transition-all duration-500" src="./assets/images/svg/search.svg" alt="search svg" />
              </button>
          </form>
          <button className="py-8 px-[31px] font-semibold group flex justify-center items-center gap-1 text-black  bg-green-yellow">
          Let’s Talk
          <img className="group-hover:translate-x-2 transition-all duration-300" src="./assets/images/svg/button-arrow.svg" alt="arrow" />
          </button>
        </div>
      </nav>
      <div onClick={() => setSearch(false)} className={`fixed top-0 left-0 w-full min-h-screen bg-black opacity-30 !z-[11] ${ search ? 'block' : 'hidden'} `}>
      </div>
    </div>
  );
};

export default Header;
