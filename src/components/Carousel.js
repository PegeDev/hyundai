import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IoniqImg from "../assets/images/ioniq-5-carousel.webp";
import SantaImg from "../assets/images/santa-fe-carousel.png";
import StariaImg from "../assets/images/staria-carousel.jpg";
import CretaImg from "../assets/images/creta.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  const [show, setShow] = useState(true);
  const sliderArr = [
    {
      url: IoniqImg,
      title: "IONIQ 5",
      path: "/product/ioniq-5",
    },
    {
      url: SantaImg,
      title: "SANTA FE",
      path: "/product/santa-fe",
    },
    {
      url: StariaImg,
      title: "STARIA",
      path: "/product/staria",
    },
    {
      url: CretaImg,
      title: "CRETA",
      path: "/product/creta",
    },
  ];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "25px",
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChangeTransitionStart={() => {
          setShow(false);
        }}
        onSlideChangeTransitionEnd={() => {
          setShow(true);
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {sliderArr.map((val, i) => (
          <SwiperSlide key={i}>
            <img
              className="object-cover object-center "
              src={val.url}
              alt={`slider-${i}`}
            />
            {show && (
              <div
                className={`
             absolute  z-50 bottom-0 from-black/50 flex flex-col bg-gradient-to-t items-center justify-center w-full h-[50%] `}
                data-aos="fade-up"
              >
                <span className="font-extrabold  font-poppins text-[64px] text-white">
                  {val.title}
                </span>

                <button
                  type="button"
                  className="hover:bg-white hover:text-gray-800 font-semibold transition duration-300 ease-linear border-2 border-white text-white font-poppins mt-4 px-4 py-2 text-sm rounded-lg"
                >
                  <a href={val.path}>Read More</a>
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
