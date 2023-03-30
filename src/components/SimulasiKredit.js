import React from "react";

function SimulasiKredit() {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center py-8 container">
      <div
        data-aos="fade-right"
        className=" w-full bg-white flex items-center shadow-sm shadow-white container mx-auto rounded-sm  border-2"
      >
        <div className="w-[400px] h-[360px]">
          <img
            className="object-cover object-center w-full h-full"
            src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/creta-banner-pc.jpg"
            alt="promo"
          />
        </div>
        <div className="flex flex-col py-8 px-16 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <input
              placeholder="Nama Anda"
              className="p-2 focus:border-spacing-2 focus:border-slate-100 bg-slate-100 "
            />
            <input
              placeholder="Nomor Telepon"
              className="p-2 focus:border-spacing-2 focus:border-slate-100 bg-slate-100 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimulasiKredit;
