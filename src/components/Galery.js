import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "./css/galery.css";
import { Autoplay, Pagination } from "swiper";

export default function Galery() {
  const [url, setUrl] = useState("");
  return (
    <div className="w-full flex flex-col items-center ">
      <input type="checkbox" id="modal-4" className="modal-toggle" />
      <div className="modal select-none">
        <label
          onClick={() => {
            setUrl("");
          }}
          htmlFor="modal-4"
          className="absolute  flex items-center justify-center bg-slate-800/70 w-full h-full cursor-pointer z-40 "
        >
          <div className="absolute z-50  w-[70%] h-[80%]">
            <iframe
              loading="lazy"
              className="w-full h-full"
              src={url}
              title="Hyundai Palisade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </label>
        <label
          htmlFor="modal-4 "
          className="absolute cursor-pointer z-50 top-0 right-0 m-4 transition ease-linear duration-300 rounded-full ring-2 ring-white w-10 h-10 flex items-center justify-center text-2xl hover:bg-white hover:text-slate-800 hover:ring-white text-white text-bold font-poppins"
        >
          x
        </label>
      </div>
      <div
        data-aos="zoom-in"
        className="mb-8 flex flex-col items-center justify-center"
      >
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
            <div className="flex items-center cursor-pointer justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <label
                htmlFor="modal-4"
                onClick={() =>
                  setUrl("https://www.youtube.com/embed/KObVIdBmuUg")
                }
                className="absolute z-50 min-w-full h-full bg-black transition ease-linear duration-300 hover:opacity-25 opacity-0 "
              />

              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className=" flex flex-col items-center justify-center space-y-4"
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
            <div className="flex items-center cursor-pointer justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <label
                htmlFor="modal-4"
                onClick={() => setUrl("https://youtube.com/embed/SzLgzoeThB8")}
                className="absolute z-50 min-w-full h-full bg-black transition ease-linear duration-300 hover:opacity-25 opacity-0 "
              />
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex flex-col items-center justify-center space-y-4"
              >
                <span className="flex items-center justify-center sm:text-[24px] font-poppins font-semibold capitalize text-white">
                  Hyundai Ioniq
                </span>
                <span className="flex items-center justify-center text-white">
                  <FaPlay size={"36px"} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center cursor-pointer justify-center bg-gradient-to-tr p-8 from-slate-800 to-white/30 bg-slate-800 w-full h-[200px] ">
              <label
                htmlFor="modal-4"
                onClick={() => setUrl("https://youtube.com/embed/M5k4NQPdmDw")}
                className="absolute z-50 cursor-pointer min-w-full h-full bg-black transition ease-linear duration-300 hover:opacity-25 opacity-0 "
              />
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex flex-col items-center justify-center space-y-4"
              >
                <span className="flex items-center justify-center sm:text-[24px] font-poppins font-semibold capitalize text-white">
                  Kona Electric
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
