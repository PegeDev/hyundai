import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "./css/galery.css";
import { Autoplay, Pagination } from "swiper";

export default function Galery() {
  return (
    <div className="w-full h-full flex flex-col items-center mb-36">
      <div className="mb-8 flex flex-col items-center justify-center">
        <h1 className="font-poppins font-semibold text-[46px] text-slate-800">
          Galery
        </h1>
        <div className="border-slate-800 w-[70%] h-full border-b-4 rounded-full" />
      </div>
      <div data-aos="fade-left" className="w-full mx-auto ">
        <Swiper
          slidesPerView={3}
          spaceBetween={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex flex-col items-center justify-center space-y-4"
              >
                <span className="flex items-center justify-center sm:text-[24px] font-poppins font-semibold capitalize text-white">
                  Hyundai Palisade
                </span>
                <span className="flex items-center justify-center text-white">
                  <FaPlay size={"36px"} />
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex flex-col items-center justify-center space-y-4"
              >
                <span className="flex items-center justify-center sm:text-[24px] font-poppins font-semibold capitalize text-white">
                  Hyundai Palisade
                </span>
                <span className="flex items-center justify-center text-white">
                  <FaPlay size={"36px"} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex flex-col items-center justify-center space-y-4"
              >
                <span className="flex items-center justify-center sm:text-[24px] font-poppins font-semibold capitalize text-white">
                  Hyundai Palisade
                </span>
                <span className="flex items-center justify-center text-white">
                  <FaPlay size={"36px"} />
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
