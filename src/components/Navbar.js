import React, { useState } from "react";
import HyundaiLogo from "../assets/hyundai.png";
import { HiChevronDown, HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { click } from "@testing-library/user-event/dist/click";
function Navbar() {
  const [clicked, setClicked] = useState("home");
  const [dropdown, setDropdown] = useState(false);
  const [produk, setProduk] = useState(false);
  const menuClicked = () => {
    setDropdown(!dropdown);
    setProduk(true);
  };
  return (
    <div className="fixed sm:static z-50 w-full flex   bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800">
      <div className="relative mx-auto w-[1000px] flex items-center justify-between px-4">
        <div className="w-full">
          <img className="w-[200px]" src={HyundaiLogo} alt="hyundai-logo" />
        </div>
        <div className="flex space-x-8 font-bold">
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
              onClick={() => setClicked("promo")}
              className={`relative py-3 flex items-center select-none cursor-pointer justify-center`}
            >
              <span>Promo</span>
              {clicked === "promo" && (
                <div className={`absolute bottom-0 border-b-4  w-full`} />
              )}
            </li>
          </ul>

          {/* Desktop Navbar Items */}
          <div class="hidden sm:flex dropdown dropdown-bottom dropdown-end">
            <label
              tabindex="0"
              onClick={() => {
                setProduk(true);
                setClicked("produk");
              }}
              className={`relative gap-2 text-white font-poppins py-3  sm:flex items-center select-none cursor-pointer justify-center`}
            >
              <span>Produk</span>
              <span
                className={`${
                  produk && clicked === "produk" ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown />
              </span>
              <div
                className={`${
                  clicked !== "produk" && "hidden"
                } absolute bottom-0 border-b-4  w-full`}
              />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-none mt-2 rounded-box w-52 bg-white p-2  text-sm text-gray-700"
            >
              <li
                // onClick={() => setClicked("home")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>All New Pallisade</span>
              </li>
              <li
                // onClick={() => setClicked("produk")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>Ioniq 5</span>
              </li>
              <li
                // onClick={() => setClicked("promo")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>Kona Electric</span>
              </li>
              <li
                // onClick={() => setClicked("promo")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>KONA</span>
              </li>
              <li
                // onClick={() => setClicked("promo")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>SANTA FE</span>
              </li>
            </ul>
          </div>

          {/* Mobile Navbar Items */}
          <div class="flex sm:hidden dropdown dropdown-bottom dropdown-end">
            <label
              tabindex="0"
              className={`relative gap-2 text-white font-poppins py-3  sm:flex items-center select-none cursor-pointer justify-center`}
            >
              <HiMenuAlt3 size={30} />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-none mt-2 rounded-box w-52 bg-white p-2  text-sm text-gray-700"
            >
              <li
                onClick={() => setClicked("home")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>Home</span>
              </li>

              <li
                onClick={() => setClicked("promo")}
                className={`block text-center hover:bg-gray-100`}
              >
                <span>Promo</span>
              </li>
              <li className="menu-title">
                <span>Produk</span>
              </li>
              <li
                className={`block pl-2 text-[12px] text-center hover:bg-gray-100`}
              >
                <span>All New Pallisade</span>
              </li>
              <li
                className={`block pl-2 text-[12px] text-center hover:bg-gray-100`}
              >
                <span>Ioniq 5</span>
              </li>
              <li
                className={`block pl-2 text-[12px] text-center hover:bg-gray-100`}
              >
                <span>Kona Electric</span>
              </li>
              <li
                className={`block pl-2 text-[12px] text-center hover:bg-gray-100`}
              >
                <span>KONA</span>
              </li>
              <li
                className={`block pl-2 text-[12px] text-center hover:bg-gray-100`}
              >
                <span>SANTA FE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
