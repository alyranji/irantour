import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Button from "./button";
import Menu from "./menu";
const Header = () => {
  return (
    <header className="flex container my-6 mx-auto items-center justify-between">
      <div>
        <Link href="/">
          <Image src={Logo} alt="logo image" width={116} height={45} />
        </Link>
      </div>
      <div>
        <Menu />
      </div>
      <div className="flex gap-2">
        <Button type="tracking">پیگیری خرید</Button>
        <Button type="buy">ثبت نام</Button>
        <Button type="login">ورود</Button>
      </div>
    </header>
  );
};
export default Header;
