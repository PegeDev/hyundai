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
import "./santafe.css";
import { Navigation, Thumbs, Pagination, Autoplay, FreeMode } from "swiper";
import { Helmet } from "react-helmet";

function Staria() {
  const [activeThumb1, setActiveThumb1] = useState();
  const staria = [
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-mud-pfx4s7fi14qaaq38mqd9t815jrkyzvnnfjh1v0q7tc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-sand-pfx4s8dc7yrkmc1vh8rwdpsm55gc7krdro4jcaotn4.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-ivt-pfx4s5jtngnpni5yxpk0o8i8czu8khg6ra62wgt05s.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-mud-pfx4s7fi14qaaq38mqd9t815jrkyzvnnfjh1v0q7tc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-sand-pfx4s8dc7yrkmc1vh8rwdpsm55gc7krdro4jcaotn4.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-ivt-pfx4s5jtngnpni5yxpk0o8i8czu8khg6ra62wgt05s.jpg",
  ];
  const warna = [
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Hitam-768x310.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Putih-768x310.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Silver-768x312.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Putih-768x310.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Grey-768x312.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Hitam-768x310.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Silver-768x312.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Putih-768x310.jpg",
  ];
  const interior = [
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-1-768x411.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-2-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-3-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-4-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-5-1-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-6-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-7-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-8-768x411.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-9-768x411.jpg",
  ];
  const exterior = [
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-17-inch-pfx49l8ko98ucr4qc6o9xf5i01c9jor17ebuoqbx1s.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-LED-Rear-Combination-Lamp-pfx49m6ev3a4od3d6p2whwwylf7mrdurjizc60aivk.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-LED-Headlamp--pfx49n491xbezz2017hj2eof6t2zz2yhvnmtna94pc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-Parametric-Jewel-Pattern-Grille-Hidden-type-LED-DRL-pfx49o238rcpbl0mvpw5mwfvs6yd6s287sab4k7qj4.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-LED-Rear-Combination-Lamp-pfx49m6ev3a4od3d6p2whwwylf7mrdurjizc60aivk.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-LED-Headlamp--pfx49n491xbezz2017hj2eof6t2zz2yhvnmtna94pc.jpg",
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
        <meta
          name="og:image"
          content={
            "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria.jpg"
          }
        />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full sm:h-[500px] h-[250px] overflow-hidden">
            <img
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria.jpg"
              alt="banner"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
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
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Larger than life.
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
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
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria-Highlight-Larger-Than-Life-pc-1024x549.webp"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Launch into a new dimension.
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
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
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria-Highlight-Launch-Into-New-Dimension-pc-1-1024x549.webp"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Galery
              </h2>
            </div>
            <div className="select-none">
              <Swiper
                loop={true}
                slidesPerView={4}
                style={{
                  "--swiper-navigation-color": "rgb(255 255 255)",
                  "--swiper-pagination-color": "rgb(255 255 255)",
                  "--swiper-navigation-size": "25px",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
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
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Warna
              </h2>
            </div>
            <div className="select-none space-y-2 w-full h-full">
              <Swiper
                loop={true}
                style={{
                  "--swiper-navigation-color": "rgb(255 255 255)",
                  "--swiper-pagination-color": "rgb(255 255 255)",
                  "--swiper-navigation-size": "25px",
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
                className="slider-warna-1"
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
              <Swiper
                onSwiper={setActiveThumb1}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="slider-warna-2"
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
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col my-8 items-center justify-center">
              <h2 className="font-poppins font-semibold text-slate-700 text-[28px]">
                Exterior
              </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-2 ">
              <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-5-1-1024x549.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/tinted-brass.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/full-led-headlamp.webp"
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
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/samping-akordeon-pc-1024x309.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/first-laminated-glass.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/3-kolom-samping.webp"
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
              <h2 className="font-poppins font-semibold text-slate-700 text-[28px]">
                Interior
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria-Interior-9-Seat-Black-pc-1024x549.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria-Interior-7-Seat-Black-pc-1024x549.webp"
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
              <h2 className="font-poppins text-center font-semibold text-slate-700 text-[36px]">
                Nikmati kenyamanan setara First Class
              </h2>
            </div>
            <div className="w-full h-full relative flex items-center justify-center">
              <img
                className="w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-1-1-1024x549.jpg"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full flex flex-col items-center space-y-2 ">
                <div className="w-full relative flex flex-col items-center space-y-2 justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/7-seat-heat-seat.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/7-seat-ventilated.jpg"
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
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/Staria-Interior-Seat-Button-pc-1024x549.jpg"
                alt=""
              />
              {/* <div className="bg-slate-400/20 absolute w-full h-full " /> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Powerful performance.
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/crrdi-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/gallery-8-1-1024x549.webp"
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
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/8-speed-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full  flex flex-col items-center space-y-2 justify-center">
                <div className="w-full relative flex flex-col items-center ">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/08/eco-1024x549.webp"
                    alt=""
                  />
                  {/* <div className="bg-slate-400/20 absolute w-full h-full" /> */}
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

export default Staria;
