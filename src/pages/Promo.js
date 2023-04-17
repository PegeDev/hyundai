import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Border from "../assets/images/bg-promo-right.png";
import Tentang from "../components/Tentang";
import { Helmet } from "react-helmet";
function Promo() {
  const content = [
    {
      title: "stargazer",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/2022/07/Stargazer-Putih_480.webp",

      desc: [
        { text: "JADI YANG PERTAMA MEMILIKINYA" },
        { text: "Dapatkan Promo DP Murah 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "creta",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/su2id-dragon_0-pfx41b9tm1kznezg07cf97zd469ls7nenhsuitbv6o.jpg",

      desc: [
        { text: "DP MULAI BELASAN JUTAAN" },
        { text: "Dapatkan Promo DP Murah 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 4 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "ioniq 5",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/wtw_27-pmqe4jwnv9ruz1uc5heegzrgsy8m3n2sjg7tr6oiw0.webp",

      desc: [
        { text: "Jadi Yang Pertama Memilikinya" },
        { text: "Dapatkan Promo Bunga 10% Dengan Tenor Panjang" },
        { text: "0% Asuransi All Risk" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "palisade",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/moonlight-cloud_9-p6hjgg2mjikslmt2j3klf3rz48k3ut8gln4ylnjqg0.png",

      desc: [
        { text: "DP MULAI 100 JUTAAN" },
        { text: "Dapatkan Promo Bunga 10% Dengan Tenor Panjang" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 12 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "staria",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/Putih-pbxfuagur15pjfgbinh9vw9sq5jptefrzwey5gh50g.jpg",

      desc: [
        { text: "DP MURAH 200 JUTAAN" },
        { text: "Ingin Test Drive? Yuk Hubungin Kami" },
        { text: "Pilih Promonya" },
        { text: "" },
      ],
    },
    {
      title: "kona ev",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/galatic-gray-2-p6hjkfvxl61nxz067bqiilhi06v9ki3e5ey90zmi00.png",

      desc: [
        { text: "DP MULAI 130 JUTAAN" },
        { text: "Dapatkan Juga Paket Bunga Spesial Free AC HOME CHARGE" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 11 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
    {
      title: "santa fe",
      imgUrl:
        "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/glacier-white-p6hjkxqv70q42ka8b1gfbyz9aif8mr2ajvch58w0ps.png",
      desc: [
        { text: "DP MURAH 80 JUTAAN" },
        { text: "Dapatkan Juga Paket Bunga Spesial Free AC HOME CHARGE" },
        { text: "ATAU PILIH PAKET CICILAN RINGAN 12 JUTAAN" },
        { text: "Dengan Promo Bunga Murah" },
      ],
    },
  ];
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
          <div className=" flex w-full ">
            <div className="absolute top-0 left-0 w-[40%] h-full sm:h-[400px] ">
              <img
                className="w-full h-full  object-contain object-right-top  -scale-x-100  "
                src={Border}
                alt="banner"
              />
            </div>
            <div className="w-full  h-full flex flex-col items-center justify-center ">
              <div className="w-full sm:w-[70%] h-full flex flex-col items-center justify-center sm:my-8 mt-16 mb-8 space-y-4">
                <div className="w-full h-full flex flex-col items-center justify-center ">
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
                  <div className=" grid grid-cols-3  items-center justify-around py-2 divide-x-2  divide-slate-700">
                    <div className="flex  w-full h-full items-center justify-center">
                      <span className="font-poppins font-extrabold sm:text-[38px] text-slate-700">
                        TDP
                      </span>
                    </div>
                    <div className="flex  w-full h-full flex-col items-center justify-center leading-none">
                      <p className="font-poppins font-extrabold text-[14px] sm:text-[48px] text-red-500">
                        10
                      </p>
                      <p className="font-poppins text-[10px] sm:text-[18px] text-slate-700">
                        JUTAAN
                      </p>
                    </div>
                    <div className="flex  w-full h-full flex-col items-center justify-center leading-none">
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
                className="w-full h-full object-contain object-right-top    "
                src={Border}
                alt="banner"
              />
            </div>
          </div>
        </div>
        {content.map((val, index) => (
          <div key={index} className="w-full container mx-auto ">
            <div className="flex flex-col items-center justify-center sm:space-x-4 my-20 sm:flex-row sm:items-start">
              <div
                data-aos="fade-up"
                className="w-full flex flex-col items-center justify-center sm:w-[320px] h-full"
              >
                <img
                  className="w-80 object-contain object-center"
                  src={val.imgUrl}
                  alt={"product-" + index + 1}
                />
                <div className="font-semibold text-slate-700 font-poppins">
                  <span className="uppercase">Promo {val.title}</span>
                </div>
              </div>
              <div className="sm:w-[330px] w-full p-[10px] h-full flex flex-col text-slate-700 space-y-2">
                <div className="uppercase font-poppins  text-left space-y-2">
                  <h2 className=" leading-none font-semibold text-[32px]">
                    {val.desc[0].text}
                  </h2>
                  <p className="font-extrabold text-[12px]">
                    {val.desc[1].text}
                  </p>
                </div>
                <div className="font-poppins  text-left">
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
                <div className="w-full flex flex-col sm:flex-row space-y-2 space-x-0  sm:space-y-0 sm:space-x-2">
                  <input
                    className="transition ease-linear duration-300 w-full font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                    placeholder="Masukan Nama Anda"
                  />
                  <input
                    className="transition ease-linear duration-300 w-full font-poppins text-sm rounded-[4px] border-2 text-black p-[4px] border-slate-700/50 focus:border-slate-700"
                    placeholder="Masukan No Telepon"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-center sm:flex-row space-y-2 space-x-0  sm:space-y-0 sm:space-x-2 ">
                  <select
                    className="transition ease-linear duration-300 font-poppins text-sm rounded-[4px] p-[4px] uppercase w-full text-black border-2 border-slate-700/50 focus:border-slate-700"
                    placeholder="Stargazer"
                  >
                    <option selected>{val.title}</option>
                  </select>
                  <select
                    className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                    placeholder="Stargazer"
                  >
                    <option selected>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                  </select>
                </div>
                <div className="w-full flex flex-col  items-center justify-center  sm:flex-row space-y-2 space-x-0  sm:space-y-0 sm:space-x-2 ">
                  <select
                    className="rounded-[4px] p-[4px] w-full text-black border-2 border-slate-700/50 uppercase focus:border-slate-700"
                    placeholder="Stargazer"
                  >
                    <option selected>Tenor</option>
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
        ))}
        <div data-aos="fade-up" className=" mx-auto w-fit my-16 px-4">
          <div className=" w-full h-full text-white rounded-[10px] bg-slate-700 flex flex-col sm:flex-row items-center justify-center">
            <div className=" px-8 py-4 font-poppins ">
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
