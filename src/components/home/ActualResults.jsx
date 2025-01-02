import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ACTUAL_RESULTS_LIST } from "../../utils/helper";
import { UsIcon } from "../../utils/icons";

const ActualResults = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(./assets/images/webp/slider-bg-image.webp)",
        }}
        className="bg-cover bg-center bg-no-repeat relative py-20"
      >
        <h3 className="font-maisonLight text-3xl leading-[100%] text-center text-white">
          Actual businesses.
        </h3>
        <h2 className="font-sohne uppercase font-bold text-[80px] max-lg:text-7xl max-md:text-6xl text-white text-center leading-[133%]">
          Actual results.
        </h2>
        <p className="text-[15px] font-maisonRegular text-white text-center mt-[46px] mb-[81px]">
          Businesses trust Venveo to power grow.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={290}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper !pb-[60px] sm:!pb-[80px] lg:!pb-[100px]"
        >
          {ACTUAL_RESULTS_LIST.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="text-center w-full max-w-[992px] mx-auto px-4">
                <img
                  src={obj.img}
                  alt={`Slide`}
                  className="w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[640px] mx-auto"
                />
                <p className="text-white pt-6 sm:pt-8 lg:pt-[74px] font-maisonLight font-light max-w-[300px] sm:max-w-[450px] lg:max-w-[613px] mx-auto text-base sm:text-lg lg:text-custom3xl">
                  {obj.description}
                </p>
                <p className="text-white font-normal pt-4 sm:pt-5 font-maisonRegular text-sm max-md:text-base text-[15px]">
                  {obj.subDescription},
                </p>
                <p className="text-white font-normal font-maisonRegular text-sm max-md:text-base text-[15px]">
                  {obj.text}
                </p>
                <p className="text-center pt-3 mx-auto flex items-center justify-center">
                  <UsIcon />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute left-0 top-1/2 translate-y-[-50%] max-md:hidden swiper-button-white">
          <img src="./assets/images/svg/prev-slider-btn.svg" alt="prev" />
        </button>
        <button className="swiper-button-next absolute left-0 top-1/2 translate-y-[-50%] max-md:hidden swiper-button-white">
          <img src="./assets/images/svg/next-slider-btn.svg" alt="next" />
        </button>
      </div>
      <img className="translate-y-[13px] w-full" src="./assets/images/webp/slider-line.webp" alt="line" />
    </div>
  );
};

export default ActualResults;
