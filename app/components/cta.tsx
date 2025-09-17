import React from "react";
import Image from "next/image";
import yerevan from "@/public/yerevan.jpg";

function Cta() {
  return (
    <div className="bg-[#EBF1F7] my-8">
      <section className="max-w-[1200px] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-0">
        <div className="flex-1 flex flex-col gap-5 order-2 md:order-1 text-center md:text-right">
          <h3 className="text-2xl font-bold">
            <span className="text-[#FF8300]">بهترین سفرتان</span> را تجربه کنید
          </h3>
          <p className="text-lg md:text-xl">
            تور ویژه به ایروان اکنون برای شما محیاست تا با خانواده تان سفری پر
            شور و هیجان داشته باشید. این سفر فوق العاده در تاریخ جذاب پیش روی
            شما رخ خواهد داد و برای رزرو هرچه سریعتر با همکاران ما در تماس
            باشید.
          </p>
          <button className="py-2 px-10 bg-[#FF8300] rounded-lg text-white w-fit mx-auto md:mx-0">
            بزن بریم!
          </button>
        </div>
        <div className="flex items-center order-1 md:order-2">
          <Image
            src={yerevan.src}
            alt="isfahan"
            width={500}
            height={500}
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Cta;
