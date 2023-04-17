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

function Creta() {
  const [activeThumb2, setActiveThumb2] = useState();
  const creta = [
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-mud-pfx4s7fi14qaaq38mqd9t815jrkyzvnnfjh1v0q7tc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-sand-pfx4s8dc7yrkmc1vh8rwdpsm55gc7krdro4jcaotn4.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-ivt-pfx4s5jtngnpni5yxpk0o8i8czu8khg6ra62wgt05s.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-mud-pfx4s7fi14qaaq38mqd9t815jrkyzvnnfjh1v0q7tc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-sand-pfx4s8dc7yrkmc1vh8rwdpsm55gc7krdro4jcaotn4.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-ivt-pfx4s5jtngnpni5yxpk0o8i8czu8khg6ra62wgt05s.jpg",
  ];
  const warna = [
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-creamywhi_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-dragon_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-galaxy_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-glowing_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-magnetic_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-midnight_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-titangrey_0-768x576.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-galaxy_0-768x576.jpg",
  ];
  const interior = [
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/1-kolom-ivt-pfx4s5jtngnpni5yxpk0o8i8czu8khg6ra62wgt05s.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-8-inch-Display-Audio-with-Smartphone-Integration-pfx4heabfpxks5shr25q4y8bm8v0h6qry1e16gr7dc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-Ambient-Mood-Lamp-pfx4hf85mjyv3rr4lkkcpfzs7mqdovuia61inqpt74.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-flexi-comfort-seat-pfx4hi1o722q2ln153s8exa5zschbz5pajzz3klmog.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-flexi-seat-pfx4hlt0ye7vd1hkj5eqowc0dbty6rkmn2lx0og1zk.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-spacious-kabin-pfx4hrg23eflap9dm7ui3uwrxn25gy70nuitwc7oy8.webp",
    "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/2-kolom-spacious-cabin-pfx4homjiwbqbvdh2ommedme5hg1tuvtngkdgibvgw.jpg",
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
        <title>Creta - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Creta - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta
          name="og:image"
          content={
            "https://dealermobilhyundai.id/wp-content/uploads/2021/11/banner-depan-no-text-CRETA-pc.jpg"
          }
        />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              loading="lazy"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/banner-depan-no-text-CRETA-pc.jpg"
              alt="banner"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Spotlight in motion.
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
                Didesain untukmu yang selalu jeli melihat sisi terbaik dari
                segala tantangan. Bersiap hadapi perubahan, sigap menyesuaikan
                langkah. Ini saatnya nyalakan sinarmu dan pancarkan. Jadilah
                spotlight dalam perjalanan menuju masa depan.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-spotlight-in-motion-pc.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Warna
              </h2>
            </div>
            <div className="select-none">
              <Swiper
                loop={true}
                style={{
                  "--swiper-navigation-color": "rgb(51 65 85)",
                  "--swiper-pagination-color": "rgb(51 65 85)",
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
                className="slider2 select-none"
              >
                {warna.map((val, index) => (
                  <SwiperSlide key={index} className="overflow-hidden relative">
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
              <Swiper
                onSwiper={setActiveThumb2}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slider"
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
          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Exterior
              </h2>
            </div>
            <div className="select-none">
              <Swiper
                loop={true}
                slidesPerView={3}
                style={{
                  "--swiper-navigation-color": "rgb(255 255 255)",
                  "--swiper-pagination-color": "rgb(255 255 255)",
                  "--swiper-navigation-size": "25px",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-full"
              >
                {exterior.map((val, index) => (
                  <SwiperSlide key={index} className="w-full full">
                    <img
                      loading="lazy"
                      className="  object-contain object-center"
                      src={val}
                      alt={`exterior-design-${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="sm:w-[80%] w-full px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Interior
              </h2>
            </div>
            <div className="select-none">
              <Swiper
                loop={true}
                slidesPerView={3}
                onChange={(e) => console.log("change")}
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
                  <SwiperSlide key={index} className="w-full full">
                    <img
                      loading="lazy"
                      className="  object-contain object-center"
                      src={val}
                      alt={`exterior-design-${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="block w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-impression-performance.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="block w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-smart-stream-ID-1024x411.jpg"
                alt=""
              />
            </div>
            <div className="">
              <Swiper
                loop={true}
                slidesPerView={3}
                onChange={(e) => console.log("change")}
                style={{
                  "--swiper-navigation-color": "rgb(255 255 255)",
                  "--swiper-pagination-color": "rgb(255 255 255)",
                  "--swiper-navigation-size": "25px",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-full"
              >
                {creta.map((val, index) => (
                  <SwiperSlide key={index} className="w-full full">
                    <img
                      loading="lazy"
                      className="  object-contain object-center"
                      src={val}
                      alt={`exterior-design-${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Build My Own CRETA.
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
                Saatnya memilih spotlight Anda sendiri melalui My Own CRETA.
                Tersedia lebih dari 9000 kombinasi pilihan untuk menciptakan
                CRETA yang paling sesuai dengan pribadi Anda.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-build-my-own-creta-1024x505.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
                Owner Assurance Program
              </h2>
              <p className="font-poppins  text-slate-700 text-[18px] italic">
                Dengan jaringan yang tersebar di seluruh Indonesia, Hyundai siap
                memberikan ketenangan bagi Anda melalui program purna jual
                berikut.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/11/1-kolom-owner-assurance-program-pc-1024x549.jpg"
                alt=""
              />
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

export default Creta;
