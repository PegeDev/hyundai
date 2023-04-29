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

function Ioniq5() {
  const [activeThumb1, setActiveThumb1] = useState();
  const [activeThumb2, setActiveThumb2] = useState();
  const warna = [
    "/assets/images/ioniq-5/nb9_27.webp",
    "/assets/images/ioniq-5/r4g_27.webp",
    "/assets/images/ioniq-5/sk8_27.webp",
    "/assets/images/ioniq-5/w3t_27.webp",
    "/assets/images/ioniq-5/wtw_27.webp",
    "/assets/images/ioniq-5/nb9_27.webp",
    "/assets/images/ioniq-5/r4g_27.webp",
    "/assets/images/ioniq-5/sk8_27.webp",
    "/assets/images/ioniq-5/w3t_27.webp",
    "/assets/images/ioniq-5/wtw_27.webp",
  ];
  const interior = [
    "/assets/images/ioniq-5/Fitur-Interior-1-Kolom_1120x600.webp",
    "/assets/images/ioniq-5/Fitur-Interior-Universal-Island-2-Kolom_544x360.webp",
    "/assets/images/ioniq-5/Fitur-Interior-Vision-Roof-2-Kolom_544x360.webp",

    "/assets/images/ioniq-5/Fitur-Interior-1-Kolom_1120x600.webp",
    "/assets/images/ioniq-5/Fitur-Interior-Universal-Island-2-Kolom_544x360.webp",
    "/assets/images/ioniq-5/Fitur-Interior-Vision-Roof-2-Kolom_544x360.webp",

    "/assets/images/ioniq-5/Fitur-Interior-1-Kolom_1120x600.webp",
    "/assets/images/ioniq-5/Fitur-Interior-Universal-Island-2-Kolom_544x360.webp",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ioniq 5 - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Ioniq 5 - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta
          name="og:image"
          content={"/assets/images/ioniq-5/Home-Banner-1860-x-720-pc.webp"}
        />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              src="/assets/images/ioniq-5/Home-Banner-1860-x-720-pc.webp"
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
                src="https://www.youtube.com/embed/QWKzPG6dE_o"
                title="IONIQ 5 - Walkaround with Fitra Eri"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Welcome on board. Let’s power up the future.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Era mobilitas masa depan telah hadir. Inilah mobil listrik
                pertama yang sepenuhnya dibuat di Indonesia. Rasakan pengalaman
                baru dengan IONIQ 5.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/ioniq-5/Common-Whole-Slide-Set-2-kolom-544x360-1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Charging flexibly.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Bebas rasa khawatir ketika mengendarai IONIQ 5. IONIQ 5 telah
                dilengkapi portable charger yang dapat terhubung ke stop kontak
                dinding standar. Selain itu IONIQ 5 juga dapat menunjang
                pengisian daya sampai 80% hanya dalam +/- 18 menit*.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/ioniq-5/Charging-Flexibly-1-Kolom-pc-ID-1024x549.webp"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 space-y-4">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Vehicle to Load (V2L).
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic text-center w-full">
                Fitur V2L memungkinkan IONIQ 5 menjadi sumber daya listrik
                sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah
                kemudahan dan kenyamanan Anda saat dalam perjalanan.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="/assets/images/ioniq-5/V2L-1-Kolom-pc-ID-1024x549.webp"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 h-full ">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Interior & Exterior
              </h2>
            </div>
            <div className="select-none space-y-2 w-full h-full my-8">
              <div className="w-full h-[18.75rem] sm:h-[40rem]">
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
                      activeThumb2 && !activeThumb2.destroyed
                        ? activeThumb2
                        : null,
                  }}
                  modules={[Autoplay, Navigation, Thumbs, Pagination]}
                  className="w-full h-full"
                >
                  {interior.map((val, index) => (
                    <SwiperSlide key={index}>
                      <img alt={`warna-${index}`} src={val} />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full sm:h-[12.5rem] h-[5rem]">
                <Swiper
                  onSwiper={setActiveThumb2}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={10}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="w-full h-full"
                >
                  {interior.map((val, index) => (
                    <SwiperSlide key={index} className="h-screen">
                      <img alt={`warna-${index}`} src={val} />
                      <div className="bg-slate-400/20 absolute w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4 h-full ">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold text-slate-700 text-[2rem] text-center w-full leading-8">
                Warna
              </h2>
            </div>
            <div className="select-none space-y-2 w-full h-full my-8">
              <div className="w-full h-[11.5rem] sm:h-full">
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
                  className="w-full h-full"
                >
                  {warna.map((val, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className={"w-full h-full object-contain object-center"}
                        alt={`warna-${index}`}
                        src={val}
                      />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
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
                      spaceBetween: 20,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={10}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="w-full h-full"
                >
                  {warna.map((val, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
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
        </div>
        <div>
          <Tentang />
        </div>
      </div>
    </>
  );
}

export default Ioniq5;
