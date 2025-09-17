import Image from "next/image";
import posterImage from "../../public/poster.svg";
const Poster = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="img-wrapper relative w-fit mx-auto">
        <Image
          src={posterImage}
          alt="poster"
          width={1299}
          height={500}
          className="mx-auto w-full h-auto object-contain"
          priority
        />
        <h1 className="absolute top-4 md:top-14 right-2 md:right-10 w-[200px] md:w-[390px] text-xl md:text-3xl lg:text-4xl text-center md:text-right">
          بهترین لحظات زندگی را با
          <span className="text-color1 "> ایران تور </span>
          تجربه کنی.
        </h1>
      </div>
    </div>
  );
};

export default Poster;
