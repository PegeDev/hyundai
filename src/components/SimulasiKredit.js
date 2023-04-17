import React from "react";

function SimulasiKredit() {
  return (
    <div className=" w-full h-full flex  py-8 ">
      <div className="w-full h-full items-center justify-center bg-white flex shadow-sm shadow-white container mx-auto overflow-hidden rounded-[10px]">
        <div className="hidden sm:flex w-full h-full ">
          <img
            className="w-full h-full object-cover object-center"
            src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/123-inch-lcd-cluster.png"
            alt="promo"
          />
        </div>
        <div className="w-full h-full px-4 flex flex-col items-center justify-center space-y-2 py-8 sm:py-0 ">
          <div className="flex-1  font-poppins  font-semibold text-slate-700 text-[36px] ">
            <h2 className="">Simulasi Kredit</h2>
          </div>
          <div className="flex-1 w-full h-full space-y-2 py-8 sm:py-0">
            <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                className="w-full transition ease-linear duration-300 font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                placeholder="Masukan Nama Anda"
              />
              <input
                className="w-full transition ease-linear duration-300 font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                placeholder="Masukan No Handphone"
              />
            </div>
            <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <select
                defaultValue={"HYUNDAI SANTA FE"}
                className="transition ease-linear duration-300 font-poppins text-sm rounded-[4px] p-[4px] uppercase w-full text-black border-2 border-slate-700/50 focus:border-slate-700"
              >
                <option>HYUNDAI SANTA FE</option>
                <option>HYUNDAI IONIQ 5</option>
                <option>HYUNDAI KONA EV</option>
                <option>HYUNDAI PALISADE</option>
                <option>HYUNDAI STARIA</option>
                <option>HYUNDAI CRETA</option>
              </select>
              <select
                defaultValue={"10%"}
                className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
              >
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <select
                className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                defaultValue="Tenor"
              >
                <option>Tenor</option>
                <option>1 Tahun</option>
                <option>2 Tahun</option>
                <option>3 Tahun</option>
                <option>4 Tahun</option>
                <option>5 Tahun</option>
              </select>
              <button className="w-full transition ease-linear duration-300 bg-slate-500 hover:text-white text-white font-semibold border-2 border-slate-500 hover:border-slate-700  hover:bg-slate-700 p-[4px] rounded-[4px] ">
                Hitung Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimulasiKredit;
