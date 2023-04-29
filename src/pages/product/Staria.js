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

function Staria() {
  const [activeThumb1, setActiveThumb1] = useState();
  const warna = [
    "/assets/images/staria/Hitam-768x310.jpg",
    "/assets/images/staria/Putih-768x310.jpg",
    "/assets/images/staria/Silver-768x312.jpg",
    "/assets/images/staria/Putih-768x310.jpg",
    "/assets/images/staria/Grey-768x312.jpg",
    "/assets/images/staria/Hitam-768x310.jpg",
    "/assets/images/staria/Silver-768x312.jpg",
    "/assets/images/staria/Putih-768x310.jpg",
  ];
  const interior = [
    "/assets/images/staria/gallery-1-768x411.jpg",
    "/assets/images/staria/gallery-2-768x411.webp",
    "/assets/images/staria/gallery-3-768x411.webp",
    "/assets/images/staria/gallery-4-768x411.webp",
    "/assets/images/staria/gallery-5-1-768x411.webp",
    "/assets/images/staria/gallery-6-768x411.webp",
    "/assets/images/staria/gallery-7-768x411.webp",
    "/assets/images/staria/gallery-8-768x411.webp",
    "/assets/images/staria/gallery-9-768x411.jpg",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Staria - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Staria - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta name="og:image" content={"/assets/images/staria/Staria.jpg"} />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full sm:h-[31.25rem] h-[15.625rem] overflow-hidden">
            <img
              src="/assets/images/staria/Staria.jpg"
              alt="banner"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Hyundai is in progress to achieve carbon neutrality by 2045.
              </h2>
            </div>
            <div className="w-full h-full">
              <iframe
                className="w-full h-full aspect-video"
                loading="lazy"
                src="https://www.youtube.com/embed/aRWKuFQLMo0"
                title="Feel the Joy, Feel the Excitement of Hyundai STARIA Signature 7 | #LargerThanLife"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Larger than life.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Bagi Anda yang selalu membuka ruang demi kesuksesan, bersiaplah
                menjalani pencapaian demi pencapaian bersama STARIA. STARIA
                merevolusi fungsi ruang berkendara untuk berpegian dalam
                kenyamanan yang maksimal, melakukan percakapan tatap muka yang
                menyenangkan selama perjalanan, sambil menikmati momen-momen
                yang memperkaya hidup Anda.
              </p>
            </div>
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/staria/Staria-Highlight-Larger-Than-Life-pc-1024x549.webp"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Launch into a new dimension.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Mengadopsi gaya on-curve design, STARIA mengaplikasikan inovasi
                terbarunya pada rancang bentuk kendaraan MPV. Siluet
                futuristiknya membungkus berbagai fitur teknologi terdepan untuk
                berkendara yang semakin aman, nyaman dan mudah. Lebih dari
                sekedar membangun estetika desain, STARIA menciptakan kelas dan
                standar kemewahan yang baru di segmen MPV.
              </p>
            </div>
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/staria/Staria-Highlight-Launch-Into-New-Dimension-pc-1-1024x549.webp"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Galery
              </h2>
            </div>
            <div className="select-none">
              <Swiper
                loop={true}
                style={{
                  "--swiper-navigation-color": "#FFFFFF",
                  "--swiper-pagination-color": "#FFFFFF",
                  "--swiper-navigation-size": "1.6rem",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-full"
              >
                {interior.map((val, index) => (
                  <SwiperSlide key={index} className="w-full full relative">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src={val}
                      alt={`galery-${index}`}
                    />
                    {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 h-full ">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Warna
              </h2>
            </div>
            <div className="select-none space-y-2 w-full h-full">
              <div className="w-full h-[10rem] sm:h-full ">
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
                  watchSlidesProgress={true}
                  thumbs={{
                    swiper:
                      activeThumb1 && !activeThumb1.destroyed
                        ? activeThumb1
                        : null,
                  }}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  className="w-full h-full"
                >
                  {warna.map((val, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className={"w-full h-full object-contain object-center"}
                        alt={`warna-${index}`}
                        src={val}
                      />
                      {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full h-full">
                <Swiper
                  onSwiper={setActiveThumb1}
                  loop={true}
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
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="w-full h-full"
                >
                  {warna.map((val, index) => (
                    <SwiperSlide key={index} className="w-full h-full relative">
                      <img
                        className={"w-full h-full object-contain object-center"}
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
            <div className="w-full flex flex-col my-8 items-center justify-center">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem]">
                Exterior
              </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-2 ">
              <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/staria/gallery-5-1-1024x549.webp"
                  alt=""
                />
                {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                  LED DRL Welcoming Light.
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col  space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/tinted-brass.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Tinted Brass Chrome Bumper
                  </h2>
                </div>
              </div>
              <div className="w-full  flex flex-col  space-y-2 ">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/full-led-headlamp.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Full LED Headlamps
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-2 ">
              <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/staria/samping-akordeon-pc-1024x309.webp"
                  alt=""
                />
                {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/first-laminated-glass.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center ">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    1st-row Double-laminated Soundproof Glass
                  </h2>
                </div>
              </div>
              <div className="w-full  flex flex-col space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/3-kolom-samping.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    18" Tinted Brass Alloy Wheels
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col my-8 items-center justify-center">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem]">
                Interior
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/Staria-Interior-9-Seat-Black-pc-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Signature 9
                  </h2>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/Staria-Interior-7-Seat-Black-pc-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Signature 7
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins text-center font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Nikmati kenyamanan setara First Class
              </h2>
            </div>
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/staria/gallery-1-1-1024x549.jpg"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/7-seat-heat-seat.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Signature 9
                  </h2>
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/7-seat-ventilated.jpg"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="font-poppins font-semibold text-slate-700 text-[16px] sm:text-[22px]">
                    Signature 7
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/staria/Staria-Interior-Seat-Button-pc-1024x549.jpg"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Powerful performance.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Dengan 8-speed Automatic Shift-by-wire, STARIA menghasilkan
                performa yang mantap, lebih bertenaga dan efisien. Juga
                dilengkapi Drive Mode untuk pilihan performa yang paling sesuai
                untuk Anda: COMFORT untuk mengemudi sehari-hari, ECO untuk
                efisiensi bahan bakar yang lebih optimal, SPORT untuk performa
                kendaraan yang lebih maksimal, atau SMART yang secara otomatis
                menyesuaikan interval perpindahan gigi berdasarkan pola
                mengemudi.
              </p>
            </div>
          </div>

          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/crrdi-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/gallery-8-1-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/8-speed-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/staria/eco-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tentang />
        </div>
      </div>
    </>
  );
}

export default Staria;
