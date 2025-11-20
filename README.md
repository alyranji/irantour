# لندینگ پیج ایران تور (Iran Tour) 🌍

این پروژه یک وب‌سایت رزرو و خرید تورهای مسافرتی به نام **ایران تور** است که با استفاده از **Next.js 15** (با App Router) و **TypeScript** توسعه داده شده است.

## ویژگی‌های کلیدی ✨

- طراحی مدرن و ریسپانسیو
- نمایش تورهای محبوب با اسلایدر (Swiper)
- بخش وبلاگ با آخرین مطالب
- فرم جستجوی تور (مبدا، مقصد، تاریخ رفت و برگشت)
- قابلیت پیگیری خرید
- صفحه اصلی با المان‌های جذاب و CTA

## تکنولوژی‌های استفاده شده 🛠️

- **Framework:** Next.js 15 (با TurboPack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Iran Yekan (فارسی) و ROKH (برای عناوین)
- **Slider:** Swiper.js
- **Icons:** SVG
- **Build Tool:** Next.js Built-in

## نحوه راه‌اندازی 🚀

1.  **کلوْن کردن پروژه:**

    ```bash
    git clone <url-repository>
    cd traveling
    ```

2.  **نصب وابستگی‌ها:**

    ```bash
    npm install
    # یا
    yarn install
    ```

3.  **اجرا در حالت توسعه:**

    ```bash
    npm run dev
    # یا
    yarn dev
    ```

    برنامه روی [http://localhost:3000](http://localhost:3000) قابل دسترسی خواهد بود.

4.  **ساخت نسخه Production:**
    ```bash
    npm run build
    npm start
    ```

## اسکریپت‌های قابل استفاده 📜

- `npm run dev` - اجرای پروژه در حالت توسعه با TurboPack
- `npm run build` - ساخت پروژه برای Production
- `npm run start` - اجرای نسخه Production ساخته شده
- `npm run lint` - بررسی خطاهای کد با ESLint

## توضیحات تکمیلی ℹ️

- پروژه از قابلیت **TurboPack** در Next.js 15 برای کامپایل سریع‌تر استفاده می‌کند.
- از **فونت‌های محلی** (Iran Yekan) برای نمایش بهتر متن فارسی استفاده شده است.
- استایل‌دهی به طور کامل با **Tailwind CSS** انجام شده و کلاس‌های سفارشی در `globals.css` تعریف شده‌اند.
- داده‌های تورها از فایل `tours.json` بارگذاری می‌شوند.
- کامپوننت `Copyright` در layout اصلی قرار گرفته و در تمام صفحات نمایش داده می‌شود.

## توسعه‌دهنده 👨‍💻

این پروژه توسط [علی رنجبران](https://github.com/alyranji) توسعه داده شده است.
