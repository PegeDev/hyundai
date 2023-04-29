import React from "react";
import HyundaiLogo from "../assets/hyundai.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="fixed z-50 w-full flex  bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800">
      <div className="relative mx-auto w-[62rem] flex items-center justify-between px-4">
        <a href={"/"} className="w-full">
          <img className="w-[12rem]" src={HyundaiLogo} alt="hyundai-logo" />
        </a>
        <div className="flex space-x-8 font-bold">
          <ul className="space-x-10 hidden z-30 sm:flex items-center justify-center font-poppins font-semibold text-white">
            <li
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <a href={"/"}>
                <span>Home</span>
                {location.pathname === "/" && location.hash === "" && (
                  <div className={`absolute bottom-0 border-b-4  w-full`} />
                )}
              </a>
            </li>

            <li
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <a href={"/#produk"}>
                <span>Produk</span>
                {location.pathname === "/" && location.hash === "#produk" && (
                  <div className={`absolute bottom-0 border-b-4  w-full`} />
                )}
              </a>
            </li>

            <li
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <a href={"/#promo"}>
                <span>Promo</span>
                {location.pathname === "/" && location.hash === "#promo" && (
                  <div className={`absolute bottom-0 border-b-4  w-full`} />
                )}
              </a>
            </li>
          </ul>

          {/* Mobile Navbar Items */}
          <div className="flex sm:hidden dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex="0"
              className={`relative gap-2 text-white font-poppins py-3  sm:flex items-center select-none cursor-pointer justify-center`}
            >
              <HiMenuAlt3 size={30} />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu bg-none mt-2 rounded-box w-52 bg-white p-2  text-sm text-gray-700"
            >
              <li className={`block text-center hover:bg-gray-100`}>
                <a href="/">
                  <span>Home</span>
                </a>
              </li>

              <li className={`block text-center hover:bg-gray-100`}>
                <a href="/#promo">
                  <span>Promo</span>
                </a>
              </li>
              <li className={`block text-center hover:bg-gray-100`}>
                <a href="/#produk">
                  <span>Product</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
