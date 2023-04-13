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
// import "./santafe.css";
import { Navigation, Thumbs, Pagination } from "swiper";

function SantaFe() {
  const [activeThumb, setActiveThumb] = useState();
  console.log(activeThumb);
  const santafe = [
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/lagoon-blue-768x291.png",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/phantom-black-768x291.png",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/glacier-white-768x291.png",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/magnetic-force-768x291.png",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/typhoon-silver-768x291.png",
  ];
  const interior = [
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-interior-3rd-row-folded-and-2nd-row-folded-40-pc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-interior-3rd-row-folded-and-2nd-row-folded-60-pc.pg_.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-interior-3rd-row-folded-pc.jpg",
    "https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-interior-7-seats-pc.jpg",
  ];
  return (
    <div className="w-full overflow-x-hidden no-scrollbar">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[500px] overflow-hidden">
          <img
            src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-cover.png"
            alt="banner"
            className="object-cover w-full h-full object-bottom"
          />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
        <div className="w-[60%]">
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
              New Body Platform
            </h2>
            <p className="font-poppins  text-slate-700 text-[18px] italic">
              A new, next-generation platform has been applied to the Santa Fe,
              maximizing vehicle stability on top of larger interior space. The
              new platform also brings with it significant improvements in
              collision safety, thanks to the increased usage of Advanced
              High-Strength Steel and hot stamping.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              className="object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/new-body-platform.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="w-full flex flex-col items-center justify-center space-y-8">
            <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
              Wise and Wide Care
            </h2>
            <p className="font-poppins  text-slate-700 text-[18px] italic">
              No matter what kind of day lies ahead of you, Santa Fe will always
              give you a great start. Whether you face your usual routine or a
              special occasion to surprise your family, Santa Fe will let you
              and your family move easily, comfortably and stylishly. Things are
              always better with Santa Fe, in all ways.
            </p>
          </div>
          <div className="w-full h-full my-8">
            <Swiper
              loop={true}
              style={{
                "--swiper-navigation-color": "rgb(51 65 85)",
                "--swiper-pagination-color": "rgb(51 65 85)",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  activeThumb && !activeThumb.destroyed ? activeThumb : null,
              }}
              modules={[Navigation, Thumbs]}
              className="w-full h-full "
            >
              {santafe.map((val, index) => (
                <SwiperSlide
                  key={index}
                  className="select-none overflow-hidden relative"
                >
                  <img
                    className="w-full object-cover object-center"
                    alt={`santa-fe-${index}`}
                    src={val}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setActiveThumb}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              modules={[Navigation, Thumbs]}
              className="mySwiper"
            >
              {santafe.map((val, index) => (
                <SwiperSlide
                  key={index}
                  className="select-none overflow-hidden relative"
                >
                  <img
                    className="w-full object-cover object-center"
                    alt={`santa-fe-${index}`}
                    src={val}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="flex flex-col items-center justify-center my-4">
            <div className="w-full  space-y-4  flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/new-cascading-grill-connecting-with-the-headlights.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/t-shape-headlights-provide-a-unique-light-signature.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/rear-bumper-integration.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/rear-combination-light.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/front-bumper-with-3d-sculpture.jpg"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <img
                    className="block w-full h-full  object-cover object-center"
                    src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/new-18-alloy-wheel-235-60.png"
                    alt=""
                  />
                  <div className="bg-slate-400/20 absolute w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] space-y-8">
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
              Progressive SUV with Proactive Care.
            </h2>
            <p className="font-poppins  text-slate-700 text-[18px] italic">
              An advanced SUV that actively consider users satisfactory driving
              experience of human-oriented, state of the art technology.
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
            <img
              className="object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-cover-4-2048x1303.jpg"
              alt=""
            />
            <img
              className="object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/design-cover.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[60%] space-y-8">
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
              Experience space in complete comfort.
            </h2>
            <p className="font-poppins  text-slate-700 text-[18px] italic">
              Soft-to-the-touch textures, sweeping character lines and an
              elevated centre bridge console feature within a cleverly practical
              cabin space perfectly suited for the busy schedule of an active
              family.
            </p>
          </div>
          <div className="w-full  space-y-4  flex flex-col items-center justify-center">
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/experience-space-in-complete-comfort.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full" />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/bridge-type-high-control.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/shift-by-wire-automatic-transmission.jpg"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/123-inch-lcd-cluster.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/8-inch-avn-unit.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/large-space.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/smart-power-tailgate-signature.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/walk-in-switch.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/dual-2nd-row-usb-ports.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/rear-door-manual-curtain.png"
                  alt=""
                />
                <div className="bg-slate-400/20 absolute w-full h-full " />
              </div>
              <div className="w-full relative flex items-center justify-center">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/full-auto-ac-system.png"
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
                  "--swiper-pagination-color": "rgb(51 65 85)",
                  "--swiper-navigation-color": "rgb(51 65 85)",
                  "--swiper-navigation-size": "20px",
                  "--swiper-pagination-bullet-inactive-color":
                    "rgb(51 65 85 / 0.5)",
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
        <div className="w-[60%] space-y-8">
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <h2 className="font-poppins font-semibold text-slate-700 text-[36px]">
              Safety first and foremost.
            </h2>
            <p className="font-poppins  text-slate-700 text-[18px] italic">
              At Hyundai, we believe that a high standard of safety should never
              be an optional extra. That’s why we created Hyundai
              SmartSense™[P5] – our standard advanced system of interconnected
              cameras, radars, alerts, alarms and ultrasonic sensors that know
              what’s behind you, what’s beside you, and can get your Santa Fe to
              react to what’s in front of you.
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
            <img
              className="object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/safety-first-and-foremost-2048x788.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/surround-view-monitor-svm.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full " />
            </div>
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/safe-exit-assist-sea.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/blind-spot-view-monitor-bvm.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full " />
            </div>
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/blind-spot-collision-avoidance-assist.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full" />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
            <img
              className="object-contain object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/forward-collision-avoidance-assist-fca.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/rear-cross-traffic-collision-avoidance-assist-rcca.jpg"
                alt=""
              />
              <div className="bg-slate-400/20 absolute w-full h-full " />
            </div>
            <div className="w-full relative flex items-center justify-center">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2021/04/lane-following-assist-lfa.jpg"
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
  );
}

export default SantaFe;
