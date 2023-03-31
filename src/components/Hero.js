import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <img
        className="object-cover object-center w-full h-[800px]"
        src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-impression-performance.jpg"
        alt="test"
      />
      <div className="absolute w-full h-[50%] bottom-0 bg-gradient-to-t from-black flex flex-col items-start px-20 justify-center sm:items-center animate-fade-in-up">
        <h1 className="font-poppins shadow-2xl font-extrabold  text-white text-[48px] sm:text-[64px] ">
          HYUNDAI CRETA
        </h1>
        <button className="bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800 drop-shadow-sm select-none px-4 py-2 text-lg  font-semibold text-white rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Hero;
