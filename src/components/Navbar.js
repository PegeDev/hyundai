import React, { useState } from "react";
import HyundaiLogo from "../assets/hyundai.png";

function Navbar() {
  const [clicked, setClicked] = useState("home");
  return (
    <div className="w-full flex   bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800">
      <div className="mx-auto w-[1000px] flex items-center justify-between ">
        <div className="w-full">
          <img className="w-[200px]" src={HyundaiLogo} alt="hyundai-logo" />
        </div>
        <div className="">
          <ul className="space-x-10 flex items-center justify-center font-poppins font-semibold text-white">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
