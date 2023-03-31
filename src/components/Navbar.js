import React, { useState } from "react";
import HyundaiLogo from "../assets/hyundai.png";
import { HiMenuAlt3 } from "react-icons/hi";
function Navbar() {
  const [clicked, setClicked] = useState("home");
  const [dropdown, setDropdown] = useState(false);

  const menuClicked = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="fixed sm:static z-50 w-full flex   bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800">
      <div className="relative mx-auto w-[1000px] flex items-center justify-between px-4">
        <div className="w-full">
          <img className="w-[200px]" src={HyundaiLogo} alt="hyundai-logo" />
        </div>
        <div className="">
          <ul className="space-x-10 hidden z-30 sm:flex items-center justify-center font-poppins font-semibold text-white">
            <li
              onClick={() => setClicked("home")}
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <span>Home</span>
              {clicked === "home" && (
                <div className={`absolute bottom-0 border-b-4  w-full`} />
              )}
            </li>
            <li
              onClick={() => setClicked("produk")}
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <span>Produk</span>
              {clicked === "produk" && (
                <div className={`absolute bottom-0 border-b-4  w-full`} />
              )}
            </li>
            <li
              onClick={() => setClicked("promo")}
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <span>Promo</span>
              {clicked === "promo" && (
                <div className={`absolute bottom-0 border-b-4  w-full`} />
              )}
            </li>
          </ul>
          <button
            className="sm:hidden text-white p-4 rounded-full hover:bg-white/20 transition ease-linear"
            type="button"
            onClick={menuClicked}
          >
            <HiMenuAlt3 size={24} />
          </button>
          <div
            className={`sm:hidden ${
              !dropdown
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }   absolute z-10 right-0 bg-white divide-y transition ease-in duration-300 divide-gray-100  shadow w-[50%]  dark:bg-gray-700`}
          >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li
                onClick={() => setClicked("home")}
                className={`block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                <span>Home</span>
              </li>
              <li
                onClick={() => setClicked("produk")}
                className={`block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                <span>Produk</span>
              </li>
              <li
                onClick={() => setClicked("promo")}
                className={`block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                <span>Promo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
