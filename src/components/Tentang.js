import React from "react";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import SimulasiKredit from "./SimulasiKredit";
import Sales from "../assets/images/sales.jpeg";
function Tentang() {
  return (
    <div className="w-full h-full ">
      <div className="rotate-180">
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
      </div>
      <div className=" w-full h-full flex flex-col items-center justify-center  bg-slate-800 py-8">
        <div
          data-aos="zoom-in"
          className="mb-8 flex flex-col items-center justify-center"
        >
          <h1 className="font-poppins font-semibold text-[46px] text-white">
            Tentang Sales
          </h1>
          <div className="border-white w-[70%] h-full border-b-4 rounded-full" />
        </div>
        <div className="hidden sm:flex items-center justify-around w-full h-full container mx-auto">
          <div className="flex flex-col">
            <h1 className="font-poppins font-semibold text-white text-[46px] mb-4 transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70">
              Cepy Setiyawan
            </h1>
            <span className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[24px] ">
              <FaPhone />
              <span>0813-8761-5200</span>
            </span>
            <span className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[24px] ">
              <FaWhatsapp />
              <span>0813-8761-5200</span>
            </span>
            <a
              href="https://www.instagram.com/cepy_hyundai_jabodetabek/"
              className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[24px] "
            >
              <FaInstagram />
              <span>cepy_hyundai_jabodetabek</span>
            </a>
          </div>
          <div class="avatar">
            <div class="w-96 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                className="hover:scale-110 transition ease-linear duration-300"
                src={Sales}
                alt="sales"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:hidden items-center justify-around w-full h-full container mx-auto">
          <div class="avatar">
            <div class="w-80 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                className="hover:scale-110 transition ease-linear duration-300"
                src={Sales}
                alt="sales"
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-4 py-4">
            <h1 className="font-poppins font-medium text-white text-[44px] mb-2 transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70">
              Cepy Setiyawan
            </h1>
            <span className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] ">
              <FaPhone />
              <span>0813-8761-5200</span>
            </span>
            <span className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] ">
              <FaWhatsapp />
              <span>0813-8761-5200</span>
            </span>
            <span className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] ">
              <FaInstagram />
              <span>@cepy_hyundai_jabodetabek</span>
            </span>
          </div>
        </div>
        {/* <div className="w-[65%] h-full">
          <SimulasiKredit />
        </div> */}
        <div className="py-8 space-y-8 flex flex-col items-center justify-center font-poppins text-white container mx-auto">
          <div className="w-full h-full border-white border-b-2" />
          <span className="">
            <span className="space-x-1">
              <span>2022 - hyundai | Design by</span>
              <span className="font-semibold">PEGA</span>
            </span>
          </span>
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

export default Tentang;
