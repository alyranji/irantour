"use client";
import { useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import packageBgIcon from "@/public/packageBg.svg";
import tours from "@/app/tours/tours.json";
import brazil from "@/public/rio.jpg";

function Packages() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center flex-col gap-5">
        <h2>
          <span className="text-color1"> محبوب ترین</span> پکیج‌های تور
        </h2>
        <p>با این تور ها می توانید به مکان های بی نظیر سفر کنید</p>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="!py-10 "
      >
        {tours.map((tour) => (
          <SwiperSlide
            key={tour.id}
            className="swiper-slide rounded-[32px] w-[33%] max-w-[33%] border border-1-[#fdfdfd] flex flex-col gap-4 "
          >
            <img
              src={tour.image}
              alt=""
              className="rounded-t-[32px] rounded-bl-[32px] h-[270px] object-cover w-full"
            />
            <div className="details pt-4 pb-5 px-4 flex flex-col gap-3 flex-1">
              <h3>{tour.title} </h3>
              <div className="flex justify-between">
                {" "}
                <span className="text-[#878383]">{tour.details}</span>
                <span className="text-[#950B0B]">{tour.price}</span>
              </div>

              <div className="flex justify-between">
                <button className="py-2 px-10 bg-[#FF8300] rounded-lg text-white">
                  خرید
                </button>
                <button className="py-2 px-10">جزییات</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-scrollbar"></div>
    </section>
  );
}

export default Packages;
