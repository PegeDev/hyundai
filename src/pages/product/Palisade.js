import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Tentang from "../../components/Tentang";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import { Helmet } from "react-helmet";

function Palisade() {
  const [activeThumb1, setActiveThumb1] = useState();
  const [activeThumb2, setActiveThumb2] = useState();
  const palisade = [
    "/assets/images/palisade/001-pc-1024x549.jpg",
    "/assets/images/palisade/002-pc-1024x549.jpg",
    "/assets/images/palisade/003-pc-1024x549.jpg",
    "/assets/images/palisade/004-pc.jpg",
  ];
  const warna = [
    "/assets/images/palisade/moonlight-cloud_9.png",
    "/assets/images/palisade/steel-graphite_9.png",
    "/assets/images/palisade/timeless-black_9.png",
    "/assets/images/palisade/white-cream_9.png",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Palisade - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Palisade - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta
          name="og:image"
          content={"/assets/images/palisade/palisade-banner2-pc.jpg"}
        />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[30rem] overflow-hidden">
            <img
              loading="lazy"
              src="/assets/images/palisade/palisade-banner2-pc.jpg"
              alt="banner"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                Selalu Mengagumkan.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                Eksplorasi di berbagai medan dapat menuntun pada penjelajahan
                yang menakjubkan. Bagi mereka yang memiliki jiwa petualang dan
                ingin menjelajah, Hyundai mempersembahkan PALISADE terbaru,
                kendaraan terbaik segala medan.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src="/assets/images/palisade/001-pc-1024x549.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    Kenang masa itu
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    Hari besar telah tiba, ajak keluarga maupun kerabat, nikmati
                    perjalanan dengan PALISADE menjelajah tempat-tempat spesial.
                    Kenangan indah tercipta kala itu, PALISADE yang membantu
                    mewujudkannya. Apapun muatannya baik penumpang ataupun
                    barang, PALISADE diciptakan untuk mengatasi segala kebutuhan
                    dengan nyaman dan mudah.
                  </p>
                </div>
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/palisade/002-pc-1024x549.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/palisade/003-pc-1024x549.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    Awal yang cerdas.
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    PALISADE sarat dengan fitur pintar teranyar seperti power
                    tailgate yang tidak hanya dapat terbuka dan tertutup secara
                    otomatis namun juga dapat diatur kecepatannya. Posisi
                    ketinggian pintu belakang juga dapat disesuaikan dengan
                    preferensi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                Galery
              </h2>
            </div>
            <div className="w-full h-full my-8 space-y-2">
              <div className="w-full  h-[10rem] sm:h-full ">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#FFFFFF",
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-size": "1.6rem",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  thumbs={{
                    swiper:
                      activeThumb1 && !activeThumb1.destroyed
                        ? activeThumb1
                        : null,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  className="w-full h-full"
                >
                  {palisade.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className="overflow-hidden relative"
                    >
                      <img
                        loading="lazy"
                        className="w-full object-contain object-center"
                        alt={`palisade-${index}`}
                        src={val}
                      />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full h-full py-2">
                <Swiper
                  onSwiper={setActiveThumb1}
                  loop={true}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  className="w-full h-full"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={10}
                >
                  {palisade.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className="select-none overflow-hidden relative my-2"
                    >
                      <img
                        loading="lazy"
                        className="w-full object-cover object-center"
                        alt={`palisade-${index}`}
                        src={val}
                      />
                      <div className="bg-slate-400/20 absolute w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem]">
                Warna
              </h2>
            </div>
            <div className="w-full h-full my-8 space-y-2">
              <div className="w-full  h-[10rem] sm:h-full ">
                <Swiper
                  loop={true}
                  style={{
                    "--swiper-navigation-color": "#FFFFFF",
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-size": "1.6rem",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  thumbs={{
                    swiper:
                      activeThumb2 && !activeThumb2.destroyed
                        ? activeThumb2
                        : null,
                  }}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  lassName="w-full h-full"
                >
                  {warna.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className="overflow-hidden relative"
                    >
                      <img
                        loading="lazy"
                        className="w-full object-contain object-center"
                        alt={`warna-${index}`}
                        src={val}
                      />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full h-full ">
                <Swiper
                  onSwiper={setActiveThumb2}
                  loop={true}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  className="w-full h-full"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={10}
                >
                  {warna.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className=" overflow-hidden relative my-2"
                    >
                      <img
                        loading="lazy"
                        className="w-full object-cover object-center"
                        alt={`warna-${index}`}
                        src={val}
                      />
                      <div className="bg-slate-400/20 absolute w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    MUD Mode
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    Memastikan traksi maksimum bahkan di jalan yang berlumpur
                    sekalipun, berkat unit kopling baru yang menyediakan
                    distribusi torsi yang dikontrol secara elektronik di antara
                    keempat roda. Saat merasakan selip pada roda individu,
                    pengontrol pintar secara otomatis mengimbangi dengan
                    meningkatkan torsi ke roda dengan traksi yang lebih besar.
                  </p>
                </div>
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/palisade/03-mud-pc.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/palisade/04-sand-pc.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    Sand Mode
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    Pengontrol pintar secara otomatis menyesuaikan rasio
                    distribusi daya antara as roda depan/belakang, dan secara
                    otomatis akan mengalokasikan jumlah torsi dan/atau daya
                    pengereman yang tepat ke masing-masing roda untuk memastikan
                    tingkat keselamatan tertinggi pada permukaan yang tertutup
                    pasir.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/06-rhd-sign-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="font-poppins font-medium text-slate-700 w-full text-center">
                  <h2>Electronic All-Wheel Drive System</h2>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/05-auto-transmission-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="font-poppins font-medium text-slate-700 w-full text-center">
                  <h2>8-speed shift-by-wire automatic transmission</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center ">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                Perlindungan tertinggi.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                PALISADE selalu memprioritaskan keselamatan pengemudi dan
                penumpang, Dilengkapi enam sistem airbag dan sistem keamanan
                aktif dengan teknologi keselamatan berkendara yang cerdas.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="w-full h-full  object-cover object-center"
                src="/assets/images/palisade/01-LDW-pc-1024x549.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                Blind-Spot Collision Warning (BCW)
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                Sensor radar di bumper belakang berfungsi untuk memperingatkan
                pengemudi ketika ada kendaraan yang mendekat dalam area titik
                buta.
              </p>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/03-sea-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full flex flex-col  justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    Safe Exit Assist (First in class)
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    PALISADE selalu memprioritaskan keselamatan pengemudi dan
                    penumpang, Dilengkapi enam sistem airbag dan sistem keamanan
                    aktif dengan teknologi keselamatan berkendara yang cerdas.
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/04-airbags-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full flex flex-col  justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    6-Airbag system
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    PALISADE menawarkan 6 airbag: pengemudi dan penumpang depan
                    mendapatkan sepasang airbag depan plus sepasang airbag
                    samping untuk melindungi area dada dan panggul. Terpadat
                    pula airbag di sepanjang pilar kanan dan kiri yang dapat
                    melindungi bagian kepala pengemudi maupun penumpang
                    kendaraan.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/05-park-assit-sign-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full flex flex-col  justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] w-full text-center">
                    Front / rear parking distance warning*
                  </h2>
                  <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                    *Hanya di Signature & Signature AWD
                  </p>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/palisade/02-rcca-pc.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full flex flex-col  justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700  text-[2rem] w-full text-center">
                    Rear Cross-Traffic Collision Warning (RCCW)
                  </h2>
                  <p className="font-poppins   text-slate-700 text-[1rem] italic w-full text-center">
                    Sensor radar di bumper belakang memonitor lalu lintas yang
                    mendekat dari sisi kiri dan kanan kendaraan ketika berjalan
                    mundur, fitur peringatan RCCW dapat diaktifkan jika
                    diperlukan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex flex-col space-y-2 items-center ">
                <h2 className="font-poppins font-semibold text-slate-700 text-[2rem]">
                  Specification
                </h2>
                <div className="flex flex-col w-full items-center  divide-y divide-slate-700">
                  <div className="collapse collapse-arrow text-slate-800 w-full ">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      Spesifikasi
                    </div>
                    <div className="collapse-content ">
                      <div className="overflow-x-hidden p-4">
                        <dl className="divide-y divide-slate-800 border-collapse border border-slate-700 px-4">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Kategori
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              SUV
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Label produk
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              PALISADE – Prime – R 2.2 CRDi 8 Speed Automatic
                              FWD ( Prime )
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Nama model
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              PALISADE
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Tempat Duduk
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              7
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow text-slate-800 w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      Performa
                    </div>
                    <div className="collapse-content">
                      <ul class="space-y-4 text-gray-500 list-disc italic font-poppins list-inside ">
                        <li>
                          Engine
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Engine Type
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>R 2.2 CRDi</li>
                              </ol>
                            </li>
                            <li>
                              Displacement (cc)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>2,199</li>
                              </ol>
                            </li>
                            <li>
                              Max Power (ps/rpm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>147 (200)/3,800</li>
                              </ol>
                            </li>
                            <li>
                              Max Toque (kg-m/rpm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>(45,0)/1,750 – 2,750</li>
                              </ol>
                            </li>
                            <li>
                              Number of Cylinders
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>4</li>
                              </ol>
                            </li>
                            <li>
                              Valves of Cylinders
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>16-valve, HLA</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Transmission
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Transmission Type
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>8 Speed Automatic</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Fuel Consumption
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Fuel Type
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>Diesel</li>
                              </ol>
                            </li>
                            <li>
                              Tank Capacity
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>71 L</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow text-slate-800 w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      Dimensi
                    </div>
                    <div className="collapse-content">
                      <ul class="space-y-4 text-gray-500 list-disc italic font-poppins list-inside ">
                        <li>
                          Exterior
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Length Overall (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>4,980</li>
                              </ol>
                            </li>
                            <li>
                              Width Overall (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,975</li>
                              </ol>
                            </li>
                            <li>
                              Height Overall (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,750</li>
                              </ol>
                            </li>
                            <li>
                              Base Wheel (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>2,900</li>
                              </ol>
                            </li>
                            <li>
                              Front Wheelthread (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,708</li>
                              </ol>
                            </li>
                            <li>
                              Rear Wheelthread (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,716</li>
                              </ol>
                            </li>
                            <li>
                              Front OverHang (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>945</li>
                              </ol>
                            </li>
                            <li>
                              Rear OverHang (mm)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,135</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Weight
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Lightest WeightCurb (kg)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,881</li>
                              </ol>
                            </li>
                            <li>
                              Heaviest WeightCurb (kg)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>1,995</li>
                              </ol>
                            </li>
                            <li>
                              Gross Weight (kg)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>2,610</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Cargo
                          <ol class="pl-5 mt-2 space-y-1 list-disc italic font-poppins list-inside">
                            <li>
                              Cargo Area (L)
                              <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                                <li>704 / 311</li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow text-slate-800 w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      Roda
                    </div>
                    <div className="collapse-content">
                      <ul class="space-y-4 text-gray-500 list-disc italic font-poppins list-inside ">
                        <li>
                          Front Wheels
                          <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                            <li>7.5J x 18″</li>
                          </ol>
                        </li>
                        <li>
                          Rear Wheels
                          <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                            <li>7.5J x 18″</li>
                          </ol>
                        </li>
                        <li>
                          Front Tires
                          <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                            <li>245/60 R18</li>
                          </ol>
                        </li>
                        <li>
                          Rear Tires
                          <ol class="pl-5 mt-2 space-y-1 list-none italic font-poppins list-inside">
                            <li>245/60 R18</li>
                          </ol>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative flex flex-col space-y-2 items-center">
                <h2 className="font-poppins font-semibold text-slate-700 text-[2rem]">
                  Harga Hyundai Palisade
                </h2>
                <div className="flex flex-col ">
                  <div className="overflow-x-hidden p-4">
                    <dl className="divide-y divide-slate-800 border-collapse border border-slate-700 px-4">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Palisade D 2.2 AT prime
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Rp. 777.000.000
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Palisade D 2.2 AT Signature
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Rp. 888.000.000
                        </dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Palisade D 2.2 AT Signature 4WD
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Rp. 1.078.000.000
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
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

export default Palisade;
