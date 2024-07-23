import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { arrow, sliderImg1, sliderImg2 } from "../../assets/Allimages";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ResumeTemp = () => {
  const slides = [
    { id: 1, image: sliderImg1 },
    { id: 2, image: sliderImg2 },
    { id: 3, image: sliderImg1 },
    { id: 4, image: sliderImg2 },
    { id: 5, image: sliderImg1 },
  ];
  return (
    <div className=" bg-gradient-to-r from-[#580240] via-[#4a039e] to-[#031d6b] h-[1052px] w-full  mt-24 px-20 md:h-[1121px] md:px-10 xl:px-0 xl:h-[1179px]">
      <div className="text-center py-10 md:py-10 xl:py-10">
        <h1 className="text-3xl md:text-4xl xl:text-5xl xl:leading-normal font-semibold text-white leading-snug px-10 md:px-24  xl:px-60">
          Unlock Your Resume's Potential with Our Diverse Collection
        </h1>
        <h3 className="text-base md:text-sm xl:text-xl text-white leading-6 md:leading-7 xl:leading-8 p-4 md:px-28  xl:px-56">
          Our carefully curated collection combines sleek designs, vibrant
          colors, and intuitive layouts to help you stand out from the crowd.
          Whether you're a seasoned professional or just starting your career,
          our diverse range of templates caters to every industry and
          profession.
        </h3>
      </div>
      <div className="relative h-auto mt-4 md:mt-0 xl:mt-10">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center z-50">
          <button className="flex items-center gap-4 px-6 py-2 border border-[#84a9ff] rounded-3xl bg-[#3366ff] text-white text-base md:text-lg lg:text-xl leading-6">
            Create free resume
            <img src={arrow} alt="arrow" className="w-4 h-auto" />
          </button>
        </div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-width": "24px",
            "--swiper-pagination-bullet-height": "5px",
            "--swiper-pagination-bullet-border-radius": "2px",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="myswiper"
        >
          {slides.map((image, index) => (
            <SwiperSlide
              key={index}
              className="bg-transparent relative mb-20 md:mb-20 xl:mb-24"
            >
              <img
                src={image.image}
                alt={`Slide${index + 1}`}
                className="rounded-lg shadow-lg w-[286.28px] h-[405.42px] md:w-[507.64px] md:h-[718.89px] xl:max-w-[452px] xl:max-h-[640px] mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14  items-center justify-center text-sm   bg-white p-2 rounded-full shadow-md cursor-pointer hidden xl:flex"></div>
        <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14  items-center justify-center text-sm  bg-white p-2 rounded-full shadow-md cursor-pointer hidden xl:flex"></div>
      </div>
    </div>
  );
};

export default ResumeTemp;
