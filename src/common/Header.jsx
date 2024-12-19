import React, { useState } from "react";
import { HEADER_LIST } from "../utils/helper";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setActiveIndex(null);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
        {/* Logo */}
        <a href="/">
          <img src="./assets/images/png/logo.png" alt="pageLogo" className="h-10" />
        </a>
        {/* Mobile Menu Button */}
        <button
          onClick={handleOpen}
          className={`hidden size-6 justify-center relative z-[60] max-lg:flex flex-col overflow-hidden`}
        >
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
          ></span>
        </button>

        {/* Navigation Menu */}
        <div
          className={`flex gap-[42px] max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-gray-800 max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:left-full'}`}
        >
          {HEADER_LIST.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleClick(index)}
                className="hover:text-gray-300 transition-colors relative z-[51] duration-200 focus:outline-none"
              >
                {item.name}
              </button>

              {/* Dropdown Menu */}
              {item.subMenu && activeIndex === index && (
                <div className="absolute left-0 mt-2 w-24 z-[52] bg-white text-gray-800 rounded shadow-lg">
                  {item.subMenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      onClick={() => setActiveIndex(null)}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
        </div>
      </nav>

      {/* Overlay to close dropdown when clicking outside */}
      {/* {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed top-0 left-0 w-full min-h-screen bg-gray-900 opacity-50 z-[50]"
        ></div>
      )} */}
    </div>
  );
};

export default Header;
