import React from "react";
import Header from "../../common/Header";

const Hero = () => {
  return (
    <div style={{ backgroundImage: "url('./assets/images/webp/hero-bg-image.webp')" }} className="relative bg-set bg-no-repeat max-md:bg-set-md max-lg:px-5">
      <Header />
      <img className="absolute max-w-[394px] max-sm:max-w-[150px] z-0  top-0 left-0" src="./assets/images/webp/hero-top-layer.webp" alt="" />
      <div className="relative w-full">
      <img className="absolute max-w-[534px] max-lg:hidden z-0 bottom-[28.5%] right-0" src="./assets/images/webp/hero-bottom-layer.webp" alt="" />
      <img className="absolute max-lg:min-w-[108%] max-lg:left-[-5%] max-lg:bottom-[15%] bottom-[25%] 2xl:bottom-[20%]" src="./assets/images/webp/hero-line.webp" alt="" />
      <div className="py-20 max-lg:py-16 max-md:py-12 max-sm:py-10">
        <div className='relative max-w-[650px] mx-auto'>
        <h1 className="font-bold relative z-10 font-sohne leading-86 text-[120px] text-center  uppercase mx-auto text-white max-lg:text-8xl max-md:text-7xl max-sm:text-6xl">Make marketing a <span className="relative "> growth
        <img className="max-w-[256px] w-full absolute left-[8%] max-sm:max-w-[146px] max-[400px]:left-[13%]" src="./assets/images/webp/text-line.webp" alt="text-line" /></span> machine</h1>
        </div>
        <p className="font-maisonLight relative z-10 leading-125 font-light text-[24px] max-w-[656px] text-center mx-auto text-white mt-6">We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
        <form className="max-w-[448px] relative z-10 py-[19px] mt-6 border border-white px-8 rounded-[50px] border-solid mx-auto bg-transparent flex">
          <input required placeholder="Enter Your Website" className="placeholder:text-cloudy-blue text-white font-maisonRegular outline-none w-full bg-transparent" type="text" />
          <button className="text-white font-semibold font-maisonMedium" type="submit">
          Analyze
          </button>
        </form>
        <div className="relative lg:w-max mx-auto">
        <img className="mx-auto max-w-[870px] w-full relative z-10 mt-[66px] max-lg:mt-14 max-md:mt-10 max-sm:mt-8" src="./assets/images/webp/hero-image.webp" alt="" />
        <img className="top-[80%] max-lg:top-[100%] max-lg:left-[80%] translate-y-[-50%] z-20 max-w-[107px] max-sm:size-24 absolute left-[-5%]" src="./assets/images/webp/made-for-brands.webp" alt="made-for-brands" />
        </div>
        </div>
      </div>
    </div>
  );  
};

export default Hero;
