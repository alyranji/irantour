import React from "react";
import isf from "@/public/isf.jpg";
import greece from "@/public/greece.jpg";
import omman from "@/public/omman.webp";
import cyprus from "@/public/cyprus.jpg";
import uae from "@/public/uae.webp";

function BlogPosts() {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-6 !my-16">
      <div className="mx-auto">
        <h2>
          <span className="text-color1"> تازه‌ترین</span> وبلاگ‌ها
        </h2>
      </div>
      <div className="flex gap-6">
        <div className="img-wrapper w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={cyprus.src}
            alt=""
            className="w-[273px] h-[233px] rounded-3xl"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light]">
            جاذبه گردشگری در قبرس
          </div>
        </div>
        <div className="img-wrapper w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={omman.src}
            alt=""
            className="w-[273px] h-[233px] rounded-3xl"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light]">
            سرمایه گذاری در عمان{" "}
          </div>
        </div>
        <div className="img-wrapper w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={uae.src}
            alt=""
            className="w-[273px] h-[233px] rounded-3xl"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light]">
            انتخاب شغل در کشور امارات{" "}
          </div>
        </div>
        <div className="img-wrapper w-[273px] h-[233px] rounded-3xl relative">
          <img
            src={greece.src}
            alt=""
            className="w-[273px] h-[233px] rounded-3xl"
          />
          <div className="absolute flex justify-center items-center w-full bottom-0 h-[20%] text-white rounded-b-[24px] bg-[rgba(0,0,0,0.6)] [background-blend-mode:hard-light]">
            گردشگری در یونان{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
