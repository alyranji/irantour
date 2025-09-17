import React from "react";
import greece from "@/public/greece.jpg";
import omman from "@/public/omman.webp";
import cyprus from "@/public/cyprus.jpg";
import uae from "@/public/uae.webp";

function BlogPosts() {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-6 !my-16 px-4 md:px-0">
      <div className="mx-auto text-center">
        <h2>
          <span className="text-color1"> تازه‌ترین</span> وبلاگ‌ها
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 md:pb-0">
        <div className="img-wrapper min-w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={cyprus.src}
            alt=""
            className="w-full h-[233px] rounded-3xl object-cover"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light] text-sm md:text-base">
            جاذبه گردشگری در قبرس
          </div>
        </div>
        <div className="img-wrapper min-w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={omman.src}
            alt=""
            className="w-full h-[233px] rounded-3xl object-cover"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light] text-sm md:text-base">
            سرمایه گذاری در عمان
          </div>
        </div>
        <div className="img-wrapper min-w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={uae.src}
            alt=""
            className="w-full h-[233px] rounded-3xl object-cover"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light] text-sm md:text-base">
            انتخاب شغل در کشور امارات
          </div>
        </div>
        <div className="img-wrapper min-w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={greece.src}
            alt=""
            className="w-full h-[233px] rounded-3xl object-cover"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light] text-sm md:text-base">
            گردشگری در یونان
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
