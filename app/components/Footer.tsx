import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-200 w-full py-4">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <Image src={logo} alt="Logo" width={116} height={40} />
        <p className="text-sm text-gray-700 text-center sm:text-right">
          © کلیه حقوق این سرویس محفوظ و متعلق به شرکت سفرهای ایران تور می‌باشد
        </p>
      </div>
    </footer>
  );
}
