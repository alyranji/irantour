"use client";
import React from "react";

export default function Copyright() {
  return (
    <div className="fixed bottom-4 left-8 z-50">
      <div className="group relative flex items-center">
        {/* متن که با هاور باز میشه */}
        <span className="absolute left-20 bottom-1/2 translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500 bg-black/70 text-white text-sm tracking-wide rounded-xl px-4 py-2 backdrop-blur-md shadow-lg whitespace-nowrap">
          This website was developed by Ali Ranjbaran
        </span>

        {/* دایره اصلی */}
        <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white shadow-lg cursor-pointer group-hover:scale-110 transition-transform duration-500">
          ©
        </div>
      </div>
    </div>
  );
}
