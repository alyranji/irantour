"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Button from "./button";
import Menu from "./menu";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex container my-6 mx-auto items-center justify-between p-4 md:p-0">
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo image" width={116} height={45} />
        </Link>
      </div>

      {/* منو برای دسکتاپ */}
      <div className="hidden md:block">
        <Menu />
      </div>

      {/* دکمه همبرگر برای موبایل */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50 md:hidden p-4">
          <Menu />
        </div>
      )}

      <div className="hidden md:flex gap-2">
        <Button type="tracking">پیگیری خرید</Button>
        <Button type="buy">ثبت نام</Button>
        <Button type="login">ورود</Button>
      </div>

      {/* دکمه‌های موبایل */}
      <div className="md:hidden flex gap-2">
        <Button type="login">ورود</Button>
      </div>
    </header>
  );
};
export default Header;
