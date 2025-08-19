import Image from "next/image";
import posterImage from "../../public/poster.svg";
const Poster = () => {
  return (
    <div>
      <div className="img-wrapper relative w-fit mx-auto">
        <Image
          src={posterImage}
          alt="poster"
          width={1299}
          className="mx-auto"
        />
        <h1 className="absolute top-14 right-10  w-[390px]">
          بهترین لحظات زندگی را با
          <span className="text-color1 "> ایران تور </span>
          تجربه کنی.
        </h1>
      </div>
    </div>
  );
};

export default Poster;
