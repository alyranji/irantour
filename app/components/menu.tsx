import Link from "next/link";
const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <Link href="/">
          <li className="text-sm">صفحه اصلی</li>
        </Link>
        <Link href="/">
          <li className="text-sm">لیست تورها</li>
        </Link>
        <Link href="/">
          <li className="text-sm">مقصدها</li>
        </Link>
        <Link href="/">
          <li className="text-sm">اقامت</li>
        </Link>
        <Link href="/">
          <li className="text-sm">وبلاگ</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
