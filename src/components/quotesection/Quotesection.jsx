import React, { useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Quotetext from "./Quote";
import { quotesImg } from "../../assets/Allimages";
const Quotesection = () => {
  const [expandedQuote, setExpandedQuote] = useState(null);
  const handleReadMore = (id) => {
    setExpandedQuote(expandedQuote === id ? null : id);
  };
  return (
    <div className=" bg-[#d6e4ff] bg-opacity-[0.3] mt-24 min-h-[872px] w-full md:min-h-[642px] xl:min-h-[832px]">
      <div className="px-20 py-10 md:px-12 xl:px-40 xl:w-full">
        <h1 className="text-[#091e42] pb-2 text-4xl leading-normal font-semibold text-center md:pb-6 xl:leading-loose md:text-4xl xl:text-5xl ">
          Hear from Our Thriving Users!
        </h1>
        <h3 className="text-[#172b4d] text-base leading-6 px-8 xl:text-base text-center md:px-32 xl:px-24 2xl:px-36">
          Explore the inspiring testimonials from our satisfied users and
          discover how our resume builder application has transformed their
          careers. From landing dream jobs to securing promotions, our users
          have experienced remarkable success with their resumes built using our
          platform.
        </h3>
      </div>
      <div className="items-center justify-center flex ">
        <div className=" relative w-[320px] md:w-[503px] xl:w-full pt-2 xl:pt-10">
          <Swiper
            style={{
              "--swiper-pagination-color": "#3366FF",
              "--swiper-pagination-bullet-inactive-color": "#3366FF",
              "--swiper-pagination-bullet-width": "24px",
              "--swiper-pagination-bullet-height": "5px",
              "--swiper-pagination-bullet-border-radius": "2px",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={28}
            slidesPerView={1}
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
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper"
          >
            {Quotetext.map((quote) => (
              <SwiperSlide key={quote.id} className="mb-16 md:mb-12 xl:mb-24">
                <div className="rounded-2xl p-6 bg-white shadow-md cursor-pointer min-w-[287px] min-h-[372px] md:w-[503px] md:min-h-[276px] xl:w-[460px] 2xl:w-[499px] xl:min-h-[355px]">
                  <div className="items-center">
                    <img src={quotesImg} alt="" className="w-10 h-10" />
                    <p className="text-sm xl:text-base leading-7 font-normal text-[#6f6c90] ml-2">
                      {expandedQuote === quote.id
                        ? quote.text
                        : `${quote.text.substring(0, 200)}`}
                      {quote.text.length > 200 && (
                        <button
                          className="text-[#3366ff] ml-2"
                          onClick={() => handleReadMore(quote.id)}
                        >
                          {expandedQuote === quote.id
                            ? ".Read less"
                            : "...Read more"}
                        </button>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center mt-6 xl:mt-28">
                    <img
                      src={quote.authImg}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-base leading-7 font-semibold text-[#170f49]">
                        {quote.authorName}
                      </p>
                      <p className="text-xs leading-6 font-normal text-[#6f6c90]">
                        {quote.authorPassion}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev absolute left-2 md:left-4 lg:left-6 xl:left-8 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  items-center justify-center text-sm bg-white p-2 rounded-full shadow-md cursor-pointer hidden xl:flex"></div>
            <div className="swiper-button-next absolute right-2 md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  items-center justify-center text-sm bg-white p-2 rounded-full shadow-md cursor-pointer hidden xl:flex"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Quotesection;
