"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '@/public/background.jpg'
import slider2 from '@/public/background1.jpg'

// Our custom button component

interface Slide {
  id: number;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider=function(){
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {/* {data.map(({ id, image}) => ( */}
            <div className="h-[300px]">
              <SwiperSlide>
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${slider1.src}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>

                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${slider2.src}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
              </SwiperSlide>
            </div>
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
