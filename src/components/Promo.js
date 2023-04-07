import React from "react";
import PromoImg from "../assets/images/promo.jpeg";
function Promo() {
  return (
    <div className="w-full h-full my-16">
      {/* <div className="rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.28 2.17"
          preserveAspectRatio="none"
        >
          <path
            d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
            fill="#1E293B"
          />
          <path
            d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
            opacity=".5"
            fill="#1E293B"
          />
          <path
            d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
            opacity=".5"
            fill="#1E293B"
          />
        </svg>
      </div> */}
      <input type="checkbox" id="modal-img" className="modal-toggle" />
      <div className="modal select-none">
        <label
          htmlFor="modal-img"
          className="absolute  flex items-center justify-center bg-slate-800/70 w-full h-full cursor-pointer z-40 "
        >
          <div className=" absolute z-50  w-[70%] h-[80%]">
            <img
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
      <div className=" w-full h-full flex flex-col items-center justify-center py-8 text-slate-800 ">
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
              className="object-cover object-center w-full h-full"
              src={PromoImg}
              alt="promo"
            />
          </label>
          <div className="flex flex-col py-8 px-16 space-y-4">
            <span className="font-poppins font-semibold text-[48px] uppercase">
              PROMO Stargazer & Creta{" "}
              <span className="text-red-500">Prime</span>
            </span>
            <span className="font-poppins ">
              Dapatkan Penawaran Stargazer & Creta{" "}
              <span className="text-red-500">Prime</span> Terbaik Disini
            </span>
            <button className="w-fit bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800 shadow-sm select-none px-4 py-2 text-sm font-semibold text-white rounded-sm my-4">
              Read More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="sm:hidden w-full bg-white flex flex-col items-center shadow-sm shadow-white container mx-auto rounded-sm  border-2"
        >
          <div className="w-[400px] h-[360px]">
            <img
              className="object-cover object-center w-full h-full"
              src={PromoImg}
              alt="promo"
            />
          </div>
          <div className="flex flex-col  text-slate-800 py-8 px-16 space-y-4">
            <span className="font-poppins font-semibold text-[48px]">
              PROMO Stargazer & Creta{" "}
              <span className="text-red-500">Prime</span>
            </span>
            <span className="font-poppins ">
              Dapatkan Penawaran Stargazer & Creta{" "}
              <span className="text-red-500">Prime</span> Terbaik Disini
            </span>
            <button className="w-fit bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800 shadow-sm select-none px-4 py-2 text-sm font-semibold text-white rounded-sm my-4">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35.28 2.17"
            preserveAspectRatio="none"
          >
            <path
              d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
              fill="#1E293B"
            />
            <path
              d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
              opacity=".5"
              fill="#1E293B"
            />
            <path
              d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
              opacity=".5"
              fill="#1E293B"
            />
          </svg>
        </div> */}
    </div>
  );
}

export default Promo;
