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

function SantaFe() {
  const [activeThumb, setActiveThumb] = useState();
  const santafe = [
    "/assets/images/santa-fe/lagoon-blue-768x291.png",
    "/assets/images/santa-fe/phantom-black-768x291.png",
    "/assets/images/santa-fe/glacier-white-768x291.png",
    "/assets/images/santa-fe/magnetic-force-768x291.png",
    "/assets/images/santa-fe/typhoon-silver-768x291.png",
    "/assets/images/santa-fe/lagoon-blue-768x291.png",
    "/assets/images/santa-fe/phantom-black-768x291.png",
    "/assets/images/santa-fe/glacier-white-768x291.png",
  ];
  const interior = [
    "/assets/images/santa-fe/design-interior-3rd-row-folded-and-2nd-row-folded-40-pc.jpg",
    "/assets/images/santa-fe/design-interior-3rd-row-folded-and-2nd-row-folded-60-pc.pg_.jpg",
    "/assets/images/santa-fe/design-interior-3rd-row-folded-pc.jpg",
    "/assets/images/santa-fe/design-interior-7-seats-pc.jpg",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Santa Fe - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Santa Fe - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta
          name="og:image"
          content={"/assets/images/santa-fe/design-cover.png"}
        />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[30rem] overflow-hidden">
            <img
              src="/assets/images/santa-fe/design-cover.png"
              alt="banner"
              className="object-cover w-full h-full object-bottom"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4">
            <div className="w-full flex flex-col items-center justify-center">
              <h2 className="font-poppins font-semibold leading-10 text-slate-700 text-[2rem] w-full text-center">
                New Body Platform
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                A new, next-generation platform has been applied to the Santa
                Fe, maximizing vehicle stability on top of larger interior
                space. The new platform also brings with it significant
                improvements in collision safety, thanks to the increased usage
                of Advanced High-Strength Steel and hot stamping.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                className="object-cover object-center"
                src="/assets/images/santa-fe/new-body-platform.png"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4">
            <div className="w-full grid grid-cols-1 gap-4">
              <h2 className="font-poppins font-semibold leading-10 text-slate-700 text-[2rem] w-full text-center">
                Wise and Wide Care
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                No matter what kind of day lies ahead of you, Santa Fe will
                always give you a great start. Whether you face your usual
                routine or a special occasion to surprise your family, Santa Fe
                will let you and your family move easily, comfortably and
                stylishly. Things are always better with Santa Fe, in all ways.
              </p>
            </div>
            <div className="w-full h-full my-8 space-y-2">
              <div className="w-full h-[18.75rem] sm:h-full">
                <Swiper
                  loop={true}
                  style={{
                    "--swiper-navigation-color": "#FFFFFF",
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-size": "1.6rem",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      activeThumb && !activeThumb.destroyed
                        ? activeThumb
                        : null,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Navigation, Thumbs]}
                  className="w-full h-full"
                >
                  {santafe.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className="select-none overflow-hidden relative"
                    >
                      <img className="" alt={`santa-fe-${index}`} src={val} />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
                    </SwiperSlide>
                  ))}
                </Swiper>{" "}
              </div>
              <div className="w-full h-full ">
                <Swiper
                  onSwiper={setActiveThumb}
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
                  modules={[Navigation, Thumbs]}
                  className=""
                >
                  {santafe.map((val, index) => (
                    <SwiperSlide
                      key={index}
                      className="select-none overflow-hidden relative"
                    >
                      <img className="" alt={`santa-fe-${index}`} src={val} />
                      <div className="bg-slate-400/20 absolute w-full h-full " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full  space-y-4  flex flex-col items-center justify-center">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/new-cascading-grill-connecting-with-the-headlights.jpg"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/t-shape-headlights-provide-a-unique-light-signature.jpg"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/rear-bumper-integration.png"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/rear-combination-light.jpg"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/front-bumper-with-3d-sculpture.jpg"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                  <div className="w-full relative flex items-center justify-center">
                    <img
                      className="block w-full h-full  object-cover object-center"
                      src="/assets/images/santa-fe/new-18-alloy-wheel-235-60.png"
                      alt=""
                    />
                    <div className="bg-slate-400/20 absolute w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold leading-10 text-slate-700 text-[2rem] w-full text-center">
                Progressive SUV with Proactive Care.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                An advanced SUV that actively consider users satisfactory
                driving experience of human-oriented, state of the art
                technology.
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 ">
              <div className="w-full h-full relative flex items-center justify-center">
                <img
                  className="object-cover object-center"
                  src="/assets/images/santa-fe/design-cover-4-2048x1303.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full h-full relative flex items-center justify-center">
                <img
                  className="object-cover object-center"
                  src="/assets/images/santa-fe/design-cover.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold leading-10 text-slate-700 text-[2rem] w-full text-center">
                Experience space in complete comfort.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                Soft-to-the-touch textures, sweeping character lines and an
                elevated centre bridge console feature within a cleverly
                practical cabin space perfectly suited for the busy schedule of
                an active family.
              </p>
            </div>
            <div className="w-full  space-y-4  flex flex-col items-center justify-center">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full object-cover object-center"
                  src="/assets/images/santa-fe/experience-space-in-complete-comfort.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/bridge-type-high-control.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/shift-by-wire-automatic-transmission.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/123-inch-lcd-cluster.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/8-inch-avn-unit.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/large-space.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/smart-power-tailgate-signature.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/walk-in-switch.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/dual-2nd-row-usb-ports.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/rear-door-manual-curtain.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full " />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="/assets/images/santa-fe/full-auto-ac-system.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="w-full  h-full select-none">
                <Swiper
                  slidesPerView={3}
                  direction="horizontal"
                  spaceBetween={30}
                  style={{
                    "--swiper-navigation-color": "#FFFFFF",
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-size": "1.6rem",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation]}
                  className="w-full h-full"
                >
                  {interior.map((val, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <img
                        className=" object-contain object-center"
                        src={val}
                        alt={`interior-design-${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full flex flex-col items-center justify-center px-4 space-y-8">
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <h2 className="font-poppins font-semibold leading-10 text-slate-700 text-[2rem] w-full text-center">
                Safety first and foremost.
              </h2>
              <p className="font-poppins  text-slate-700 text-[1rem] italic w-full text-center">
                At Hyundai, we believe that a high standard of safety should
                never be an optional extra. That’s why we created Hyundai
                SmartSense™[P5] – our standard advanced system of interconnected
                cameras, radars, alerts, alarms and ultrasonic sensors that know
                what’s behind you, what’s beside you, and can get your Santa Fe
                to react to what’s in front of you.
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <img
                className="object-cover object-center"
                src="/assets/images/santa-fe/safety-first-and-foremost-2048x788.png"
                alt=""
              />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/surround-view-monitor-svm.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full " />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/safe-exit-assist-sea.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/blind-spot-view-monitor-bvm.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full " />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/blind-spot-collision-avoidance-assist.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 relative">
              <img
                className="object-contain object-center"
                src="/assets/images/santa-fe/forward-collision-avoidance-assist-fca.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full " />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/rear-cross-traffic-collision-avoidance-assist-rcca.jpg"
                  alt=""
                />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="/assets/images/santa-fe/lane-following-assist-lfa.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
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

export default SantaFe;
