import React, { useEffect } from "react";
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
      <div className="flex flex-col items-center justify-center w-full h-full py-8 bg-slate-800">
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center mb-8"
        >
          <h1 className="font-poppins font-semibold sm:text-[46px] text-[28px] text-white">
            Tentang Sales
          </h1>
          <div className="border-white w-[70%] h-full border-b-2 rounded-full" />
        </div>
        <div className="hidden sm:flex items-center sm:justify-around justify-between sm:w-[70%] w-full px-4 h-full ">
          <div className="flex flex-col">
            <h1 className="font-poppins font-semibold text-left text-white sm:text-[46px] text-[24px] mb-4 transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70">
              Cepy Setiyawan
            </h1>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER_WA}`}
              className="inline-flex items-center text-left space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins sm:text-[24px] text-[16px] "
            >
              <FaPhone />
              <span>{process.env.REACT_APP_PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER_WA}`}
              className="inline-flex items-center text-left space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins sm:text-[24px] text-[16px] "
            >
              <FaWhatsapp />
              <span>{process.env.REACT_APP_PHONE_NUMBER}</span>
            </a>
            <a
              href="https://www.instagram.com/cepy_hyundai_jabodetabek/"
              className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins sm:text-[24px] text-[16px] "
            >
              <FaInstagram />
              <span>cepy_hyundai_jabodetabek</span>
            </a>
          </div>
          <div className="items-center justify-center avatar">
            <div className="rounded-full w-44 sm:w-72 ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                className="transition duration-300 ease-linear hover:scale-110"
                src={Sales}
                alt="sales"
              />
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-around w-full h-full mx-auto sm:hidden">
          <div className="avatar">
            <div className="w-56 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                className="transition duration-300 ease-linear hover:scale-110"
                src={Sales}
                alt="sales"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full p-4">
            <h1 className="font-poppins font-medium text-white text-[40px] mb-2 transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70">
              Cepy Setiyawan
            </h1>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER_WA}`}
              className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] "
            >
              <FaPhone />
              <span>{process.env.REACT_APP_PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER_WA}`}
              className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] "
            >
              <FaWhatsapp />
              <span>{process.env.REACT_APP_PHONE_NUMBER}</span>
            </a>
            <a
              href="https://www.instagram.com/cepy_hyundai_jabodetabek/"
              className="inline-flex items-center space-x-2 text-white transition ease-linear duration-300 cursor-pointer hover:opacity-100 opacity-70 font-poppins text-[18px] "
            >
              <FaInstagram />
              <span>@cepy_hyundai_jabodetabek</span>
            </a>
          </div>
        </div>

        <div className="sm:w-[65%] w-full px-4 h-full py-4">
          <SimulasiKredit />
        </div>
        <div className="container flex flex-col items-center justify-center py-8 mx-auto space-y-8 text-white font-poppins">
          <div className="w-full h-full border-b-2 border-white" />
          <span className="">
            <span className="space-x-1">
              <span>2023 - Hyundai | Design by</span>
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
