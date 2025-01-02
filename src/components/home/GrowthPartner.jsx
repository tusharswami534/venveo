import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PodCast } from '../../utils/icons';

const GrowthPartner = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [, setSearchParams] = useSearchParams();

  const handleTabClick = (tabIndex, name, id) => {
    setActiveTab(tabIndex);
    setSearchParams({ name: name, id: id });
  };

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col relative py-14 max-sm:py-12 justify-center items-center">
      <div className="w-full">
        <h2 className="text-[80px] max-lg:text-7xl uppercase max-md:text-6xl font-bold text-center font-sohne leading-86">
          The growth partner
        </h2>
        <h3 className="font-light font-maisonLight text-3xl leading-[100%] text-center mt-1.5">
          you’ve been looking for.
        </h3>
        <p className="font-normal text-[15px] mb-[105px] max-lg:my-12 max-md:my-10 max-sm:my-6 leading-[20px] text-center font-maisonRegular mt-[43px]">
          Businesses trust Venveo to power grow.
        </p>
        <div className="flex justify-center max-lg:overflow-auto whitespace-nowrap max-lg:py-5  items-center gap-[78px] max-lg:gap-10 max-lg:mx-5">
          <button
            className={`relative ${activeTab === 1 ? '' : 'opacity-35'}`}
            onClick={() => handleTabClick(1, 'one', '1')}
          >
            Industry Expertise
            <img
              className={`absolute top-[100%] left-0 ${activeTab === 1 ? 'block' : 'hidden'}`}
              src="./assets/images/webp/industry-active-line.webp"
              alt="active-line"
            />
          </button>
          <button
            className={`relative ${activeTab === 2 ? '' : 'opacity-35'}`}
            onClick={() => handleTabClick(2, 'two', '2')}
          >
            ROI Focused
            <img
              className={`absolute top-[100%] left-0 ${activeTab === 2 ? 'block' : 'hidden'}`}
              src="./assets/images/webp/industry-active-line.webp"
              alt="active-line"
            />
          </button>
          <button
            className={`relative ${activeTab === 3 ? '' : 'opacity-35'}`}
            onClick={() => handleTabClick(3, 'three', '3')}
          >
            Proprietary Technology
            <img
              className={`absolute top-[100%] left-0 ${activeTab === 3 ? 'block' : 'hidden'}`}
              src="./assets/images/webp/industry-active-line.webp"
              alt="active-line"
            />
          </button>
        </div>
        <div className="w-full mt-[58px] max-md:mt-10 max-sm:mt-6">
          <div className={`relative max-w-[1280px] w-full mx-auto ${activeTab === 1 ? 'block' : 'hidden'}`}>
            <div
              style={{ backgroundImage: 'url(./assets/images/webp/smartest.webp)' }}
              className="bg-cover p-[75px] bg-left xl:max-w-[1280px] w-full mx-auto min-h-[720px]"
            >
              <h2 className="uppercase max-w-[325px] text-[80px] font-bold font-sohne leading-86 text-white">
                the smartest minds in the industry
              </h2>
              <h3 className="font-light font-lights max-w-[360px] text-3xl leading-[100%] text-white">
                Answer our questions and listen to our answers.
              </h3>
              <p className="font-normal max-w-[360px] mt-[31px] text-white font-maisonMedium">
                This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.
              </p>
              <button className="font-maisonMedium gap-2 font-medium text-[15px] leading-[20px] text-white flex items-center py-[34px] px-8 bg-light-red mt-[80px]">
                <PodCast /> Subscribe to Podcast <span className="text-[6px]">▼</span>
              </button>
            </div>
          </div>
          <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
            <div
              style={{ backgroundImage: 'url(./assets/images/webp/proven-results-bg.webp)' }}
              className="bg-cover p-[75px] max-w-[1337px] h-[720px] bg-left xl:max-w-[1280px] w-full mx-auto min-h-[720px]"
            >
              <h2 className="uppercase text-[80px] font-bold font-sohne leading-86 text-white">
                Proven Results
              </h2>
              <h3 className="font-light font-lights text-3xl leading-[100%] text-white">
                Not hopes and prayers.
              </h3>
            </div>
          </div>
          <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
            <div
              style={{ backgroundImage: 'url(./assets/images/webp/project-radar.webp)' }}
              className="bg-cover p-[75px] max-w-[1337px] h-[720px] bg-left xl:max-w-[1280px] w-full mx-auto min-h-[720px]"
            ></div>
          </div>
        </div>
      </div>
      <img className='absolute bottom-[5%] z-[-10] left-0 w-full max-h-[19px] ' src="./assets/images/webp/tab-section-line-1.webp" alt="line-1" />
      <img className='absolute bottom-[3%] z-[-10] left-0 w-full max-h-[19px] ' src="./assets/images/webp/tab-section-line-2.webp" alt="line-1" />
    </div>
  );
};

export default GrowthPartner;
