import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const sliderArr = [
    {
      url: "https://dealermobilhyundai.id/wp-content/uploads/2022/04/Home-Banner-1860-x-720-pc.webp",
      title: "STARGAZER",
      content:
        "Commodo consectetur incididunt exercitation reprehenderit sit voluptate minim quis sunt ex laboris fugiat.",
    },
    {
      url: "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria.jpg",
      title: "SANTA FE",
      content:
        "Do voluptate proident sunt laborum culpa officia ex exercitation proident in.",
    },
    {
      url: "https://dealermobilhyundai.id/wp-content/uploads/2022/04/Home-Banner-1860-x-720-pc.webp",
      title: "PALISADE",
      content: "Et ad dolore amet cillum.",
    },
    {
      url: "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria.jpg",
      title: "CRETA",
      content:
        "Nostrud eu esse cupidatat sit proident ad aliquip consectetur reprehenderit non adipisicing amet officia.",
    },
  ];
  console.log({ show });

  return (
    <>
      <Swiper
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
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderArr.map((val, i) => (
          <SwiperSlide key={i}>
            <img
              className="object-cover object-center"
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
                <span className="font-poppins text-white">{val.content}</span>
                <button className="hover:bg-white hover:text-gray-800 font-semibold transition duration-300 ease-linear border-2 border-white text-white font-poppins mt-4 px-4 py-2 text-sm rounded-xl">
                  Read More
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
