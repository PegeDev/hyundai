import React from "react";
import PromoImg from "../assets/images/promo.jpeg";
function Promo() {
  return (
    <div className="w-full my-8">
      <input type="checkbox" id="modal-img" className="modal-toggle" />
      <div className="modal select-none">
        <label
          htmlFor="modal-img"
          className="absolute  flex items-center justify-center bg-slate-800/70 w-full h-full cursor-pointer z-40 "
        >
          <div className=" absolute z-50  w-[70%] h-[80%]">
            <img
              loading="lazy"
              className="w-full h-full object-contain"
              src={PromoImg}
              alt="promo-img"
            />
          </div>
        </label>
        <label
          htmlFor="modal-img "
          className="absolute cursor-pointer z-50 top-0 right-0 m-4 transition ease-linear duration-300 rounded-full ring-2 ring-white w-10 h-10 flex items-center justify-center text-2xl hover:bg-white hover:text-slate-800 hover:ring-white text-white text-bold font-poppins"
        >
          x
        </label>
      </div>
      <div className="overflow-hidden w-full h-full flex flex-col items-center justify-center py-8 text-slate-800 ">
        <div
          data-aos="zoom-in"
          className="mb-8 flex flex-col items-center justify-center"
        >
          <h1 className="font-poppins font-semibold text-[46px] text-slate-800">
            Promo
          </h1>
          <div className="border-slate-800 w-[70%] h-full border-b-4 rounded-full" />
        </div>
        <div
          data-aos="fade-right"
          className=" w-full bg-white hidden sm:flex items-center shadow-sm shadow-white container mx-auto rounded-sm  border-2"
        >
          <label htmlFor="modal-img" className="w-[400px] h-[360px]">
            <img
              loading="lazy"
              className="object-cover object-center w-full h-full"
              src={PromoImg}
              alt="promo"
            />
          </label>
          <div className="flex flex-col py-8 px-16 space-y-4">
            <span className="font-poppins font-bold text-[48px] uppercase">
              PROMO Stargazer & Creta
              <span className="text-red-500">Prime</span>
            </span>
            <span className="font-poppins ">
              Dapatkan Penawaran Stargazer & Creta
              <span className="text-red-500">Prime</span> Terbaik Disini
            </span>
            <button className="w-fit transition ease-linear duration-300  hover:bg-white hover:text-slate-800  hover:border-2 hover:border-slate-800  border-2 border-slate-800  bg-slate-800 shadow-sm select-none px-4 py-2 text-sm font-semibold text-white rounded-sm my-4">
              <a href="/promo">Read More</a>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="overflow-hidden sm:hidden w-full bg-white flex flex-col items-center shadow-sm shadow-white container mx-auto rounded-sm  border-2"
        >
          <div className="w-[400px] h-[360px]">
            <img
              loading="lazy"
              className="object-cover object-center w-full h-full"
              src={PromoImg}
              alt="promo"
            />
          </div>
          <div className="overflow-hidden flex flex-col  text-slate-800 py-8 px-16 space-y-4">
            <span className="font-poppins font-bold text-[48px] leading-none uppercase">
              PROMO Stargazer & Creta
              <span className="text-red-500">Prime</span>
            </span>
            <span className="font-poppins ">
              Dapatkan Penawaran Stargazer & Creta
              <span className="text-red-500">Prime</span> Terbaik Disini
            </span>
            <button className="w-fit transition ease-linear duration-300  hover:bg-white hover:text-slate-800  hover:border-2 hover:border-slate-800  border-2 border-slate-800  bg-slate-800 shadow-sm select-none px-4 py-2 text-sm font-semibold text-white rounded-sm my-4">
              <a href="/promo">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
