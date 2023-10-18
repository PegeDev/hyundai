import React, { useState } from "react";

function SimulasiKredit() {
  const [name, setName] = useState("");
  const [nomor, setNomor] = useState("");
  const [type, setType] = useState("");
  const [tenor, setTenor] = useState("");
  const [dp, setDp] = useState("");
  const [error, setError] = useState("");
  const handleForm = () => {
    if (name === "") return setError("Mohon Isi Nama terlebih Dahulu");
    if (nomor === "") return setError("Mohon Isi Nomor terlebih Dahulu");
    if (type === "") return setError("Mohon Isi Type terlebih Dahulu");
    if (dp === "") return setError("Mohon Isi Dp terlebih Dahulu");
    if (tenor === "") return setError("Mohon Isi Tenor terlebih Dahulu");

    setError("");
    const bodyMessage = `Mohon Diberikan Rincian Kredit Mobil:\n\nNama : ${name}\nNo Handphone : ${nomor}\nTipe Mobil : ${type}\nDP : ${dp}\nTenor : ${tenor}\n\nTerima Kasih\n${name}`;
    const PARAMS = {
      phone: process.env.REACT_APP_NUMBER_WA,
      text: bodyMessage,
    };
    const qsObj = new URLSearchParams(PARAMS);
    const qs = qsObj.toString();
    window.location.replace(`https://api.whatsapp.com/send?${qs}`);
  };
  function normalisasiNomorHP(phone) {
    phone = String(phone).trim();
    if (phone.startsWith("0")) {
      phone = "62" + phone.slice(3);
    } else if (phone.startsWith("62")) {
      phone = "62" + phone.slice(2);
    }
    setNomor(phone.replace(/[- .]/g, ""));
  }
  return (
    <div className="flex w-full h-full py-8 ">
      <div className="w-full h-full items-center justify-center bg-white flex shadow-sm shadow-white container mx-auto overflow-hidden rounded-[10px]">
        <div className="hidden w-full h-full sm:flex">
          <img
            className="object-cover object-center w-full h-full"
            src="/assets/images/123-inch-lcd-cluster.png"
            alt="promo"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-8 space-y-2 sm:py-0 ">
          <div className="flex-1  font-poppins  font-semibold text-slate-700 text-[36px] ">
            <h2 className="">Simulasi Kredit</h2>
          </div>
          <div className="flex-1 w-full h-full py-8 space-y-2 sm:py-0">
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="w-full transition ease-linear duration-300 font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                placeholder="Masukan Nama Anda"
              />
              <div className="flex flex-col w-full">
                <input
                  onChange={(e) => normalisasiNomorHP(e.target.value)}
                  value={nomor}
                  type="tel"
                  className="w-full transition ease-linear duration-300 font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                  placeholder="Masukan No Handphone"
                  maxLength={14}
                />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <select
                onChange={(e) => setType(e.target.value)}
                defaultValue={type}
                className="transition ease-linear duration-300 font-poppins text-sm rounded-[4px] p-[4px] uppercase w-full text-black border-2 border-slate-700/50 focus:border-slate-700"
              >
                <option>TIPE</option>
                <option>HYUNDAI SANTA FE</option>
                <option>HYUNDAI IONIQ 5</option>
                <option>HYUNDAI KONA EV</option>
                <option>HYUNDAI PALISADE</option>
                <option>HYUNDAI STARIA</option>
                <option>HYUNDAI CRETA</option>
              </select>
              <select
                defaultValue={dp}
                onChange={(e) => setDp(e.target.value)}
                className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
              >
                <option>DP</option>
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
              </select>
            </div>

            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <select
                className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                defaultValue={tenor}
                onChange={(e) => setTenor(e.target.value)}
              >
                <option>Tenor</option>
                <option>1 Tahun</option>
                <option>2 Tahun</option>
                <option>3 Tahun</option>
                <option>4 Tahun</option>
                <option>5 Tahun</option>
              </select>
              <button
                onClick={() => handleForm()}
                className="w-full transition ease-linear duration-300 bg-slate-500 hover:text-white font-poppins text-white font-semibold border-2 border-slate-500 hover:border-slate-700  hover:bg-slate-700 p-[4px] rounded-[4px] "
              >
                Hitung Sekarang
              </button>
            </div>
          </div>
          {error !== "" && (
            <p className="w-full text-red-600 font-poppins">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimulasiKredit;
