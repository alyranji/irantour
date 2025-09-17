"use client";
import calendarIcon from "@/public/calendar.svg";
import Image from "next/image";

function Bargasht() {
  return (
    <div className="flex items-center justify-between relative cursor-pointer bg-white rounded-lg shadow-[0px_24px_740px_0px_rgba(0,_0,_0,_0.25)] h-[61px] min-w-[215px]  ">
      <span className="text-[#838080] text-sm absolute left-[127px] select-none">
        تاریخ برگشت
      </span>
      <Image
        src={calendarIcon}
        alt="down icon"
        style={{
          width: "24px",
          height: "24px",
          position: "absolute",
          right: "180px",
          userSelect: "none",
        }}
      />
      <div
        className={`${"absolute bg-white overflow-y-auto max-h-[25vh] rounded-lg shadow-[0px_24px_740px_0px_rgba(0,_0,_0,_0.25)] top-20 w-full"}`}
      ></div>
    </div>
  );
}

export default Bargasht;
