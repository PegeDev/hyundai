import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Border from "../assets/images/bg-promo-right.png";
import Tentang from "../components/Tentang";
import { Helmet } from "react-helmet";
function Promo() {
  const [error, setError] = useState();
  const [dataStargazer, setDataStargazer] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI STARGAZER",
    dp: "",
    tenor: "",
  });
  const [dataCreta, setDataCreta] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI CRETA",
    dp: "",
    tenor: "",
  });
  const [dataIoniq, setDataIoniq] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI IONIQ 5",
    dp: "",
    tenor: "",
  });
  const [dataPalisade, setDataPalisade] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI PALISADE",
    dp: "",
    tenor: "",
  });
  const [dataStaria, setDataStaria] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI STARIA",
    dp: "",
    tenor: "",
  });
  const [dataKona, setDataKona] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI KONA EV",
    dp: "",
    tenor: "",
  });
  const [dataSanta, setDataSanta] = useState({
    name: "",
    nomor: "",
    tipe: "HYUNDAI SANTA FE",
    dp: "",
    tenor: "",
  });
  const content = [
    {
      title: "stargazer",
      imgUrl: "/assets/images/promo/stargazer.png",

      desc: [
        { text: "JADI YANG PERTAMA MEMILIKINYA" },
        { text: "Dapatkan Promo DP Murah 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "creta",
      imgUrl: "/assets/images/promo/creta.png",

      desc: [
        { text: "DP MULAI BELASAN JUTAAN" },
        { text: "Dapatkan Promo DP Murah 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 4 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "ioniq 5",
      imgUrl: "/assets/images/promo/ioniq-5.png",

      desc: [
        { text: "Jadi Yang Pertama Memilikinya" },
        { text: "Dapatkan Promo Bunga 10% Dengan Tenor Panjang" },
        { text: "0% Asuransi All Risk" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "palisade",
      imgUrl: "/assets/images/promo/palisade.png",

      desc: [
        { text: "DP MULAI 100 JUTAAN" },
        { text: "Dapatkan Promo Bunga 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 12 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "staria",
      imgUrl: "/assets/images/promo/staria.jpg",
      desc: [
        { text: "DP MURAH 200 JUTAAN" },
        { text: "Ingin Test Drive? Yuk Hubungin Kami" },
        { text: "Pilih Promonya" },
        { text: "" },
      ],
    },
    {
      title: "kona ev",
      imgUrl: "/assets/images/promo/kona.jpg",
      desc: [
        { text: "DP MULAI 130 JUTAAN" },
        { text: "Dapatkan Juga Paket Bunga Spesial Free AC HOME CHARGE" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 11 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "santa fe",
      imgUrl: "/assets/images/promo/santa-fe.png",
      desc: [
        { text: "DP MURAH 80 JUTAAN" },
        { text: "Dapatkan Juga Paket Bunga Spesial Free AC HOME CHARGE" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 12 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
  ];
  const handleDp = (value, name) => {
    if (name === "stargazer")
      return setDataStargazer({
        name: dataStargazer.name,
        nomor: dataStargazer.nomor,
        tipe: dataStargazer.tipe,
        dp: value,
        tenor: dataStargazer.tenor,
      });

    if (name === "creta")
      return setDataCreta({
        name: dataCreta.name,
        nomor: dataCreta.nomor,
        tipe: dataCreta.tipe,
        dp: value,
        tenor: dataCreta.tenor,
      });

    if (name === "ioniq 5")
      return setDataIoniq({
        name: dataIoniq.name,
        nomor: dataIoniq.nomor,
        tipe: dataIoniq.tipe,
        dp: value,
        tenor: dataIoniq.tenor,
      });

    if (name === "palisade")
      return setDataPalisade({
        name: dataPalisade.name,
        nomor: dataPalisade.nomor,
        tipe: dataPalisade.tipe,
        dp: value,
        tenor: dataPalisade.tenor,
      });

    if (name === "staria")
      return setDataStaria({
        name: dataStaria.name,
        nomor: dataStaria.nomor,
        tipe: dataStaria.tipe,
        dp: value,
        tenor: dataStaria.tenor,
      });

    if (name === "kona ev")
      return setDataKona({
        name: dataKona.name,
        nomor: dataKona.nomor,
        tipe: dataKona.tipe,
        dp: value,
        tenor: dataKona.tenor,
      });

    if (name === "santa fe")
      return setDataSanta({
        name: dataSanta.name,
        nomor: dataSanta.nomor,
        tipe: dataSanta.tipe,
        dp: value,
        tenor: dataSanta.tenor,
      });
  };
  const [btnActive, setBtnActive] = useState("");
  console.log({
    dataStargazer,
    dataCreta,
    dataIoniq,
    dataPalisade,
    dataStaria,
    dataKona,
    dataSanta,
  });

  const handleForm = (title) => {
    let name;
    let nomor;
    let type;
    let dp;
    let tenor;

    setBtnActive(title);

    if (title === "stargazer") {
      name = dataStargazer.name;
      nomor = dataStargazer.nomor;
      type = dataStargazer.tipe;
      dp = dataStargazer.dp;
      tenor = dataStargazer.tenor;
    }
    if (title === "creta") {
      name = dataCreta.name;
      nomor = dataCreta.nomor;
      type = dataCreta.tipe;
      dp = dataCreta.dp;
      tenor = dataCreta.tenor;
    }
    if (title === "ioniq 5") {
      name = dataIoniq.name;
      nomor = dataIoniq.nomor;
      type = dataIoniq.tipe;
      dp = dataIoniq.dp;
      tenor = dataIoniq.tenor;
    }
    if (title === "palisade") {
      name = dataPalisade.name;
      nomor = dataPalisade.nomor;
      type = dataPalisade.tipe;
      dp = dataPalisade.dp;
      tenor = dataPalisade.tenor;
    }
    if (title === "staria") {
      name = dataStaria.name;
      nomor = dataStaria.nomor;
      type = dataStaria.tipe;
      dp = dataStaria.dp;
      tenor = dataStaria.tenor;
    }
    if (title === "kona ev") {
      name = dataKona.name;
      nomor = dataKona.nomor;
      type = dataKona.tipe;
      dp = dataKona.dp;
      tenor = dataKona.tenor;
    }
    if (title === "santa fe") {
      name = dataSanta.name;
      nomor = dataSanta.nomor;
      type = dataSanta.tipe;
      dp = dataSanta.dp;
      tenor = dataSanta.tenor;
    }

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

  function handlePhone(name, number) {
    // let phone = String(number).trim();
    // if (phone.startsWith("0")) {
    //   phone = "62" + phone.slice(3);
    // } else if (phone.startsWith("62")) {
    //   // phone = "62" + phone.slice(2);
    // }
    if (name === "stargazer")
      return setDataStargazer({ ...dataStargazer, nomor: number });

    if (name === "creta") return setDataCreta({ ...dataCreta, nomor: number });

    if (name === "ioniq 5")
      return setDataIoniq({ ...dataIoniq, nomor: number });

    if (name === "palisade")
      return setDataPalisade({ ...dataPalisade, nomor: number });

    if (name === "staria") setDataStaria({ ...dataStaria, nomor: number });

    if (name === "kona ev") return setDataKona({ ...dataKona, nomor: number });

    if (name === "santa fe")
      return setDataSanta({ ...dataSanta, nomor: number });
  }
  function handleName(title, value) {
    if (title === "stargazer")
      return setDataStargazer({ ...dataStargazer, name: value });

    if (title === "creta") return setDataCreta({ ...dataCreta, name: value });

    if (title === "ioniq 5") return setDataIoniq({ ...dataIoniq, name: value });

    if (title === "palisade")
      return setDataPalisade({ ...dataPalisade, name: value });

    if (title === "staria")
      return setDataStaria({ ...dataStaria, name: value });

    if (title === "kona ev") return setDataKona({ ...dataKona, name: value });

    if (title === "santa fe")
      return setDataSanta({ ...dataSanta, name: value });
  }
  function handleTenor(title, value) {
    if (title === "stargazer")
      return setDataStargazer({ ...dataStargazer, tenor: value });

    if (title === "creta") return setDataCreta({ ...dataCreta, tenor: value });

    if (title === "ioniq 5")
      return setDataIoniq({ ...dataIoniq, tenor: value });

    if (title === "palisade")
      return setDataPalisade({ ...dataPalisade, tenor: value });

    if (title === "staria")
      return setDataStaria({ ...dataStaria, tenor: value });

    if (title === "kona ev") return setDataKona({ ...dataKona, tenor: value });

    if (title === "santa fe")
      return setDataSanta({ ...dataSanta, tenor: value });
  }
  const handleValue = (title) => {
    if (title === "stargazer") return dataStargazer;
    if (title === "creta") return dataCreta;
    if (title === "ioniq 5") return dataIoniq;
    if (title === "palisade") return dataPalisade;
    if (title === "staria") return dataStaria;
    if (title === "kona ev") return dataKona;
    if (title === "santa fe") return dataSanta;
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Promo - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Promo - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta name="og:image" content={Border} />
      </Helmet>
      <div className="w-full overflow-x-hidden">
        <div className="">
          <Navbar />
        </div>
        <div className="select-none w-full flex  bg-[#FFF7E2]">
          <div className="flex w-full ">
            <div className="absolute top-0 left-0 w-[40%] h-full sm:h-[400px] ">
              <img
                className="object-contain object-right-top w-full h-full -scale-x-100 "
                src={Border}
                alt="banner"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full ">
              <div className="w-full sm:w-[70%] h-full flex flex-col items-center justify-center sm:my-8 mt-16 mb-8 space-y-4">
                <div className="flex flex-col items-center justify-center w-full h-full ">
                  <div className="font-poppins mt-6 text-slate-700 text-[0.8rem] sm:text-[32px] font-semibold text-center">
                    <p className="">HYUNDAI JAKARTA CENTER</p>
                  </div>
                  <div className="flex flex-col items-center justify-center -space-y-4">
                    <h1 className="berkshire text-slate-700 text-[2rem] sm:text-[4rem] text-center">
                      Stargazer & Creta
                    </h1>
                    <h3 className="berkshire text-red-600 text-[2rem] sm:text-[4rem] text-center">
                      Prime
                    </h3>
                  </div>
                </div>
                <div className="w-[70%] sm:w-[60%] h-full ">
                  <div className="border-t-2 border-slate-700" />
                  <div className="grid items-center justify-around grid-cols-3 py-2 divide-x-2 divide-slate-700">
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="font-poppins font-extrabold sm:text-[38px] text-slate-700">
                        TDP
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full leading-none">
                      <p className="font-poppins font-extrabold text-[14px] sm:text-[48px] text-red-500">
                        10
                      </p>
                      <p className="font-poppins text-[10px] sm:text-[18px] text-slate-700">
                        JUTAAN
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full leading-none">
                      <span className="font-poppins font-extrabold text-[10px] sm:text-[32px] text-slate-700">
                        APRIL
                      </span>
                      <p className="font-poppins text-[14px] sm:text-[32px] text-slate-700">
                        2023
                      </p>
                    </div>
                  </div>
                  <div className="border-b-2 border-slate-700" />
                </div>
                <div className="font-poppins rounded-full w-[50%] h-full bg-slate-700 flex flex-col items-center text-[#FFF7E2]  ">
                  <span className="uppercase text-center text-[10px] sm:text-[24px] font-semibold">
                    DAPATKAN PROMO TERBAIK DISINI!
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute  w-[40%] top-0 right-0 h-full  sm:h-[400px]">
              <img
                className="object-contain object-right-top w-full h-full "
                src={Border}
                alt="banner"
              />
            </div>
          </div>
        </div>
        {content.map((val, index) => (
          <div key={index} className="container w-full mx-auto ">
            <div className="flex flex-col items-center justify-center my-20 sm:space-x-4 sm:flex-row sm:items-start">
              <div
                data-aos="fade-up"
                className="w-full flex flex-col items-center justify-center sm:w-[320px] h-full"
              >
                <img
                  className="object-contain object-center w-80"
                  src={val.imgUrl}
                  alt={"product-" + (parseInt(index) + 1)}
                />
                <div className="font-semibold text-slate-700 font-poppins">
                  <span className="uppercase">Promo {val.title}</span>
                </div>
              </div>
              <div className="sm:w-[330px] w-full p-[10px] h-full flex flex-col text-slate-700 space-y-2">
                <div className="space-y-2 text-left uppercase font-poppins">
                  <h2 className=" leading-none font-semibold text-[32px]">
                    {val.desc[0].text}
                  </h2>
                  <p className="font-extrabold text-[12px]">
                    {val.desc[1].text}
                  </p>
                </div>
                <div className="text-left font-poppins">
                  <h2 className="font-light italic text-[19px]">
                    {val.desc[2].text}
                  </h2>
                  <p className="font-extrabold  text-[12px]">
                    {val.desc[3].text}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-[45%] mt-8 p-4  flex flex-col items-center justify-center space-y-2">
                <div className="font-poppins font-semibold text-slate-700 text-[18px]">
                  <h2 className="">Hitung Cicilan Anda Disini</h2>
                </div>
                <div className="flex flex-col w-full space-x-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <input
                    onChange={(e) => handleName(val.title, e.target.value)}
                    // value={() => handleValue(val.title).name}
                    className="transition ease-linear duration-300 w-full font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                    placeholder="Masukan Nama Anda"
                  />
                  <input
                    onChange={(e) => handlePhone(val.title, e.target.value)}
                    // value={() => handleValue(val.title).nomor}
                    type="tel"
                    maxLength={13}
                    className="transition ease-linear duration-300 w-full font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                    placeholder="Masukan No Telepon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full space-x-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 ">
                  <select
                    className="transition ease-linear duration-300 font-poppins text-sm rounded-[4px] disabled:bg-white disabled:text-black p-[4px] uppercase w-full text-black border-2 border-slate-700/50 focus:border-slate-700"
                    disabled
                  >
                    <option>{val.title}</option>
                  </select>
                  <select
                    onChange={(e) => {
                      handleDp(e.target.value, val.title);
                    }}
                    className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                  >
                    <option>DP</option>
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                  </select>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-x-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 ">
                  <select
                    className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                    onChange={(e) => {
                      handleTenor(val.title, e.target.value);
                    }}
                  >
                    <option>Tenor</option>
                    <option>1 Tahun</option>
                    <option>2 Tahun</option>
                    <option>3 Tahun</option>
                    <option>4 Tahun</option>
                    <option>5 Tahun</option>
                  </select>
                  <button
                    onClick={() => handleForm(val.title)}
                    className="w-full transition ease-linear duration-300 bg-slate-500 hover:text-white text-white font-semibold border-2 border-slate-500 hover:border-slate-700  hover:bg-slate-700 p-[4px] rounded-[4px] "
                  >
                    Hitung Sekarang
                  </button>
                </div>

                {error && btnActive === val.title && (
                  <p className="w-full text-xs text-red-600 font-poppins">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div data-aos="fade-up" className="px-4 mx-auto my-16 w-fit">
          <div className=" w-full h-full text-white rounded-[10px] bg-slate-700 flex flex-col sm:flex-row items-center justify-center">
            <div className="px-8 py-4 font-poppins">
              <p className="font-light uppercase">HyundaiJakartaCenter.id</p>
              <h2 className="font-extrabold text-[32px]">
                Kenapa Membeli Disini ?
              </h2>
            </div>
            <div className="px-16 py-8">
              <ul className="list-disc text-[20px]">
                <li>Harga Terbaik</li>
                <li>Banyak Promo Tiap Minggunya</li>
                <li>Konsultasi Pembiayaan Kredit Hyundai</li>
                <li>Ready Stock</li>
                <li>Melayani Trade in Mobil Lama Anda</li>
                <li>Sales Berpengalaman</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <Tentang />
        </div>
      </div>
    </>
  );
}

export default Promo;
