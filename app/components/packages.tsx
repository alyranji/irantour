"use client";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import tours from "@/app/tours/tours.json";

function Packages() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-0">
      <div className="flex justify-center items-center flex-col gap-5 text-center px-4">
        <h2>
          <span className="text-color1"> محبوب ترین</span> پکیج‌های تور
        </h2>
        <p>با این تور ها می توانید به مکان های بی نظیر سفر کنید</p>
      </div>

      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="!py-10 !px-4 md:!px-0"
      >
        {tours.map((tour) => (
          <SwiperSlide
            key={tour.id}
            className="swiper-slide rounded-[32px] w-full max-w-full md:max-w-[33%] border border-1-[#fdfdfd] flex flex-col gap-4"
          >
            <img
              src={tour.image}
              alt=""
              className="rounded-t-[32px] rounded-bl-[32px] h-[270px] object-cover w-full"
            />
            <div className="details pt-4 pb-5 px-4 flex flex-col gap-3 flex-1">
              <h3 className="text-lg md:text-xl">{tour.title} </h3>
              <div className="flex justify-between">
                <span className="text-[#878383] text-sm md:text-base">
                  {tour.details}
                </span>
                <span className="text-[#950B0B] font-bold">{tour.price}</span>
              </div>

              <div className="flex justify-between flex-col md:flex-row gap-2 md:gap-0">
                <button className="py-2 px-4 md:px-10 bg-[#FF8300] rounded-lg text-white text-sm md:text-base">
                  خرید
                </button>
                <button className="py-2 px-4 md:px-10 text-sm md:text-base">
                  جزییات
                </button>
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
