import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center text-center"

        style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s")`,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

         }}
          >




            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
              Breathe Fresh, Live Green
            </h2>
            <p className="text-white text-lg text-center mt-2">
              Discover plants that purify your air and calm your mind.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
<div
  className="h-full flex flex-col justify-center items-center text-center"
  style={{
    backgroundImage: `url("slider2.avif")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Care Made Simple
            </h2>
            <p className="text-white text-lg mt-2">
              Easy tips for watering, sunlight, and fertilizing.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
<div
  className="h-full flex flex-col justify-center items-center text-center"
  style={{
    backgroundImage: `url("slider3.avif")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Style Your Space
            </h2>
            <p className="text-white text-lg mt-2 font-semibold">
              Transform your home with eco‑friendly decor ideas.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
